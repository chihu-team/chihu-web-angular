import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';

declare var document:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  user:any = {};
  @ViewChild('scrollMe') public myScrollContainer: ElementRef;
  
  itimer = null;

  constructor( public userService: UserService ) {
    this.user = JSON.parse( localStorage.user );
    
    
  }

  ngOnInit() {
    
  }

  scrollToTop(){
    var nativeElement = this.myScrollContainer.nativeElement;

    this.itimer = setInterval(()=>{
      
      var speed = (0 - nativeElement.scrollTop)/20;
          speed = speed>0?Math.ceil(speed):Math.floor(speed);
          
      if(speed == 0){
        clearInterval(this.itimer);
        nativeElement.scrollTop = 0;
      }else{
        nativeElement.scrollTop+= speed;
      }
      
    });
    
  }

  

  onscroll(ev){
    //文档高度:ev.target.scrollHeight  可视窗口高度:clientHeight  scrollTop
    
    var evtarget = ev.target;

    if(evtarget.scrollHeight == evtarget.clientHeight + evtarget.scrollTop){
      
      this.userService.change.emit();
    }
    
  }

}
