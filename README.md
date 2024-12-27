# MD-Interactive 交互式Markdown文档

一个支持交互式Markdown文档的React应用，让你的Markdown文档具有交互能力！

## 项目简介

MD-Interactive 是一个基于React和TypeScript的交互式Markdown渲染器。它允许你在Markdown文档中嵌入可交互的React组件，使得文档不再是静态的，而是能够与用户进行实时交互。

## 核心特性

- 🎯 支持标准Markdown语法
- 💡 可嵌入自定义交互组件
- 🔌 灵活的组件注册机制
- 🎨 内置多个常用交互组件
  - 计数器组件
  - 按钮组件
  - 卡片组件
  - 颜色选择器
  - 待办事项列表

## 技术实现

项目的核心实现基于以下几个关键部分：

### 1. Markdown渲染核心 (`MarkdownRenderer.tsx`)
- 使用 `react-markdown` 进行基础Markdown解析和渲染
- 通过 `rehype-raw` 插件支持HTML内容的解析
- 实现了自定义组件渲染逻辑，可以识别特定属性的交互组件

### 2. 组件注册系统 (`services/registerComponents.ts`)
- 实现了一个全局组件注册表，统一管理所有可用的交互组件
- 支持动态注册和管理新组件
- 每个组件都可以独立配置自己的属性和行为

### 3. 组件库
- 提供了一系列预置的交互组件
- 所有组件都是独立的React组件
- 支持自定义属性和样式定制

## 使用方法

在Markdown文档中，你可以通过特定的HTML标签来插入交互组件：

```markdown
这是一个普通的Markdown段落。

<div data-component="counter1"></div>

这里嵌入了一个计数器组件，你可以点击进行交互。

<div data-component="button1"></div>

这里是一个可点击的按钮组件。
```

## 开发环境

- Node.js 环境
- React 18+
- TypeScript
- Vite 构建工具

## 快速开始

1. 克隆项目仓库
2. 安装项目依赖：
   ```bash
   pnpm install
   ```
3. 启动开发服务器：
   ```bash
   pnpm dev
   ```
4. 在浏览器中访问 `http://localhost:5173`

## 如何扩展

想要添加新的交互组件？只需要三步：

1. 在 `components` 目录下创建新的React组件
2. 在 `registerComponents.ts` 中注册该组件
3. 在Markdown中通过 `data-component` 属性使用它

## 开源协议

MIT
