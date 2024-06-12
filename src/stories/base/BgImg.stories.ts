import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';

import { BgImgComponent } from '@uiux/widgets/bg-img/bg-img.component';
import { StorysModule } from '@core/module/storys.module';
import { IBgImg } from '@core/interface/widgets/IBgImg';

const meta: Meta<MyComponent> = {
  title: '基本元素/背景图',
  id: 'bg-img',
  component: BgImgComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      entryComponents: [...StorysModule.forEntryComponents()],
      imports: [StorysModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="widget relative" style="z-index:1;height:400px;overflow:hidden">
        ${story}</div>`,
    ),
  ],
};

export default meta;
export const Base = Template.bind({});
const base: IBgImg = {
  type: 'bg-img',
  classes: '',
  img: {
    src: '/assets/images/bg/bg-03.jpeg',
    classes: 'object-fit',
  },
};
Base.args = {
  content: base,
};

export const Opacity = Template.bind({});
Opacity.storyName = '不透明度';
const opacity: IBgImg = {
  type: 'bg-img',
  classes: 'bg-fill-width overlay overlay-80',
  img: {
    src: '/assets/images/bg/bg-03.jpeg',
    classes: 'object-fit',
  },
};
Opacity.args = {
  content: opacity,
};
