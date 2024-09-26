/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : windmill_gallery

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 19/09/2024 16:14:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gallery_images
-- ----------------------------
DROP TABLE IF EXISTS `gallery_images`;
CREATE TABLE `gallery_images`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `userId` bigint(0) NOT NULL COMMENT '用户id',
  `img_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '图片类型',
  `img_size` int(0) NULL DEFAULT NULL COMMENT '图片大小',
  `img_width` int(0) NULL DEFAULT NULL COMMENT '图片宽度',
  `img_height` int(0) NULL DEFAULT NULL COMMENT '图片高度',
  `img_format` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片格式',
  `img_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片hash',
  `img_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片名称',
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片地址',
  `img_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '图片描述',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '创建id',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '更新id',
  `is_delete` tinyint(0) NOT NULL DEFAULT 0 COMMENT '是否删除 0-未删除 1-已删除',
  `img_key_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片key值',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '图片信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gallery_images
-- ----------------------------
INSERT INTO `gallery_images` VALUES (3, 1, 'image/jpeg', 572875, 100, 100, '.jpg', '0d97fec71d40f943626a1eb7468f3e6a', '004250-1689266570104f.jpg', 'http://127.0.0.1:8081/file/1/004250-1689266570104f.jpg', '', '2024-08-22 17:10:20', '2024-09-19 15:34:05', NULL, NULL, 1, '1');
INSERT INTO `gallery_images` VALUES (4, 1, 'image/jpeg', 1314329, 100, 100, '.jpg', '504aa384501e50008e543626ec9cce1a', '风景壁纸1.jpg', 'http://127.0.0.1:8081/file/2/风景壁纸1.jpg', '', '2024-08-22 17:10:23', '2024-09-19 15:34:05', NULL, NULL, 1, '2');
INSERT INTO `gallery_images` VALUES (5, 1, 'image/jpeg', 1928187, 100, 100, '.jpg', 'b580b2e91d45b2bfdd5cfb82afd05a15', '风景 (1).jpg', 'http://127.0.0.1:8081/file/3/风景 (1).jpg', '', '2024-08-22 17:10:59', '2024-09-19 15:34:05', NULL, NULL, 1, '3');
INSERT INTO `gallery_images` VALUES (6, 1, 'image/png', 9472699, 100, 100, '.png', 'd6447aa9ed109ae2d0ee4445d554fcbd', '风景 (1).png', 'http://127.0.0.1:8081/file/4/风景 (1).png', '', '2024-08-22 17:11:02', '2024-09-19 15:34:05', NULL, NULL, 1, '4');
INSERT INTO `gallery_images` VALUES (7, 1, 'image/jpeg', 3862412, 100, 100, '.jpg', 'c57eb7863ec4233f503176ca3f90f8d5', '风景 (2).jpg', 'http://127.0.0.1:8081/file/5/风景 (2).jpg', '', '2024-08-22 17:11:05', '2024-09-19 15:34:05', NULL, NULL, 1, '5');
INSERT INTO `gallery_images` VALUES (8, 1, 'image/png', 717908, 100, 100, '.png', '88ce620c842690fb5dfd06ab0e575a84', '风景 (2).png', 'http://127.0.0.1:8081/file/6/风景 (2).png', '', '2024-08-22 17:11:08', '2024-09-19 15:34:05', NULL, NULL, 1, '6');
INSERT INTO `gallery_images` VALUES (9, 1, 'image/jpeg', 2469873, 100, 100, '.jpg', '0df099d886fcac59a9266d7c58c07068', '风景 (3).jpg', 'http://127.0.0.1:8081/file/7/风景 (3).jpg', '', '2024-08-22 17:11:14', '2024-09-19 15:34:05', NULL, NULL, 1, '7');
INSERT INTO `gallery_images` VALUES (10, 1, 'image/jpeg', 1968508, 100, 100, '.jpg', 'b66301190e1a8e275527c63352d9a37e', '风景 (4).jpg', 'http://127.0.0.1:8081/file/8/风景 (4).jpg', '', '2024-08-22 17:11:17', '2024-09-19 15:34:05', NULL, NULL, 1, '8');
INSERT INTO `gallery_images` VALUES (11, 1, 'image/jpeg', 7384828, 100, 100, '.jpg', 'eeb178987e95f669df8e40daa2c0e46d', '风景 (5).jpg', 'http://127.0.0.1:8081/file/9/风景 (5).jpg', '', '2024-08-22 17:11:30', '2024-09-19 15:34:05', NULL, NULL, 1, '9');
INSERT INTO `gallery_images` VALUES (12, 1, 'image/jpeg', 13058176, 100, 100, '.jpg', 'ec3b8eac7e5f946d6a5d5114a0cf4f21', '风景 (6).jpg', 'http://127.0.0.1:8081/file/10/风景 (6).jpg', '', '2024-08-22 17:11:34', '2024-09-19 15:34:05', NULL, NULL, 1, '10');
INSERT INTO `gallery_images` VALUES (13, 1, 'image/jpeg', 3748025, 100, 100, '.jpg', '3611920349c9c3cc19a7f0d7e3c8615c', '风景 (7).jpg', 'http://127.0.0.1:8081/file/11/风景 (7).jpg', '', '2024-08-22 17:11:38', '2024-09-19 15:34:05', NULL, NULL, 1, '11');
INSERT INTO `gallery_images` VALUES (14, 1, 'image/jpeg', 6717531, 100, 100, '.jpg', 'd146ef524370a63f34005cb9b6bc557c', '风景 (8).jpg', 'http://127.0.0.1:8081/file/12/风景 (8).jpg', '', '2024-08-22 17:11:41', '2024-09-19 15:34:05', NULL, NULL, 1, '12');
INSERT INTO `gallery_images` VALUES (15, 1, 'image/jpeg', 8086492, 100, 100, '.jpg', '0bedea9710dce6baf524167ba77732cb', '风景 (9).jpg', 'http://127.0.0.1:8081/file/13/风景 (9).jpg', '', '2024-08-22 17:11:44', '2024-09-19 15:34:05', NULL, NULL, 1, '13');
INSERT INTO `gallery_images` VALUES (16, 1, 'image/jpeg', 11815192, 100, 100, '.jpg', 'ac9cb5fa5505b5c8316e24be2db67e8c', '风景 (10).jpg', 'http://127.0.0.1:8081/file/14/风景 (10).jpg', '', '2024-08-22 17:11:48', '2024-09-19 15:34:05', NULL, NULL, 1, '14');
INSERT INTO `gallery_images` VALUES (17, 1, 'image/jpeg', 1404985, 100, 100, '.jpg', '3215d766090dc507435f2eae55cdcf1d', '风景 (11).jpg', 'http://127.0.0.1:8081/file/15/风景 (11).jpg', '', '2024-08-22 17:11:53', '2024-09-19 15:34:05', NULL, NULL, 1, '15');
INSERT INTO `gallery_images` VALUES (18, 1, 'image/jpeg', 1314329, 100, 100, '.jpg', '504aa384501e50008e543626ec9cce1a', '风景壁纸1.jpg', 'http://127.0.0.1:8081/file/16/风景壁纸1.jpg', '', '2024-08-22 17:12:01', '2024-09-19 15:34:05', NULL, NULL, 1, '16');
INSERT INTO `gallery_images` VALUES (19, 1, 'image/jpeg', 108370, 100, 100, '.jpg', 'e9f4959b2a412ee5c45ebb7181b12319', '鼬', 'http://127.0.0.1:8081/file/17/火影 (1).jpg', '这是我的描述', '2024-08-22 17:12:04', '2024-09-19 15:34:05', NULL, NULL, 1, '17');
INSERT INTO `gallery_images` VALUES (20, 1, 'image/jpeg', 139751, 100, 100, '.jpg', '54c7344d5124eaa3da8637cdf71c652e', '火影 (2).jpg', 'http://127.0.0.1:8081/file/18/火影 (2).jpg', '我是描述', '2024-08-22 17:12:06', '2024-09-19 15:31:51', NULL, NULL, 1, '18');
INSERT INTO `gallery_images` VALUES (21, 1, 'image/jpeg', 30913, 100, 100, '.jpg', '7f5d40acbc43139e1e49d8a0ccc4b705', 'bug.jpg', 'http://127.0.0.1:8081/file/19/bug.jpg', '', '2024-08-23 20:17:16', '2024-09-19 15:31:38', NULL, NULL, 1, '19');
INSERT INTO `gallery_images` VALUES (22, 1, 'image/jpeg', 30480, 100, 100, '.jpg', 'd382449c9e9306b88734824e131b40f1', 'bug2.jpg', 'http://127.0.0.1:8081/file/20/bug2.jpg', '', '2024-08-23 22:43:16', '2024-09-19 15:31:28', NULL, NULL, 1, '20');
INSERT INTO `gallery_images` VALUES (23, 1, 'image/png', 531501, 100, 100, '.png', '788e6e9cb42b9fd1e020cbdfc7c2480a', '孙悟空.png', 'http://127.0.0.1:8081/file/21/孙悟空.png', '', '2024-08-23 22:43:40', '2024-09-19 15:31:19', NULL, NULL, 1, '21');
INSERT INTO `gallery_images` VALUES (24, 1, 'image/jpeg', 6717531, 100, 100, '.jpg', 'd146ef524370a63f34005cb9b6bc557c', '风景 (8).jpg', 'http://127.0.0.1:8081/file/22/风景 (8).jpg', '', '2024-09-16 00:47:11', '2024-09-19 15:31:13', NULL, NULL, 0, '22');
INSERT INTO `gallery_images` VALUES (25, 1, 'image/png', 717908, 100, 100, '.png', '88ce620c842690fb5dfd06ab0e575a84', '风景 (2).png', 'http://127.0.0.1:8081/file/23/风景 (2).png', '', '2024-09-19 14:17:57', '2024-09-19 15:31:06', NULL, NULL, 0, '23');
INSERT INTO `gallery_images` VALUES (26, 1, 'image/jpeg', 1968508, 100, 100, '.jpg', 'b66301190e1a8e275527c63352d9a37e', '风景 (4).jpg', 'http://127.0.0.1:9000/file/24/风景 (4).jpg', '', '2024-09-19 14:32:28', '2024-09-19 15:30:52', NULL, NULL, 0, '24');
INSERT INTO `gallery_images` VALUES (27, 1, 'image/jpeg', 3748025, 100, 100, '.jpg', '3611920349c9c3cc19a7f0d7e3c8615c', '风景 (7).jpg', 'http://127.0.0.1:8081/file/25/风景 (7).jpg', '', '2024-09-19 14:33:55', '2024-09-19 15:30:30', NULL, NULL, 0, '25');
INSERT INTO `gallery_images` VALUES (28, 1, 'image/jpeg', 1404985, 100, 100, '.jpg', '3215d766090dc507435f2eae55cdcf1d', '风景 (11).jpg', 'http://127.0.0.1:8081/file/GLY8652-1726730938906/风景 (11).jpg', '', '2024-09-19 15:28:58', '2024-09-19 15:28:58', NULL, NULL, 0, 'GLY8652-1726730938906');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '邮箱',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `salt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '盐',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '创建id',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '更新id',
  `is_admin` tinyint(0) NOT NULL DEFAULT 0 COMMENT '是否是管理员 0-不是 1-是',
  `is_delete` tinyint(0) NOT NULL DEFAULT 0 COMMENT '是否删除 0-未删除 1-已删除',
  `img_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户上传的key',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, '无敌小风车大王', '1289343783@qq.com', '70f4621282f9510cb9cbaffd291f50f6', '5qh4sprw0n03hc4d39dlyglblhkqh0nt', '2024-08-23 01:15:28', '2024-09-15 22:49:40', NULL, NULL, 0, 0, '06c00e7dc34f4c3f95308459bc87db14', 'http://127.0.0.1:9000/windmill/火影 (1).jpg');

SET FOREIGN_KEY_CHECKS = 1;
