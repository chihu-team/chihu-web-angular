import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser'
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-open-article',
  templateUrl: './open-article.component.html',
  styleUrls: ['./open-article.component.scss']
})
export class OpenArticleComponent implements OnInit {

  _id:any;
  data:any = {};
  conts:any = 0;

  constructor( public sanitizer: DomSanitizer, public activatedRoute: ActivatedRoute, public http:Http, public userService: UserService ) {
    this.userService.scrollToTop.emit();
    this._id = this.activatedRoute.snapshot.params['id'];
    this.getdata();
  }

  //获取文章数据
  getdata() {
    let url = "http://www.devonhello.com/chihu2/answer_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.conts = this.data.mark.cont;
      });
  }

  tr(html){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
  }

}
