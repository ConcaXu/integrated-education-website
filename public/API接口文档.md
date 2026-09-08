# 页面接口文档

## 基础信息

- **Base URL**: `/content/activity`
- **认证方式**: 需要登录认证（使用 `@RequiresPermissions` 注解）
- **响应格式**: JSON

## 接口列表

### 1. 查询列表

**接口地址**: `GET /content/activity/list`

**接口描述**: 分页查询活动列表，支持多条件筛选

**请求权限**: `content:activity:list`

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| pageNum | Integer | 否 | 页码（默认1） |
| pageSize | Integer | 否 | 每页数量（默认10） |
| activityTitle | String | 否 | 活动标题（模糊查询） |
| type | String | 否 | 活动类型 |
| startDate | Date | 否 | 开始时间（范围查询起始） |
| endDate | Date | 否 | 结束时间（范围查询结束） |

**响应示例**:
```json
{
  "code": 200,
  "msg": "查询成功",
  "rows": [
    {
      "activityId": 1,
      "activityTitle": "春季促销活动",
      "activityType": "MICE",
      "activityDesc": "活动描述内容",
      "startDate": "2024-03-01 00:00:00",
      "endDate": "2024-03-31 23:59:59",
      "activityStatus": "1",
      "createTime": "2024-02-15 10:30:00"
    }
  ],
  "total": 100
}
```

---



### 2. 查询详情

**接口地址**: `GET /content/activity/{activityId}`

**接口描述**: 根据活动ID查询活动详细信息

**请求权限**: `content:activity:query`

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| activityId | Long | 是 | 活动ID |

**响应示例**:
```json
{
  "code": 200,
  "msg": "查询成功",
  "data": {
    "activityId": 1,
    "activityTitle": "春季促销活动",
    "activityType": "MICE",
    "activityDesc": "活动描述内容",
    "startDate": "2024-03-01 00:00:00",
    "endDate": "2024-03-31 23:59:59",
    "activityStatus": "1",
    "createTime": "2024-02-15 10:30:00",
    "updateTime": "2024-02-20 15:00:00"
  }
}
```

---


**请求参数说明**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| activityTitle | String | 是 | 活动标题 |
| type | String | 是 | 活动类型 |
| activityDesc | String | 否 | 活动描述 |
| startDate | Date | 是 | 开始时间 |
| endDate | Date | 是 | 结束时间 |
| activityStatus | String | 否 | 活动状态 |

**响应示例**:
```json
{
  "code": 200,
  "msg": "新增成功"
}
```

---


## 通用响应码

| 状态码 | 说明 |
|--------|------|
| 200 | 操作成功 |
| 500 | 服务器内部错误 |
| 401 | 未授权/未登录 |
| 403 | 无权限访问 |

## 注意事项

1. 所有接口都需要先登录获取token，并在请求头中携带
2. 时间格式统一为：`yyyy-MM-dd HH:mm:ss`
3. 删除操作支持批量删除，传入多个ID用逗号分隔
4. 导出功能会根据查询条件导出筛选后的数据
5. 所有操作都会记录操作日志（除查询和导出外）

## 数据字典

### 页面类型 (type)

| 值 | 说明 |
|----|------|
| HomePage | 首页 |
| ABOUT_APIMTC | 关于APIMTC |
| Educationtype | 教育流动 |
| MICE | MICE与商务 |
| International_Cooperation | 国际合作 |
| Chine_Content | 中国门户 |
| aboutUs | 联系我们 |

### 活动状态 (activityStatus)

| 值 | 说明 |
|----|------|
| 0 | 未开始 |
| 1 | 进行中 |
| 2 | 已结束 |
| 3 | 已取消 |
