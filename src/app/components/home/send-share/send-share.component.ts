import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-send-share',
  templateUrl: './send-share.component.html',
  styleUrls: ['./send-share.component.scss'],
  animations: [
    trigger('sendShareStatus', [
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
export class SendShareComponent implements OnInit {

  status: string = 'on';
  text = '';
  isLoading = false;
  ishide = true;

  URL = 'http://www.devonhello.com/chihu2/upload';
  public uploader: FileUploader = new FileUploader({ url: this.URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  uploaderArr = [];
  itemArr = [];

  constructor(public http: Http, public userService: UserService) {

    this.userService.show_send_share.subscribe(() => {
      this.status = (this.status === "on") ? 'off' : 'on';
    });
    this.uploader.onAfterAddingFile = (fileItems: any) => {

      this.uploader.queue[0].upload(); // 开始上传
      this.isLoading = true;
      this.uploader.queue[0].onSuccess = (response, status, headers) => {
        // 上传文件成功   
        if (status == 200) {
          // 上传文件后获取服务器返回的数据
          var iurlObj = JSON.parse(response);
          console.log(iurlObj);
          this.uploaderArr.push(iurlObj);
          this.itemArr.push(iurlObj['src']);
          this.isLoading = false;
        } else {
          // 上传文件后获取服务器返回的数据错误
          this.isLoading = false;
          alert('上传失败！');
        }
      };
    }
  }

  sele() {

    if (this.isLoading) {
      alert("请稍后在操作");
      return false;
    }
  }

  colseShare() {
    this.isLoading = false;
    this.uploader.clearQueue();
    this.uploader.cancelAll();
    this.text = '';
    this.uploaderArr = [];
    this.itemArr = [];
    this.status = 'on';
  }

  send() {
    if (!this.isLoading && this.text.length > 0 && this.itemArr.length > 0) {
      this.isLoading = true;
      let url = "http://www.devonhello.com/chihu2/send_share";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.userService._user._id + "&name=" + this.userService._user.nickname + "&userimg=" + this.userService._user.userimg + "&img=" + JSON.stringify(this.uploaderArr) + "&text=" + this.text, {
        headers: headers
      })
        .subscribe((res) => {
          this.isLoading = false;
          if (res.json()['result']['ok'] == '1') {
            
            this.uploader.clearQueue();
            this.uploaderArr = [];
            this.itemArr = [];
            this.text = '';
          }else{
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
