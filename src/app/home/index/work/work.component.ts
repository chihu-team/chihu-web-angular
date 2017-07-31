import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  data:any = {};

  constructor( public activatedRoute: ActivatedRoute, public http:Http, public userService: UserService ) {
    this.userService.scrollToTop.emit();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data)=>{
      this.data = data['data'];
    });
  }

}
