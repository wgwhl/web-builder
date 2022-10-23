import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { StorysModule } from '@core/storys.module';
import { PlayerComponent } from '@uiux/widgets/media/player/player.component';

export default {
  title: '基础/媒体/播放器',
  id: 'player',
  component: PlayerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [StorysModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="position-relative p-x p-y" style="z-index:1">${story}</div>`
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
    source: {
      type: 'video',
      title: 'Afterglow',
      sources: [
        {
          src: '/assets/video/afterglow.mp4',
          type: 'video/mp4',
          size: 720,
        },
      ],
      poster: '/assets/images/16-9/business-02.jpg',
      muted: true,
      hideControls: true,
    },
  },
};
