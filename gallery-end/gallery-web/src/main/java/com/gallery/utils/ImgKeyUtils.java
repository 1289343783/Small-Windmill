package com.gallery.utils;

import java.util.Random;

public class ImgKeyUtils {

    private ImgKeyUtils() {

    }

    /**
     * 生成图片key值
     *
     * @return string
     */
    public static String generateImgKeyNum() {
        return "GLY" + getRandomFourNum() + "-" + System.currentTimeMillis();
    }

    /**
     * 随机生成4位数字
     *
     * @return int
     */
    public static int getRandomFourNum() {
        Random random = new Random();
        return random.nextInt(9000) + 1000;
    }

}
