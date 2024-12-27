import { useState } from 'react';
import { componentRegistry } from '../services/ComponentRegistry';

export interface InteractiveButtonProps {
  text: string;
  color: string;
}

export type InteractiveButtonType = 'InteractiveButton';
export const INTERACTIVE_BUTTON_TYPE: InteractiveButtonType = 'InteractiveButton';

export const InteractiveButton = ({ text, color }: InteractiveButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {text} (点击次数: {count})
    </button>
  );
};

// 注册组件
componentRegistry.register('button1', {
  type: INTERACTIVE_BUTTON_TYPE,
  props: {
    text: '点击我',
    color: '#1890ff'
  }
});
