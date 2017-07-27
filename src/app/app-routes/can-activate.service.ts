import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class CanActivateService {

  constructor( public router: Router ) { }

  canActivate(){
    if( !localStorage.user ){
      this.router.navigate(['login/signup']);
    }
    return true;
  }

}
