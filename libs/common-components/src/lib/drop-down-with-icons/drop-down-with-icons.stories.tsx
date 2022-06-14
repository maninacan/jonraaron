import { Story, Meta } from '@storybook/react';
import {
  DropDownWithIcons,
  DropDownWithIconsProps,
} from './drop-down-with-icons';

export default {
  component: DropDownWithIcons,
  title: 'DropDownWithIcons',
} as Meta;

const Template: Story<DropDownWithIconsProps> = (args) => (
  <div className="ml-48 h-48">
    <DropDownWithIcons {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  buttonContent: 'Click Me!',
  menu: [
    [
      {
        label: 'Hello World!',
        icon: <i className="jra-sun" />,
        onClick: () => console.log('clicked sun icon item'),
      },
    ],
  ],
};
