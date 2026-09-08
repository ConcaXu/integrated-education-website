# 活动管理接口文档

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
| activityType | String | 否 | 活动类型 |
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

### 2. 导出活动列表

**接口地址**: `POST /content/activity/export`

**接口描述**: 导出活动列表为 Excel 文件

**请求权限**: `content:activity:export`

**请求参数**: 同查询列表接口，用于筛选导出数据

**响应**: Excel 文件流（`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`）

**文件名格式**: `活动_yyyyMMddHHmmss.xlsx`

---

### 3. 查询详情

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

### 4. 新增活动

**接口地址**: `POST /content/activity`

**接口描述**: 创建新的活动

**请求权限**: `content:activity:add`

**日志记录**: 是（业务类型：新增）

**请求体**:
```json
{
  "activityTitle": "春季促销活动",
  "activityType": "MICE",
  "activityDesc": "活动描述内容",
  "startDate": "2024-03-01 00:00:00",
  "endDate": "2024-03-31 23:59:59",
  "activityStatus": "1"
}
```

**请求参数说明**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| activityTitle | String | 是 | 活动标题 |
| activityType | String | 是 | 活动类型 |
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

### 5. 修改活动

**接口地址**: `PUT /content/activity`

**接口描述**: 更新已有活动信息

**请求权限**: `content:activity:edit`

**日志记录**: 是（业务类型：修改）

**请求体**:
```json
{
  "activityId": 1,
  "activityTitle": "春季促销活动（更新）",
  "activityType": "MICE",
  "activityDesc": "更新后的活动描述",
  "startDate": "2024-03-01 00:00:00",
  "endDate": "2024-04-30 23:59:59",
  "activityStatus": "1"
}
```

**请求参数说明**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| activityId | Long | 是 | 活动ID |
| activityTitle | String | 是 | 活动标题 |
| activityType | String | 是 | 活动类型 |
| activityDesc | String | 否 | 活动描述 |
| startDate | Date | 是 | 开始时间 |
| endDate | Date | 是 | 结束时间 |
| activityStatus | String | 否 | 活动状态 |

**响应示例**:
```json
{
  "code": 200,
  "msg": "修改成功"
}
```

---

### 6. 删除活动

**接口地址**: `DELETE /content/activity/{activityIds}`

**接口描述**: 批量删除活动（支持单个或多个ID）

**请求权限**: `content:activity:remove`

**日志记录**: 是（业务类型：删除）

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| activityIds | Long[] | 是 | 活动ID数组（多个ID用逗号分隔，如：1,2,3） |

**请求示例**:
- 删除单个: `DELETE /content/activity/1`
- 删除多个: `DELETE /content/activity/1,2,3`

**响应示例**:
```json
{
  "code": 200,
  "msg": "删除成功"
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

### 活动类型 (activityType)

| 值 | 说明 |
|----|------|
| MICE | MICE活动 |
| International_Cooperation | 国际合作 |
| Chine_Content | 中国内容 |
| HomePage | 首页活动 |
| ABOUT_APIMTC | 关于APIMTC |
| Educationtype | 教育类型 |

### 活动状态 (activityStatus)

| 值 | 说明 |
|----|------|
| 0 | 未开始 |
| 1 | 进行中 |
| 2 | 已结束 |
| 3 | 已取消 |
