import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ResolveArticleService implements Resolve<any> {

  data:any = {};
  _id;

  constructor( public http:Http, public router: Router ) { }

  resolve(route: ActivatedRouteSnapshot){
    this._id = route.params['id'];
    
    let url = "http://www.devonhello.com/chihu2/answer_dec";

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

