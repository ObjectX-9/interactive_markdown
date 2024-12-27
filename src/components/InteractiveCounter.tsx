import { useState } from 'react';
import { componentRegistry } from '../services/ComponentRegistry';

export interface InteractiveCounterProps {
  initialValue: number;
  step: number;
  label: string;
}

export type InteractiveCounterType = 'InteractiveCounter';
export const INTERACTIVE_COUNTER_TYPE: InteractiveCounterType = 'InteractiveCounter';

export const InteractiveCounter = ({ initialValue = 0, step = 1, label }: InteractiveCounterProps) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="counter">
      <div className="counter-label">{label}</div>
      <div className="counter-controls">
        <button
          onClick={() => setCount(count - step)}
          style={{
            backgroundColor: '#ff4d4f',
            color: 'white',
            padding: '4px 8px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0 4px'
          }}
        >
          -
        </button>
        <span style={{ margin: '0 8px' }}>{count}</span>
        <button
          onClick={() => setCount(count + step)}
          style={{
            backgroundColor: '#52c41a',
            color: 'white',
            padding: '4px 8px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0 4px'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

// 注册组件
componentRegistry.register('counter1', {
  type: INTERACTIVE_COUNTER_TYPE,
  props: {
    initialValue: 0,
    step: 1,
    label: '计数器'
  }
});
