import { Component, OnInit, OnDestroy } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  datas = [];
  iswork = false;
  getDataSub;

  constructor(public http: Http, public userService: UserService) {
    this.getdata();
    this.getDataSub = this.userService.home_get_data.subscribe(() => {
      this.getdata();
    });
    
  }

  ngOnDestroy() {
    this.getDataSub.unsubscribe();
  }


  ngOnInit() {
  }

  //获取数据
  getdata() {
    if (this.iswork) {
      return;
    }
    this.iswork = true;
    let url = "http://www.devonhello.com/chihu2/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.datas.length, {
      headers: headers
    })
      .subscribe((res) => {
        this.iswork = false;
        this.datas = this.datas.concat(res.json());
        
      });
  }

  sendShare(){
    this.userService.show_send_share.emit();
  }

  sendQue(){
    this.userService.show_send_que.emit();
  }

}
