/* eslint-disable @typescript-eslint/no-explicit-any */


// 组件配置
export interface ComponentConfig<Type extends string = string, Props = any> {
  type: Type;
  props: Props;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  component: Function;
}

// 组件注册表
export interface ComponentRegistry {
  [key: string]: ComponentConfig;
}

// Markdown 组件属性
export interface MarkdownComponentProps {
  content: string;
  components: ComponentRegistry;
}
