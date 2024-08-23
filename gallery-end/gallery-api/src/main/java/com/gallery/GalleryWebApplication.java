package com.gallery;

import com.gallery.config.MinioConfig;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import javax.annotation.Resource;

@SpringBootApplication
@EnableScheduling
@MapperScan("com.gallery.mapper")
public class GalleryWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(GalleryWebApplication.class, args);
    }

}
