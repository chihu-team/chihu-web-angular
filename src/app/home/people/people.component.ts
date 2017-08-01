import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  user:any = {};
  _id;

  constructor( public userService: UserService, public activatedRoute: ActivatedRoute ) {
    this.user = this.userService._user;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data)=>{
      this.user = data['data'];
      //console.log(this.user);
    });
  }

}
