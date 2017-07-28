import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-open-share',
  templateUrl: './open-share.component.html',
  styleUrls: ['./open-share.component.scss']
})
export class OpenShareComponent implements OnInit {

  _id:any;
  data:any = [];

  constructor( public activatedRoute: ActivatedRoute,  public http:Http, public userService: UserService ) {
    this.userService.scrollToTop.emit();
    this._id = this.activatedRoute.snapshot.params['id'];
    this.getdata();
  }

  getdata() {
    let url = "http://www.devonhello.com/chihu2/share_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        console.log(this.data);
      });
  }

  ngOnInit() {
  }

}
