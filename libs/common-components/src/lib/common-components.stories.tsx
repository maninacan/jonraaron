import { Story, Meta } from '@storybook/react';
import { CommonComponents, CommonComponentsProps } from './common-components';

export default {
  component: CommonComponents,
  title: 'CommonComponents',
} as Meta;

const Template: Story<CommonComponentsProps> = (args) => (
  <CommonComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
