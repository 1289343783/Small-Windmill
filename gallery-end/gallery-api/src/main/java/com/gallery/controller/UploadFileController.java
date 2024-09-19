package com.gallery.controller;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.UploadGalleryDto;
import com.gallery.service.GalleryImagesService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/file")
public class UploadFileController {

    @Resource
    private GalleryImagesService galleryImagesService;


    @PostMapping("/upload")
    public ResponseResult uploadFile(UploadGalleryDto galleryDto) throws Exception {
        return galleryImagesService.saveGallery(galleryDto);
    }

    @GetMapping("/{imgKeyNum}/{fileName}")
    public void downloadFile(@PathVariable String imgKeyNum, @PathVariable String fileName, HttpServletResponse response) {
        galleryImagesService.downloadFile(imgKeyNum, fileName, response);
    }
}
