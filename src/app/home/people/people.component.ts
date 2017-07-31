import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  user:any = {};
  _id;

  constructor( public userService: UserService ) {
    this.user = this.userService._user;
  }

  ngOnInit() {
  }

}
