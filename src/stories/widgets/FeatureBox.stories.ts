import { IFeatureBox } from '@core/interface/widgets/IFeatureBox';
import { StorysModule } from '@core/module/storys.module';
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
  StoryObj,
} from '@storybook/angular';

import { FeatureBoxComponent } from '@uiux/widgets/feature-box/feature-box.component';

const meta: Meta<FeatureBoxComponent> = {
  title: '基础组件/功能盒子',
  id: 'feature-box',
  component: FeatureBoxComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      entryComponents: [...StorysModule.forEntryComponents()],
      imports: [StorysModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) => `<div classs="widget" style="width:33%">${story}</div>`,
    ),
  ],
};

export default meta;
type Story = StoryObj<FeatureBoxComponent>;
export const Default: Story = {};
Default.storyName = '4:3';
const content: IFeatureBox = {
  type: 'feature-box',
  fullIcon: 'fullscreen',
  openIcon: 'open_in_new',
  link: '#',
  ratios: 'media-4-3',
  img: {
    classes: 'object-fit',
    src: '/assets/images/cases/porto1.jpg',
    alt: 'Feature box',
  },
};
Default.args = {
  content,
};

export const CustomContain: Story = {};
CustomContain.storyName = '图片不裁切';
CustomContain.args = {
  content: {
    ...content,
    img: {
      classes: 'object-contain',
      src: '/assets/images/cases/porto1.jpg',
      alt: 'Feature box',
    },
  },
};

export const HoverIcon: Story = {};
HoverIcon.storyName = 'Icon 经过';
const hover = {
  ...content,
  hoverIcon: true,
};
HoverIcon.args = {
  content: hover,
};

// export const Float: Story = {};
// Float.storyName = 'Icon 浮出';
// const float = {
//   ...content,
//   mode: 'float',
//   hoverIcon: true,
// };
// Float.args = {
//   content: float,
// };

export const NotMedia: Story = {};
NotMedia.storyName = '非图片/边栏切出';
NotMedia.parameters = {
  docs: {
    description: {
      story:
        '非图片类例如doc,pdf等文档，则显示对于的文档图标，并提供预览或者下载的按钮，可开启Iframe侧边栏切出，演示需要在page级别才会生效',
    },
  },
};
const notMedia: IFeatureBox = {
  ...Default.args.content,
  mode: 'float',
  hoverIcon: true,
  openIcon: 'file_download',
  openIframe: true,
  img: {
    classes: 'object-fit',
    src: '/xxx.doc',
    preview: '/xxx.doc',
    alt: '说明文档v1.doc',
  },
};

NotMedia.args = {
  content: notMedia,
};
