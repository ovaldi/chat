## Chat
Chat Demo (正式项目建议用TypeScript重写，以享受强类型的优势）

### 设计 & 约定
- action直接通过字面量创建，减少封装和维护actionCreator的成本，type可定义为常量；
- action分为两种，一种是complex action，通常在saga.watch中引用，一种是simple action，通常在reducer中引用；
- 从数据的维度来设计action，保持action的灵活性，而不要从API的角度，以免action地狱；
- saga分两种，一种是全局的，一种是页面级，页面级的请在inject函数中动态注入；
- reducer分两种，一种是全局的，一种是页面级，页面级的请在inject函数动态注入；

### 目录 & 结构
- hoc: 高阶组件
- misc: 杂项文件
- utils: 各种辅助工具
- sagas: 全局saga
- actions: 全局action
- reducers: 全局reducer
- middlewares: redux中间件

### 开发调试
- `npm start`
- 访问http://localhost:9191/login

### 编译打包
`npm run build`

### 上传CDN
`npm run cdn`
