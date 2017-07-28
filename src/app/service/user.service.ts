import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

  //公共事件
  change: EventEmitter<number>;

  constructor() {
    this.change = new EventEmitter();
  }

}
