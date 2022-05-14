import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ShareModule } from '@share/share.module';
import { MatChipsModule } from '@angular/material/chips';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CountToModule } from 'angular-count-to';
import { DynamicModule } from 'ng-dynamic-component';
import { TreeModule } from '@circlon/angular-tree-component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { BgComponent } from './bg/bg.component';
import { ImgComponent } from './img/img.component';
import { BoxComponent } from './box/box.component';
import { MapComponent } from './map/map.component';
import { TabComponent } from './tab/tab.component';
import { LinkComponent } from './link/link.component';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';
import { InputComponent } from './form/input/input.component';
import { PanelComponent } from './panel/panel.component';
import { SwiperComponent } from './swiper/swiper.component';
import { SpacerComponent } from './spacer/spacer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TextareaComponent } from './form/textarea/textarea.component';
import { ChipListComponent } from './chip-list/chip-list.component';
import { LineYearComponent } from './line-year/line-year.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BtnAnimateComponent } from './btn-animate/btn-animate.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { NumberAnimateComponent } from './number-animate/number-animate.component';
import { DynamicWidgetsComponent } from './dynamic-widgets/dynamic-widgets.component';

import { SafeHtmlPipe } from '@core/pipe/safe-html.pipe';
import { IconComponent } from './icon/icon.component';
import { ProgressGroupComponent } from './progress-group/progress-group.component';
import { MediaListComponent } from './media/media-list/media-list.component';
import { MediaObjectComponent } from './media/media-object/media-object.component';
import { MediaObjectGroupComponent } from './media/media-object-group/media-object-group.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { SelectComponent } from './form/select/select.component';
import { PaginationSimpleComponent } from './pagination/pagination-simple/pagination-simple.component';
import { FlagComponent } from './actions/flag/flag.component';
import { ShapeComponent } from './shape/shape.component';
import { BgImgComponent } from './bg-img/bg-img.component';
import { SearchActionComponent } from './actions/search-action/search-action.component';
import { ShareComponent } from './actions/share/share.component';
import { TreeComponent } from './tree/tree.component';
import { Card1v1Component } from './card/card1v1/card1v1.component';
import { DownloadComponent } from './actions/download/download.component';
import { MediaMetaComponent } from './media/media-meta/media-meta.component';
import { TextHeroComponent } from './text-hero/text-hero.component';
import { FontChangeComponent } from './font-change/font-change.component';
import { CheckboxComponent } from './form/checkbox/checkbox.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { TermsServiceComponent } from './form/terms-service/terms-service.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { InlineLightboxComponent } from './lightbox/inline-lightbox/inline-lightbox.component';
import { BtnComponent } from './btn/btn.component';
import { ContentTextCenterComponent } from './content-text-center/content-text-center.component';
import { Card1v2Component } from './card/card1v2/card1v2.component';
import { CalendarComponent } from './date/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { DatepickerComponent } from './form/datepicker/datepicker.component'; // a plugin!
import { ViewListComponent } from './view-list/view-list.component';
import { DataSourcePipe } from '@core/pipe/dataSource.pipe';
import { CardMetaComponent } from './card/card-meta/card-meta.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
]);

const components = [
  BgComponent,
  ImgComponent,
  MapComponent,
  BoxComponent,
  TextComponent,
  TextHeroComponent,
  LinkComponent,
  BtnComponent,
  TabComponent,
  CardComponent,
  Card1v1Component,
  Card1v2Component,
  IconComponent,
  TitleComponent,
  PanelComponent,
  InputComponent,
  SelectComponent,
  SwiperComponent,
  SpacerComponent,
  SpinnerComponent,
  CheckboxComponent,
  ContentBoxComponent,
  ChipListComponent,
  TextareaComponent,
  LineYearComponent,
  ContactUsComponent,
  BtnAnimateComponent,
  FeatureBoxComponent,
  BreadcrumbComponent,
  TestimonialComponent,
  DropdownMenuComponent,
  NumberAnimateComponent,
  DynamicWidgetsComponent,
  SidebarComponent,
  MediaListComponent,
  MediaMetaComponent,
  MediaObjectComponent,
  MenuListComponent,
  PaginationComponent,
  PaginationSimpleComponent,
  ProgressBarComponent,
  ProgressGroupComponent,
  SafeHtmlPipe,
  DataSourcePipe,
  DialogComponent,
  FlagComponent,
  ShareComponent,
  ShapeComponent,
  BgImgComponent,
  TreeComponent,
  CalendarComponent,
  DownloadComponent,
  CardMetaComponent,
  ViewListComponent,
  DatepickerComponent,
  FontChangeComponent,
  TermsServiceComponent,
  DynamicTableComponent,
  SearchActionComponent,
  InlineLightboxComponent,
  MediaObjectGroupComponent,
  ContentTextCenterComponent,
  DynamicFormControlComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    MatChipsModule,
    ShareModule,
    SwiperModule,
    TreeModule,
    LightboxModule,
    CountToModule,
    DynamicModule,
    CdkTableModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [...components],
  providers: [
    MatDatepickerModule,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    // { provide: MAT_DATE_LOCALE, useValue: 'zh-cn' },
  ],
})
export class WidgetsModule {}
