import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { MarkdownComponentProps } from '../types/components';
import type { Components } from 'react-markdown';
import type { HTMLAttributes, DetailedHTMLProps } from 'react';
import { componentRegistry } from '../services/ComponentRegistry';


export const MarkdownRenderer = ({ content }: MarkdownComponentProps) => {
  const renderComponent = (id: string) => {
    const componentConfig = componentRegistry.get(id);
    if (!componentConfig) {
      console.warn(`Component with id ${id} not found in registry`);
      return null;
    }
    const componentFunction = componentConfig.component;
    const props = componentConfig.props;
    if (!componentFunction) {
      console.warn(`Component type ${componentConfig.type} not found in componentMap`);
      return null;
    }

    return componentFunction(props);
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
