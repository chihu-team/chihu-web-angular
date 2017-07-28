import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  _id:any;
  data:any = [];

  constructor( public activatedRoute: ActivatedRoute, public http:Http ) {
    this._id = this.activatedRoute.snapshot.params['id'];
    this.getdata();
  }

  ngOnInit() {
  }

  getdata() {
    
    let url = "http://www.devonhello.com/chihu2/article_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        
      });
  }

}
