import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ResolvePeopleService implements Resolve<any> {

  _id;
  data:any = {};

  constructor( public http:Http, public router: Router ) { }

  resolve(route: ActivatedRouteSnapshot){
    this._id = route.params['id'];

    let url = "http://www.devonhello.com/chihu2/getuserdata";

    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.post(url, "id=" + this._id, {
      headers: headers
    }).map((res)=>{
      if(res['_body'] != '0'){
        return  JSON.parse( res['_body'] )[0];
      }else{
        this.router.navigate(['/404']);
      }      
    })
  }

}
