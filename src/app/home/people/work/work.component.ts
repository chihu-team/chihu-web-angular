import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  private sub: any;

  constructor( public activatedRoute: ActivatedRoute, public router: Router ) {
    
  }

  ngOnInit() {
    //console.log(this.router.url);
    
  }


}
