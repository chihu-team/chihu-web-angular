import { Component, OnInit, OnDestroy } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-hot-work',
  templateUrl: './hot-work.component.html',
  styleUrls: ['./hot-work.component.scss']
})
export class HotWorkComponent implements OnInit,OnDestroy {

  datas = [];
  getDataSub;

  constructor(public http: Http, public userService: UserService) {
    this.getdata();
    this.getDataSub = this.userService.hot_work_get_data.subscribe(() => {
      this.getdata();
    });
  }

  getdata() {
    
    let url = "http://www.devonhello.com/chihu2/hot_work";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=1" + "&len=" + this.datas.length , {
      headers: headers
    })
      .subscribe((res) => {
        
        this.datas = this.datas.concat(res.json());
      });
  }

  ngOnDestroy() {
    this.getDataSub.unsubscribe();
  }

  ngOnInit() {
  }

}
