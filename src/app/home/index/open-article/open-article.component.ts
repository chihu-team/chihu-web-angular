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
  }

  tr(html){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data)=>{
      this.data = data['data'];
    });
  }

}
