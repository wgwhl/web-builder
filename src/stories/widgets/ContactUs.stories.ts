import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { screen, userEvent } from '@storybook/testing-library';
import { ContactUsComponent } from '@uiux/widgets/contact-us/contact-us.component';
import { StorysModule } from '@core/module/storys.module';
export default {
  title: '基础组件/联系我们',
  id: 'contact-us',
  component: ContactUsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      entryComponents: [...StorysModule.forEntryComponents()],
      imports: [StorysModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div fxFlex="0 1 100" class="position-relative">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Base = Template.bind({});

Base.args = {
  content: {
    type: 'contact-us',
    params: {
      webform_id: 'contact',
    },
    bg: {
      classes: 'bg-fill-width wave-wrapper',
      icon: 'wave',
    },
    action: {
      label: '提交',
    },
    formOrder: '1',
    contact: [
      {
        title: {
          label: '地址',
        },
        icon: {
          name: 'location_on',
        },
        style: 'style-v7 small-box',
        content: '广西南宁市创客城2栋',
      },
      {
        title: {
          label: '电话号码',
        },
        style: 'style-v7 small-box',
        icon: {
          name: 'phone',
        },
        content: '+086 0771xxxx',
      },
      {
        title: {
          label: '邮件',
        },
        style: 'style-v7 small-box',
        icon: {
          name: 'mail',
        },
        content: 'service@zhaobg.com',
      },
      {
        title: {
          label: '微信',
        },
        style: 'style-v7 small-box',
        icon: {
          name: 'chat_bubble',
        },
        content: 'biaogebusy',
      },
    ],
    forms: [
      {
        type: 'input',
        label: '姓名',
        key: 'name',
        params: {
          required: true,
        },
      },
      {
        type: 'input',
        label: '邮箱',
        key: 'email',
        params: {
          required: true,
        },
      },
      {
        type: 'input',
        label: '主题',
        key: 'subject',
        params: {
          required: true,
        },
      },
      {
        type: 'textarea',
        label: '内容',
        params: {
          required: true,
          matAutosizeMinRows: 5,
        },
        key: 'message',
        placeholder: 'Message',
      },
    ],
  },
};

Base.play = async () => {
  const Name = screen.getByLabelText('姓名');
  await userEvent.type(Name, 'Johnson', {
    delay: 100,
  });

  const Email = screen.getByLabelText('邮箱');
  await userEvent.type(Email, 'hi@zhaobg.com', {
    delay: 100,
  });

  const Subject = screen.getByLabelText('主题');
  await userEvent.type(Subject, '关于贡献', {
    delay: 100,
  });

  const Content = screen.getByLabelText('内容');
  await userEvent.type(
    Content,
    '信使前端框架可以快速的构建页面，我们很希望未来有更多的可能性。',
    {
      delay: 100,
    }
  );
};
