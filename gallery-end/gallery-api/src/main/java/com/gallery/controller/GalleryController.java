package com.gallery.controller;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.GalleryQueryDTO;
import com.gallery.domain.dto.UpdateGalleryDTO;
import com.gallery.service.GalleryImagesService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;

@RestController
@RequestMapping("/gallery")
public class GalleryController {

    @Resource
    private GalleryImagesService galleryImagesService;

    @GetMapping("/page")
    public ResponseResult getGalleryPageList(@Valid GalleryQueryDTO galleryQueryDTO) {
        return galleryImagesService.getGalleryPageList(galleryQueryDTO);
    }

    @GetMapping("/{id}")
    public ResponseResult getGalleryById(@PathVariable("id") Long id) {
        return galleryImagesService.getGalleryById(id);
    }

    @PostMapping("/update")
    public ResponseResult updateGalleryById(@Valid @RequestBody UpdateGalleryDTO updateGalleryDTO) {
        return galleryImagesService.updateGalleryById(updateGalleryDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseResult deleteGalleryById(@PathVariable("id") Long id) {
        return galleryImagesService.deleteGalleryById(id);
    }
}
