##  GALLERY-WINDMILL API 版本

ALLERY-WINDMILL* 的API v1上传图片的Key。

```html
userKey
```

## 请求方法

API v1调用可以使用POST请求方法完成，通过POST请求方法完成上传。

## 图片上传

```javascript
http://windmill.asia/api/file/upload
```

## 参数

#### 密钥（必填）

API密钥。

#### 图片（必填）

二进制文件。（最大20 MB）

#### 名称（可选）

文件的名称，如果上传带有POST和多部分/表单数据的文件，则会自动检测到该名称

#### 图片高度（可选）

如果您想在返回图片JSON中存在高度，请启用此选项（默认是100）

#### 图片宽度（可选）

如果您想在返回图片JSON中存在宽度，请启用此选项（默认是100）

#### 图片格式（可选）

如果您想在返回图片JSON中存在图片格式，请启用此选项（格式：image/*）

#### 图片描述（可选）

如果您给图片加一些描述信息，请启用此选项

### 示例调用

```typescript
interface IImageParam {
    imgWidth: number
    imgHeight: number
    imgFormat: string
    imgName: string
    imgDesc: string
}

const imgKey = "Yourownkey"

/**
 * 上传图片
 * @param {File} file 图片文件
 * @param param
 * @returns promise
 */
export const uploadImageApi = (file: File, param?: IImageParam) => {
    let formData = new FormData();
    let imgWidth = param?.imgWidth ? String(param.imgWidth) : "100"
    let imgHeight = param?.imgHeight ? String(param.imgHeight) : "100"
    formData.append("file", file)
    formData.append("imgKey", imgKey)
    formData.append("imgWidth", imgWidth)
    formData.append("imgHeight", imgHeight)
    formData.append("imgFormat", param?.imgFormat == undefined ? '' : param.imgFormat)
    formData.append("imgName", param?.imgName == undefined ? '' : param.imgName)
    formData.append("imgDesc", param?.imgDesc == undefined ? '' : param.imgDesc)
    return http.post<IResponseType<IGallery>>("/api/file/upload", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
```

注意：上传本地文件时始终使用POST

## API响应

API v1响应以JSON格式显示所有上传的图像信息。

JSON响应将具有标头状态代码，以便您轻松注意请求是否正常。它还将输出状态属性。

## 示例响应（JSON）

```json
{
	"code":200,
	"data":{
		"id":"21",
		"imgDesc":"这个描述！！",
		"imgFormat":".jpg",
		"imgHash":"7f5d40acbc43139e1e49d8a0ccc4b705",
		"imgHeight":100,
		"imgName":"bug.jpg",
		"imgSize":30913,
		"imgType":"image/jpeg",
		"imgUrl":"http://192.168.2.103:9000/windmill/bug.jpg",
		"imgWidth":100,
		"userid":"1"
	},
	"msg":"操作成功"
}
```

## 响应字段

返回的字段意思

```java
private Long id; // 主键id
private Long userid; //用户id
private String imgType; //创建时间
private Integer imgSize; // 图片大小
private Integer imgWidth; //创建时间
private Integer imgHeight; //图片宽度
private String imgFormat; //图片格式
private String imgHash; //图片hash
private String imgName; //图片名称
private String imgUrl; //图片地址
private String imgDesc;//图片描述
private Date createTime; //创建时间
private Date updateTime; //更新时间
```

