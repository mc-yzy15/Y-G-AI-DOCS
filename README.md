# 瀛光 AI 文档站

瀛光 AI 的静态开发者文档站，面向 GitHub Pages 直接部署，无需构建步骤。

## 仓库结构

- **中文品牌页**：`首页.html`（站点入口）、`关于.html`（品牌说明 + 服务状态监测），为自包含单页，内联 CSS，自动适配明暗主题。
- **开发者文档站**：`index.html` 为文档首页，其余为各协议 / 平台说明页，共享 `assets/style.css` 与 `assets/docs.js`，无外部 CDN 依赖。
- **政策文件**：`用户协议.txt`、`隐私政策.txt`，正式公开法律文本，不得随意改写。
- **`gateway/`**：NEWAPI 兼容的 AI Gateway 实现（Node.js 零外部依赖），独立子项目，详见 `gateway/README.md`。

## 页面地图

### 站点入口
- `首页.html` - 品牌首页（入口）
- `关于.html` - 品牌说明与服务状态
- `index.html` - 文档站概览

### 文档站：开始使用
- `index.html` - 概览
- `quickstart.html` - 快速开始
- `authentication.html` - 鉴权与 Base URL

### 文档站：协议文档
- `openai-chat.html` - OpenAI Chat Completions
- `openai-responses.html` - OpenAI Responses
- `anthropic.html` - Anthropic Messages / Claude
- `gemini.html` - Gemini API

### 文档站：平台使用
- `models.html` - 模型列表与选择
- `billing.html` - 计费与用量
- `user-guide.html` - 用户手册
- `faq.html` - 常见问题

### 文档站：安全与说明
- `security.html` - API Key 安全
- `about.html` - 关于瀛光 AI

### 共享资源
- `assets/style.css` - 文档站共享样式（CSS 变量 + 明暗自适应，无 Bootstrap）
- `assets/docs.js` - 共享交互脚本（侧栏抽屉、复制按钮、Base URL 切换、代码标签页）

### 相关政策
- `用户协议.txt`
- `隐私政策.txt`

## GitHub Pages 直接部署步骤

1. 创建仓库（例如 `Y-G-AI-DOCS`）。
2. 将本仓库静态文件上传到仓库根目录，保持现有相对路径不变。
3. 打开 GitHub 仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择默认分支，并将目录设为 `/ (root)`。
6. 保存设置，等待 GitHub Pages 生成站点地址。
7. 打开生成的 Pages URL，检查首页、各文档页、政策链接和外链是否可用。

本仓库不需要构建步骤、Actions 工作流或服务器端路由重写。

## 设计约定

- 文档站使用统一设计语言：`assets/style.css` 中的 CSS 变量 + `color-scheme` 明暗自适应、圆角卡片、深色代码块。
- 页面结构与交互统一：顶栏、左侧导航（移动端抽屉）、内容区、页脚；脚本与样式按相对路径引用 `assets/`。
- 新增文档页时复用现有模板：`data-page` 标识当前页、侧栏 `data-nav-page` 高亮当前项。
- 代码示例统一深色 `code-shell` 块，可一键复制；Base URL 用 `base-url-value` 占位并支持顶部选择器切换。

## 占位符与密钥安全规则

- 所有示例只使用占位符：`sk-YOUR_API_KEY`、`YOUR_MODEL_ID`、Base URL 用 `base-url-value` 动态占位。
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
