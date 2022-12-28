import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { BlockComponent } from '@uiux/combs/block/block/block.component';
import { BlockModule } from '@uiux/combs/block/block.module';
import { StorysModule } from '@core/storys.module';
import { BrandingModule } from '@core/branding/branding.module';
import { CalendarModule } from '@uiux/combs/calendar/calendar.module';
import { BannerSimpleComponent } from '@uiux/combs/banner/banner-simple/banner-simple.component';
import { FullCalendarComponent } from '@uiux/combs/calendar/full-calendar/full-calendar.component';
export default {
  title: '示例页面/工作日历',
  id: 'calendar-page',
  component: BlockComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      entryComponents: [FullCalendarComponent],
      imports: [
        BlockModule,
        StorysModule.forRoot(),
        CalendarModule,
        BrandingModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `
     <app-header></app-header>
      ${story}
      <app-footer></app-footer>
    `
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Page = Template.bind({});
// Raname Story
Page.storyName = '预览';
