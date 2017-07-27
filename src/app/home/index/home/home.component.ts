import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas = [];

  constructor( public http:Http ) {
    this.getdata();
  }

  ngOnInit() {
  }

  //获取数据
  getdata() {
    
    let url = "http://www.devonhello.com/chihu2/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.datas.length, {
      headers: headers
    })
      .subscribe((res) => {
        
        this.datas = this.datas.concat(res.json());
        
      });
  }

  

}
