import { InjectionToken } from '@angular/core';
import { ICoreConfig, IPage } from '@core/interface/IAppConfig';
import { IUser } from '@core/interface/IUser';
import { Observable } from 'rxjs';
import { IBranding } from '../interface/branding/IBranding';

export const API_URL = new InjectionToken<string>('api url');
export const CORE_CONFIG = new InjectionToken<ICoreConfig>('core config');
export const PAGE_CONTENT = new InjectionToken<Observable<IPage | object>>(
  'page_content'
);
export const THEME = new InjectionToken<string>('current theme');
export const DEBUGANIMATE = new InjectionToken<boolean>('debug animate');
export const BRANDING = new InjectionToken<IBranding>('branding config');

export const USER = new InjectionToken<IUser>('user');
