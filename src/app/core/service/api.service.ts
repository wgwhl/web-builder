import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { camelCase, result } from 'lodash-es';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CryptoJSService } from './crypto-js.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  localUserKey = camelCase(environment.apiUrl.split('//')[1]);
  public configLoadDone$ = new Subject();

  constructor(public cryptoJS: CryptoJSService) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  get httpOptionsOfCommon(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    };
    return httpOptions;
  }

  optionsWithCookieAndToken(csrfToken: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'X-CSRF-Token': csrfToken,
      }),
      withCredentials: true,
    };
    return httpOptions;
  }

  getParams(obj: any, key: string): any {
    return obj.params && obj.params[key];
  }

  getDeepValue(obj: any, path: string): any {
    return result(obj, path);
  }
}
