import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  iel:any;

  constructor(public el: ElementRef) {
    
  }

  change( index ){
    localStorage.clear();
    if(index != '0'){
      this.iel.style.left = '63px';
    }else{
      this.iel.style.left = '0';
    }
    
  }

  ngOnInit() {
    this.iel = this.el.nativeElement.querySelector('.navs-slider-bar');
    this.iel.style.left = '0';
    
  }

}
