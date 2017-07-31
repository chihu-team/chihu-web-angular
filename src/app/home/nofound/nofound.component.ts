import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nofound',
  templateUrl: './nofound.component.html',
  styleUrls: ['./nofound.component.scss']
})
export class NofoundComponent implements OnInit {

  seconds = 9;
  timer = null;

  constructor( public router: Router ) {
    this.timer = setInterval(()=>{
      if(this.seconds-- <= 1){
        clearInterval(this.timer);
        this.router.navigate(['/']);
      }
    },1000);
  }

  ngOnInit() {
  }

}
