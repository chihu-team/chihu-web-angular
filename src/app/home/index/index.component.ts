import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

declare var document: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  user: any = {};
  @ViewChild('scrollMe') public myScrollContainer: ElementRef;

  itimer = null;

  constructor(public router: Router, public userService: UserService) {
    this.user = this.userService._user;
    this.userService.scrollToTop.subscribe(() => {
      this.scrollToTop();
    })
    
  }

  ngOnInit() {

  }

  scrollToTop() {
    var nativeElement = this.myScrollContainer.nativeElement;

    this.itimer = setInterval(() => {

      var speed = (0 - nativeElement.scrollTop) / 20;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (speed == 0) {
        clearInterval(this.itimer);
        nativeElement.scrollTop = 0;
      } else {
        nativeElement.scrollTop += speed;
      }

    });

  }



  onscroll(ev) {
    //文档高度:ev.target.scrollHeight  可视窗口高度:clientHeight  scrollTop

    var evtarget = ev.target;

    if (evtarget.scrollHeight == evtarget.clientHeight + evtarget.scrollTop) {

      switch (this.router.url.split('/')[1]) {
        case 'index':
          this.userService.home_get_data.emit();
          break;
        case 'share':
          this.userService.share_get_data.emit();
          break;
        case 'hot-work':
          this.userService.hot_work_get_data.emit();
          break;
        default:
          break;
      }

    }

  }

}
