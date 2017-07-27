import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: any = '';
  nickname: any = '';
  pass: any = '';

  constructor(public http: Http,public router: Router) { }

  ngOnInit() {
  }

  regist() {
    if (this.name.length < 1 || this.pass.length < 1 || this.nickname.length < 1) {
      alert("兄弟，你在搞笑吗？认真填...");
      return true;
    }

    let url = "http://www.devonhello.com/chihu2/register";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass + "&nickname=" + this.nickname, {
      headers: headers
    })
      .subscribe((res) => {
        //console.log(res.json()[0]['_id']);
        try {
          if (res.json()[0]['_id']) {
            localStorage.user = JSON.stringify(res.json()[0]);
            this.router.navigate(['index']);
          } 
        } catch (error) {
          alert("注册失败，账号可能已存在");
        }
        
      });
  }

}
