import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-send-que',
  templateUrl: './send-que.component.html',
  styleUrls: ['./send-que.component.scss'],
  animations: [
    trigger('sendQueStatus', [
      state('on', style({
        opacity: '0',
        zIndex: -2
      })),
      state('off', style({
        opacity: '1',
        zIndex: 999
      })),
      transition('off => on', animate('250ms ease-in')),
      transition('on => off', animate('250ms ease-out'))
    ])
  ]
})
export class SendQueComponent implements OnInit {

  status: string = 'on';
  isLoading = false;
  text = '';
  title = '';

  constructor(public http: Http, public userService: UserService) {
    this.userService.show_send_que.subscribe(() => {
      this.status = (this.status === "on") ? 'off' : 'on';
    });
  }

  colseShare() {
    this.isLoading = false;
    this.text = '';
    this.title = '';
    this.status = 'on';
  }

  send() {

    if(this.isLoading){
      alert("正在发布，请稍后...");
      return true;
    }

    if (this.text.length > 0 && this.title.length > 0) {
      this.isLoading = true;
      let url = "http://www.devonhello.com/chihu2/send_question";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.userService._user._id + "&name=" + this.userService._user.nickname + "&userimg=" + this.userService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
        headers: headers
      })
        .subscribe((res) => {
          this.isLoading = false;
          if (res.json()['result']['ok'] == '1') {
            this.text = '';
            this.title = '';
          } else {
            alert("系统错误");
          }
          this.colseShare();
        });
    } else {
      alert("操作有误！");
    }
  }

  ngOnInit() {
  }

}
