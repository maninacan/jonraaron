import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftContent: <h1 className="text-lg">Hi There!</h1>,
  rightContent: <div>Stuff on the right</div>,
};
