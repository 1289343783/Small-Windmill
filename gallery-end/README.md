# gallery-end 图库后端

####  项目简介

[gallery-end](https://gitee.com/wh578/gallery-windmill/tree/master/gallery-end)后端基于当前流行技术组合的前后端分的项目： SpringBoot2+MybatisPlus+sa-token+redis的前后端分离图库。

#### 核心依赖

| 依赖         | 版本   |
| ------------ | :----- |
| Spring Boot  | 2.7.x  |
| minio        | 8.3.4  |
| Sa-token     | 1.38.0 |
| Mybatis Plus | 3.5.2  |
| hutool       | 5.8.16 |
| swagger      | 3.0.0  |

###  基本环境（必备）

1.  JDK：8+
2.  Redis 3.0+
3.  Maven 3.0+
4. minio  RELEASE.2023-12-06T09-09-22Z
5.  MYSQL 8+

### 运行项目-后端

1. 使用git拉取代码

```bash
 git clone https://gitee.com/guchengwuyue/yshopmall.git
```

2. idea打开项目加载依赖目录如下：

![image-20240926210723329](C:\Users\wdnmd\AppData\Roaming\Typora\typora-user-images\image-20240926210723329.png)

3. 设置数据账号密码

![image-20240926211152672](C:\Users\wdnmd\AppData\Roaming\Typora\typora-user-images\image-20240926211152672.png)

4. 设置redis密码

![image-20240926211556254](C:\Users\wdnmd\AppData\Roaming\Typora\typora-user-images\image-20240926211556254.png)

5. 设置minio账号密码

![image-20240926211812229](C:\Users\wdnmd\AppData\Roaming\Typora\typora-user-images\image-20240926211812229.png)

6. 导入mysql数据，运行项目下的windmill_gallery.sql

![image-20240926212124572](C:\Users\wdnmd\AppData\Roaming\Typora\typora-user-images\image-20240926212124572.png)

7. 配置完成启动项目 运行GalleryWebApplication.java

![image-20240926212336940](C:\Users\wdnmd\AppData\Roaming\Typora\typora-user-images\image-20240926212336940.png)

  

