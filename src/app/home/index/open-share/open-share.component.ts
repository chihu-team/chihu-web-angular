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

  
  data:any = {};

  constructor( public activatedRoute: ActivatedRoute,  public http:Http, public userService: UserService ) {
    this.userService.scrollToTop.emit();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data)=>{
      this.data = data['data'];
    });
  }

}
