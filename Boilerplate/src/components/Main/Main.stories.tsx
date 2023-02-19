import { Story, Meta } from '@storybook/react/types-6-0';
import Main from './Main';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
};

export const Default: Story = (args) => <Main {...args} />;
Default.args = {
  title: '123',
  description: '123456',
};
