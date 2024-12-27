import { MarkdownRenderer } from './core/MarkdownRenderer'
import { componentRegistry } from './services/ComponentRegistry'
import './App.css'

const markdownContent = `
# 交互式 Markdown 组件示例

这是一个展示如何在 Markdown 中嵌入交互式组件的示例。

## 1. 交互式按钮

下面是一个简单的计数按钮：

<div data-component="counter1"></div>

## 2. 计数器

这是一个可以加减的计数器：

<div data-component="counter1"></div>

## 3. 颜色选择器

点击下面的色块可以选择不同的颜色：

<div data-component="color1"></div>

## 4. 待办事项列表

这是一个简单的待办事项管理器：

<div data-component="todo1"></div>
`

function App() {
  return (
    <div className="app">
      <MarkdownRenderer content={markdownContent} components={componentRegistry.getAll()} />
    </div>
  )
}

export default App