import { Inject, Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { IUser } from './IUser';
import { ApiService } from '../../service/api.service';
import { first } from 'rxjs/operators';

const unauthUser = {
  authenticated: false,
};

@Injectable()
export class UserState {
  @observable private user: IUser = unauthUser;

  get currentUser() {
    return Object.assign({}, this.user);
  }

  constructor(
    private apiService: ApiService,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  @action
  login(userName: string, passWord: string, item: string) {
    this.apiService.login(userName, passWord).subscribe((data) => {
      this.updateUser(data, item);
    });
  }

  updateUser(data: any, item: string) {
    let userDetails = {};
    this.apiService
      .getCurrentUserId(data.current_user.uid, item)
      .subscribe((res) => {
        const id = res.id;
        this.apiService.getUser(id, item).subscribe((user) => {
          this.user = user;
          userDetails = Object.assign(data, user);
          this.storage.set(item, JSON.stringify(userDetails));
        });
      });
  }
}
