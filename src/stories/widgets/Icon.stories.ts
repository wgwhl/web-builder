import { ShareModule } from '../../app/share/share.module';
import { moduleMetadata, Meta } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { IconComponent } from '../../app/uiux/widgets/icon/icon.component';

export default {
  title: '基础/图标',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [ShareModule],
    }),
  ],
} as Meta;

const Template: Story<IconComponent> = (args) => ({
  component: IconComponent,
  props: {
    ...args,
  },
  template: `<app-icon [content]="content"></app-icon>`,
});
export const Primary = Template.bind({});

Primary.args = {
  content: {
    color: 'primary',
    name: 'format_color_fill',
  },
};

export const Accent = Template.bind({});

Accent.args = {
  content: {
    color: 'accent',
    name: 'format_color_fill',
  },
};

export const Warn = Template.bind({});

Warn.args = {
  content: {
    color: 'warn',
    name: 'format_color_fill',
  },
};
