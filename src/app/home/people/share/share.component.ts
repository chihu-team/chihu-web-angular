import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  _id;
  data:any = [];

  constructor( public router: Router, public http: Http ) {
    this._id = this.router.url.split('/')[2];
    this.getdata();
  }

  getdata() {
    
    let url = "http://www.devonhello.com/chihu2/my_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        
        this.data = res.json();
      });
  }

  ngOnInit() {
  }

}
