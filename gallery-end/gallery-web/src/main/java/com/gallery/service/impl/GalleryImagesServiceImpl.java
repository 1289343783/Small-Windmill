package com.gallery.service.impl;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.gallery.common.result.ResponseResult;
import com.gallery.config.DomainWebConfig;
import com.gallery.config.MinioConfig;
import com.gallery.constants.SystemConstants;
import com.gallery.domain.dto.GalleryQueryDTO;
import com.gallery.domain.dto.UpdateGalleryDTO;
import com.gallery.domain.dto.UploadGalleryDto;
import com.gallery.domain.entity.GalleryImages;
import com.gallery.domain.entity.UserInfo;
import com.gallery.domain.vo.GalleryImageVo;
import com.gallery.domain.vo.PageVo;
import com.gallery.enums.AppHttpCodeEnum;
import com.gallery.exception.SystemException;
import com.gallery.exception.TransactionalException;
import com.gallery.service.GalleryImagesService;
import com.gallery.mapper.GalleryImagesMapper;
import com.gallery.service.UserInfoService;
import com.gallery.utils.*;
import io.minio.StatObjectResponse;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import static com.gallery.common.result.ResponseResult.okResult;

/**
 * @author wdnmd
 * @description 针对表【gallery_images(图片信息表)】的数据库操作Service实现
 * @createDate 2024-08-19 00:00:14
 */
@Service
public class GalleryImagesServiceImpl extends ServiceImpl<GalleryImagesMapper, GalleryImages> implements GalleryImagesService {

    @Resource
    private MinioConfig minIOConfig;

    @Resource
    private DomainWebConfig domainWebConfig;

    @Resource
    private UserInfoService userInfoService;

    /**
     * 上传文件
     *
     * @param galleryDto 参数信息
     * @return ResponseResult
     * @throws IOException
     */
    @Override
    @Transactional(rollbackFor = TransactionalException.class)
    public ResponseResult saveGallery(UploadGalleryDto galleryDto) throws Exception {
        if (galleryDto.getFile() == null) {
            throw new SystemException(AppHttpCodeEnum.FILE_DO_NULL);
        }
        if (galleryDto.getImgKey() == null || galleryDto.getImgKey().isEmpty()) {
            throw new SystemException(AppHttpCodeEnum.PARAM_NOT_VALID);
        }
        UserInfo userInfo = userInfoService.getUserInfoByUploadKey(galleryDto.getImgKey());
        // 验证上传凭证
        if (!verifyUploadKey(galleryDto.getImgKey(), userInfo.getImgKey())) {
            throw new SystemException(AppHttpCodeEnum.USER_KEY_ILLEGALITY);
        }
        GalleryImages galleryInfo = galleryDto.getGalleryInfo();
        String fileName = galleryInfo.getImgName();
        MultipartFile file = galleryDto.getFile();
        try {
            // 处理上传文件的逻辑
            String imgKeyNum = ImgKeyUtils.generateImgKeyNum();
            MinIOUtils.uploadFile(minIOConfig.getBucketName(), fileName, file.getInputStream());
            String url = domainWebConfig.getDomainName() + "/" + "file/" + imgKeyNum + "/" + fileName;
            galleryInfo.setUserid(userInfo.getId());
            galleryInfo.setImgKeyNum(imgKeyNum);
            galleryInfo.setImgUrl(url);
            save(galleryInfo);
            //返回图片链接
            return ResponseResult.okResult(BeanCopyUtils.copyBean(galleryInfo, GalleryImageVo.class));
        } catch (IOException | TransactionalException e) {
            e.printStackTrace();
            //回滚事务
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        } finally {
            if (file.getOriginalFilename() != null) {
                File tempFile = new File(System.getProperty("java.io.tmpdir") + File.separator + fileName);
                if (tempFile.exists()) {
                    boolean deleted = tempFile.delete();
                    if (!deleted) {
                        // 处理删除临时文件失败的情况
                        System.err.println("删除临时文件失败：" + tempFile.getAbsolutePath());
                    }
                }
            }
        }
        return ResponseResult.errorResult(AppHttpCodeEnum.SYSTEM_ERROR);
    }

    /**
     * @param id id
     * @return
     */
    @Override
    public ResponseResult getGalleryById(Long id) {
        if (id == null || id <= 0) {
            throw new SystemException(AppHttpCodeEnum.PARAM_NOT_VALID);
        }
        GalleryImages oneGallery = getOneGallery(id);
        return ResponseResult.okResult(BeanCopyUtils.copyBean(oneGallery, GalleryImageVo.class));
    }

