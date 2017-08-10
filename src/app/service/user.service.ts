import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class UserService {

  //公共事件
  home_get_data: EventEmitter<number>;
  share_get_data: EventEmitter<number>;
  hot_work_get_data: EventEmitter<number>;
  show_send_share: EventEmitter<number>;
  show_send_que: EventEmitter<number>;

  //scrollToTop
  scrollToTop: EventEmitter<number>;

  //用户资料
  _user:any = {};

  constructor() {
    this.home_get_data = new EventEmitter();
    this.share_get_data = new EventEmitter();
    this.scrollToTop = new EventEmitter();
    this.show_send_share = new EventEmitter();
    this.show_send_que = new EventEmitter();
    this.hot_work_get_data = new EventEmitter();
    this._user = JSON.parse( localStorage.user );
  }

  

}
