## ng-web

## 说明

### 创建项目
- 使用angular-cli创建项目
- 使用express-generator创建node服务

### 使用
- 配置package.json文件，启动angular项目，转接到proxy.conf.json文件，
```javascript
"scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json --open",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```

- 配置proxy.conf.json文件，中转到node层，由node层请求数据，返回到页面
```javascript
{
  "/api":{
    "target":"http://localhost:4222"
  }
}

```

- 找到\server\bin目录下没有后缀名的文件，使用node+文件名，开启node服务

