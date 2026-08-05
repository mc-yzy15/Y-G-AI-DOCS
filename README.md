# Y-G-AI-DOCS

瀛光 AI 静态开发者文档站仓库，面向 GitHub Pages 直接部署。

## 页面地图

### 站点入口
- `index.html` - 概览
- `quickstart.html` - 快速开始
- `authentication.html` - 鉴权与 Base URL

### 协议文档
- `openai-chat.html` - OpenAI Chat Completions
- `openai-responses.html` - OpenAI Responses
- `anthropic.html` - Anthropic Messages / Claude
- `gemini.html` - Gemini API

### 平台使用
- `models.html` - 模型列表与选择
- `user-guide.html` - 平台用户手册
- `billing.html` - 计费与用量
- `faq.html` - 常见问题

### 安全与说明
- `security.html` - 安全与合规
- `about.html` - 关于瀛光 AI

### 共享资源
- `assets/style.css` - 共享样式
- `assets/docs.js` - 共享交互脚本

### 相关政策
- `用户协议.txt`
- `隐私政策.txt`

## GitHub Pages 直接部署步骤

1. 创建仓库 `Y-G-AI-DOCS`。
2. 将本仓库中的静态文件上传到仓库根目录，保持现有相对路径不变。
3. 打开 GitHub 仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择默认分支，并将目录设为 `/ (root)`。
6. 保存设置，等待 GitHub Pages 生成站点地址。
7. 打开生成的 Pages URL，检查首页、各协议页、政策链接和外链是否可用。

本仓库不需要构建步骤、Actions 工作流或服务器端路由重写。

## 占位符与密钥安全规则

- 所有示例只使用占位符：`API_KEY`、`MODEL_ID`、`BASE_URL`、`AUTH_HEADER`。
- 不要把真实密钥、真实管理接口、真实内部路径或后台配置写入仓库。
- 不要把密钥放进前端 JavaScript、截图、日志、Issue、提交说明或公开文档中。
- 如果需要记录示例请求，只展示脱敏后的内容。
- 如果部署路径、认证头或模型名发生变化，先确认当前部署，再更新文档示例。
- `用户协议.txt` 和 `隐私政策.txt` 属于正式公开文件，不要为了示例随意改写其法律内容、日期、主体或官方 URL。

## 更新规则

- 只使用相对链接，保持 GitHub Pages 子路径兼容。
- 修改协议说明、路径、认证头、模型名、价格或用量描述前，先核对当前部署和官方文档。
- 新增页面时，同时更新导航、页面地图和相关内部链接。
- 不添加管理接口、系统设置、渠道管理、供应商配置或其他运维后台内容。
- 页面内容应保持静态可读，核心信息不能依赖脚本才能显示。
- 更新完成后，至少检查一次首页、政策链接、外链和浏览器控制台是否有明显问题。
