# 🧩 交互式个人作品集网站 · 开发任务清单

本项目旨在通过构建一个完整的个人作品集网站，系统掌握 HTML、CSS、JavaScript 和 React 的核心技能。

## 🟢 第一阶段：静态页面（HTML + CSS）

- [✔] 创建基本项目结构（`index.html`, `style.css`）
- [✔] 编写语义化 HTML：
  - 使用 `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
  - 包含：首页 Hero、关于我、项目展示、联系表单
- [✔] 实现响应式导航栏（桌面 + 移动端汉堡菜单）
- [✔] 使用 Flexbox 或 Grid 布局项目卡片区域
- [✔] 添加基础样式：
  - 字体、颜色、间距、圆角、阴影
  - 悬停效果（如卡片 hover 放大）
- [✔] 实现响应式设计（适配手机、平板、桌面）
- [✔] 添加 favicon 和页面标题

## 🟡 第二阶段：加入 JavaScript 交互

- [✔] 实现导航栏“当前页面高亮”（滚动到某区域时自动激活对应菜单项）
- [✔] 添加“回到顶部”按钮（滚动一定距离后淡入）
- [✔] 实现暗色/亮色模式切换按钮
  - 使用 `class` 切换主题
  - 用 `localStorage` 保存用户偏好
- [✔] 为联系表单添加前端验证：
  - 非空检查
  - 邮箱格式验证
  - 提交后显示成功/错误提示
- [✔] （可选）为项目卡片添加“标签筛选”功能（如 “All / Web / Design”）

## 🔵 第三阶段：用 React 重构（组件化开发）

- [ ] 初始化 React 项目（推荐使用 Vite：`npm create vite@latest`）
- [ ] 拆分组件：
  - `App.jsx`
  - `Navbar.jsx`
  - `Hero.jsx`
  - `About.jsx`
  - `ProjectCard.jsx`
  - `ProjectList.jsx`
  - `ContactForm.jsx`
  - `Footer.jsx`
- [ ] 使用 `useState` 管理：
  - 移动端菜单展开/收起状态
  - 暗色模式开关
- [ ] 使用 `useEffect`：
  - 监听滚动事件（用于导航高亮 + 回到顶部）
  - 从 `localStorage` 读取主题设置
- [ ] 将项目数据抽象为 JS 数组，通过 `map()` 渲染 `<ProjectCard />`
- [ ] 使用 `props` 传递数据（如项目标题、描述、链接）

## 🟣 第四阶段：优化与增强（可选但推荐）

- [ ] 添加页面过渡动画（使用 Framer Motion 或 CSS 动画）
- [ ] 实现平滑滚动（点击导航链接时滚动到对应 section）
- [ ] 集成 React Icons 替换 SVG 图标
- [ ] 使用 React Router 实现多页面路由（如 `/about`, `/projects`）
- [ ] 接入 EmailJS 实现表单真实发送（无需后端）
- [ ] 添加 Meta 标签和 Open Graph 支持（利于分享）
- [ ] 通过 Lighthouse 审查性能、可访问性、SEO，并优化

## 🚀 第五阶段：部署上线

- [ ] 将项目推送到 GitHub 仓库
- [ ] 在 Vercel 或 Netlify 上一键部署
- [ ] 绑定自定义域名（可选）
- [ ] 分享链接到简历或社交媒体！

> ✅ 完成后你将掌握：HTML 语义化、CSS 布局与响应式、JavaScript DOM 操作、React 组件化开发、前端工程思维与部署流程。