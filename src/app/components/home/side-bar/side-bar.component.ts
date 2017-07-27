import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  user:any = {};

  constructor() {
    this.user = JSON.parse( localStorage.user );
    
  }
  

  ngOnInit() {
    
  }

}
