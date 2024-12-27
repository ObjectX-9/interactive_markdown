import { componentRegistry } from './ComponentRegistry';
import { InteractiveCounter } from '../components/InteractiveCounter';
import { InteractiveButton } from '../components/InteractiveButton';
import { ColorPicker } from '../components/ColorPicker';
import { TodoList } from '../components/TodoList';

// 注册所有交互式组件
export function registerComponents() {
  componentRegistry.register('counter1', {
    type: 'InteractiveCounter',
    component: InteractiveCounter,
    props: {
      initialValue: 0,
      step: 1,
      label: '计数器'
    }
  });

  componentRegistry.register('button1', {
    type: 'InteractiveButton',
    component: InteractiveButton,
    props: {
      label: '点击我',
      onClick: () => console.log('按钮被点击')
    }
  });

  componentRegistry.register('color1', {
    type: 'ColorPicker',
    component: ColorPicker,
    props: {
      defaultColor: '#ff4d4f'
    }
  });

  componentRegistry.register('todo1', {
    type: 'TodoList',
    component: TodoList,
    props: {
      title: '待办事项'
    }
  });
}
