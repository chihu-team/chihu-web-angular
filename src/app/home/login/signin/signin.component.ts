import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  name: '';
  pass: '';

  constructor(public http: Http,public router: Router) { }

  ngOnInit() {
  }

  login() {

    if (!this.name || !this.pass) {
      alert("兄弟，你在搞笑吗？认真填...");
      return true;
    }

    let url = "http://www.devonhello.com/chihu2/login";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
      headers: headers
    })
      .subscribe((res) => {
        try {
          if (res.json()[0]['_id']) {
            localStorage.user = JSON.stringify(res.json()[0]);
            this.router.navigate(['index']);
          } 
        } catch (error) {
          alert("账户或密码错误...");
        }
      });
  }

}
