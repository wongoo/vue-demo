
# Develop

## Vue 项目架构设计与工程化实践

参考: 	https://github.com/berwin/Blog/issues/14

目录结构:
```
├── README.md
├── build                   # build 脚本
├── config                  # prod/dev build config 文件
├── hera                    # 代码发布上线
├── index.html              # 最基础的网页
├── package.json
├── src                     # Vue.js 核心业务
│   ├── App.vue             # App Root Component
│   ├── api                 # 接入后端服务的基础 API
│   ├── assets              # 静态文件
│   ├── components          # 组件
│   ├── event-bus           # Event Bus 事件总线，类似 EventEmitter
│   ├── main.js             # Vue 入口文件
│   ├── router              # 路由
│   ├── service             # 服务
│   ├── store               # Vuex 状态管理
│   ├── util                # 通用 utility，directive, mixin 还有绑定到 Vue.prototype 的函数
│   └── view                # 各个页面
├── static                  # DevServer 静态文件
└── test                    # 测试
```
