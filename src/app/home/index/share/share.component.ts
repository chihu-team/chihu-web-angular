import { Component, OnInit, OnDestroy } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit, OnDestroy {

  data:any = [];
  iswork = false;
  getDataSub;

  constructor( public http:Http, public userService: UserService ) {
    this.userService.scrollToTop.emit();
    this.getdata();
    this.getDataSub = this.userService.share_get_data.subscribe(()=>{
      this.getdata();
    })
  }

  ngOnDestroy() {
    this.getDataSub.unsubscribe();
  }

  ngOnInit() {
  }

  //获取分享数据
  getdata() {
    if(this.iswork){
      return;
    }
    this.iswork = true;
    let url = "http://www.devonhello.com/chihu2/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.data.length, {
      headers: headers
    })
      .subscribe((res) => {
        this.iswork = false;
        this.data = this.data.concat(res.json());
      });
  }

}
