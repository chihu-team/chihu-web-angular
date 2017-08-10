import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  data:any = [];

  constructor( public http:Http, public userService: UserService ) {
    this.userService.scrollToTop.emit();
    this.getdata();
  }

  //获取数据
  getdata() {
    
    let url = "http://www.devonhello.com/chihu2/hot_answer";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=0", {
      headers: headers
    })
      .subscribe((res) => {
        
        this.data = this.data.concat(res.json());
      });
  }

  ngOnInit() {
  }

}
