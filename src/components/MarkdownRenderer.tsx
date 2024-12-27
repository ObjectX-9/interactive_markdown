import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { InteractiveButton } from './InteractiveButton';
import { InteractiveCounter } from './InteractiveCounter';
import { ColorPicker } from './ColorPicker';
import { TodoList } from './TodoList';
import { MarkdownComponentProps } from '../types/components';
import type { Components } from 'react-markdown';
import type { HTMLAttributes, DetailedHTMLProps } from 'react';

const componentMap = {
  InteractiveButton,
  InteractiveCounter,
  ColorPicker,
  TodoList
} as const;

export const MarkdownRenderer = ({ content, components }: MarkdownComponentProps) => {
  const renderComponent = (id: string) => {
    const config = components[id];
    if (!config) {
      console.warn(`Component with id ${id} not found in config`);
      return null;
    }

    const Component = componentMap[config.type];
    if (!Component) {
      console.warn(`Component type ${config.type} not found in componentMap`);
      return null;
    }

    return <Component {...config.props} />;
  };

  const customComponents: Components = {
    div: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { 'data-component'?: string }) => {
      const { 'data-component': dataComponent, ...rest } = props;
      console.log('Rendering div with props:', props);
      
      if (dataComponent) {
        const component = renderComponent(dataComponent);
        if (component) {
          return <div {...rest}>{component}</div>;
        }
      }
      
      return <div {...rest} />;
    }
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={customComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
