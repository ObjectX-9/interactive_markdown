import { MarkdownEditor } from './components/MarkdownEditor'
import './App.css'

const initialContent = `
# 交互式 Markdown 组件示例

这是一个展示如何在 Markdown 中嵌入交互式组件的示例。

## 使用方法

1. 点击"插入组件"按钮选择要插入的组件
2. 在编辑器中编写 Markdown 内容
3. 右侧实时预览效果

## 示例组件

在下面尝试插入一些组件：

`

function App() {
  return (
    <div className="app">
      <MarkdownEditor initialContent={initialContent} />
    </div>
  )
}

export default App