    /**
     * 获取文件列表
     *
     * @param galleryQueryDTO 参数
     * @return ResponseResult
     */
    @Override
    public ResponseResult getGalleryPageList(GalleryQueryDTO galleryQueryDTO) {
        UserInfo user = userInfoService.getById(StpUtils.getUserId());
        // 构造查询条件
        LambdaQueryWrapper<GalleryImages> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(GalleryImages::getUserid, user.getId());
        wrapper.eq(GalleryImages::getIsDelete, SystemConstants.GALLERY_STATUS_NORMAL);
        wrapper.orderByDesc(GalleryImages::getCreateTime);

        if (galleryQueryDTO.getDate() != null) {
            try {
                Map<String, Date> dateRange = DateUtils.getDateRange(galleryQueryDTO.getDate());
                wrapper.between(GalleryImages::getCreateTime, dateRange.get("start"), dateRange.get("end"));
            } catch (ParseException e) {
                throw new SystemException(AppHttpCodeEnum.DATE_NOT_VALID);
            }
        }

        // 从数据库中分页查询
        Page<GalleryImages> page = new Page<>(galleryQueryDTO.getPageNum(), galleryQueryDTO.getPageSize());
        this.page(page, wrapper);
        List<GalleryImages> galleryList = page.getRecords();
        long pages = page.getPages();
        List<GalleryImageVo> articleListVos = BeanCopyUtils.copyBeanList(galleryList, GalleryImageVo.class);
        return ResponseResult.okResult(new PageVo<>(page.getTotal(), pages, articleListVos));
    }

    /**
     * 修改图
     *
     * @param updateGalleryDTO 参数
     * @return ResponseResult
     */
    @Override
    public ResponseResult updateGalleryById(UpdateGalleryDTO updateGalleryDTO) {
        Long id = updateGalleryDTO.getId();
        if (id == null || id <= 0) {
            throw new SystemException(AppHttpCodeEnum.PARAM_NOT_VALID);
        }
        GalleryImages oneGallery = getOneGallery(updateGalleryDTO.getId());
        BeanUtil.copyProperties(updateGalleryDTO, oneGallery);
        updateById(oneGallery);
        return ResponseResult.okResult();
    }

    /**
     * 删除图片
     *
     * @param id id
     * @return ResponseResult
     * @throws Exception
     */
    @Override
    public ResponseResult deleteGalleryById(Long id) {
        if (id == null || id <= 0) {
            throw new SystemException(AppHttpCodeEnum.PARAM_NOT_VALID);
        }
        GalleryImages oneGallery = getOneGallery(id);
        boolean b = update(new UpdateWrapper<GalleryImages>().set("is_delete", 1).eq("id", oneGallery.getId()));
        return b ? ResponseResult.okResult() : ResponseResult.errorResult(AppHttpCodeEnum.SYSTEM_ERROR);
    }

    /**
     * 获取图片
     *
     * @param id id
     * @return
     */
    @Override
    public GalleryImages getOneGallery(Long id) {
        LambdaQueryWrapper<GalleryImages> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(GalleryImages::getId, id);
        if (!StpUtils.isAdmin()) {
            wrapper.eq(GalleryImages::getUserid, StpUtils.getUserId());
        }
        GalleryImages oneGallery = getOne(wrapper);
        if (oneGallery == null) {
            throw new SystemException(AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        }
        return oneGallery;
    }

    /**
     * 下载文件
     *
     * @param fileName 文件名
     * @param response HttpServletResponse
     */
    @Override
    public void downloadFile(String imgKeyNum, String fileName, HttpServletResponse response) {
        verifyDownloadFile(imgKeyNum);
        // 创建输入流
        InputStream is = null;
        try {
            // 获取对象的元数据
            StatObjectResponse stat = MinIOUtils.getStatObject(minIOConfig.getBucketName(), fileName);
            // 响应 设置内容类型
            response.setContentType(stat.contentType());
            // 响应 设置编码格式
            response.setCharacterEncoding("UTF-8");
            // 响应 设置头文件
            response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
            // 输入流
            is = MinIOUtils.getObject(minIOConfig.getBucketName(), fileName);
            // 将字节从输入流复制到输出流
            IOUtils.copy(is, response.getOutputStream());
        } catch (Exception e) {
            throw new SystemException(AppHttpCodeEnum.DOWNLOAD_FILE_ERROR);
        } finally {
            try {
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                throw new SystemException(AppHttpCodeEnum.SYSTEM_ERROR);
            }
        }
    }

    /**
     * 校验数据是否存在
     *
     * @param imgKeyNum 名称
     * @return boolean
     */
    public void verifyDownloadFile(String imgKeyNum) {
        LambdaQueryWrapper<GalleryImages> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(GalleryImages::getImgKeyNum, imgKeyNum);
        GalleryImages galleryImage = this.getOne(wrapper);
        Assert.notNull(galleryImage, AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        if (galleryImage.getIsDelete() == 1) {
            throw new SystemException(AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        }
    }

    /**
     * 验证上传图片的key
     *
     * @return boolean
     */
    public boolean verifyUploadKey(String Key, String userKey) {
        if (SystemConstants.ADMIN_USER.equals(1L)) {
            return true;
        }
        return Key.equals(userKey);
    }


}




