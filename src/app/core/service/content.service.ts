import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import type { ICoreConfig, IPage } from '@core/interface/IAppConfig';
import { API_URL } from '@core/token/token-providers';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { isArray } from 'lodash-es';
import { TagsService } from '@core/service/tags.service';
import { ScreenState } from '@core/state/screen/ScreenState';
import { ApiService } from '@core/service/api.service';
import { LocalStorageService } from 'ngx-webstorage';
import type { IBranding } from '@core/interface/IBranding';
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(
    private http: HttpClient,
    private tagsService: TagsService,
    private screenState: ScreenState,
    private apiService: ApiService,
    @Inject(API_URL) private apiUrl: string,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updatePage(pageValue: IPage): void {
    if (isArray(pageValue)) {
      return;
    }
    this.tagsService.updateTages(pageValue);
    this.screenState.scroll$.next();
  }

  get pageUrl(): string {
    const location = this.document.location;
    const path = location.pathname;
    const search = location.search;
    const allowKey = ['version', 'origin', 'category', 'preview'];
    if (
      allowKey.some((key) => {
        return search.indexOf(key) > 0;
      })
    ) {
      const params = search.split('?')[1];
      return `${path}&${params}`;
    } else {
      return path;
    }
  }

  loadPageContent(pageUrl = this.pageUrl): Observable<IPage> {
    // storybook content
    const queryString = location.search;
    const searchParams = new URLSearchParams(queryString);
    const mode = searchParams.get('viewMode');
    if (mode === 'docs' || mode === 'story') {
      const storyPath = searchParams.get('id');
      return this.http.get<any>(`/assets/storybook/${storyPath}.json`).pipe(
        tap((page) => {
          this.updatePage(page);
        })
      );
    }

    if (environment.production) {
      const landingPath = '/api/v1/landingPage?content=';
      const pageUrlParams = `${this.apiUrl}${landingPath}${pageUrl}`;

      return this.http.get<any>(pageUrlParams).pipe(
        tap((page) => {
          this.updatePage(page);
        }),
        catchError(() => {
          return this.http.get<any>(`${this.apiUrl}${landingPath}404`);
        })
      );
    } else {
      return this.http
        .get<any>(`${this.apiUrl}/assets/app${pageUrl}.json`)
        .pipe(
          tap((page) => {
            this.updatePage(page);
          }),
          catchError(() => {
            this.tagsService.setTitle('404 not found!');
            return this.http.get<any>(`${this.apiUrl}/assets/app/404.json`);
          })
        );
    }
  }

  loadBranding(): Observable<IBranding> {
    const brandingPath = environment.production
      ? `${this.apiUrl}/api/v1/config?content=/core/branding`
      : `${this.apiUrl}/assets/app/core/branding.json`;
    return this.http.get<IBranding>(brandingPath);
  }

  loadConfig(coreConfig: object): any {
    const configPath = environment.production
      ? `${this.apiUrl}/api/v1/config?content=/core/base`
      : `${this.apiUrl}/assets/app/core/base.json`;
    return this.http
      .get(configPath)
      .pipe(
        tap((config: any) => {
          Object.assign(coreConfig, config);
        })
      )
      .toPromise()
      .then(
        (config: ICoreConfig) => {
          this.apiService.configLoadDone$.next(true);
        },
        (error) => {
          console.log(error);
          console.log('base json not found!');
        }
      );
  }

  setBodyClasses(theme: string): void {
    const body = this.document.getElementsByTagName('body')[0];
    body.classList.add(theme);
  }
}
