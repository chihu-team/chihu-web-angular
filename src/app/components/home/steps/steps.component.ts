import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../service/user.service';

declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
declare var document: any;
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input() datas:any = [];
  items = [];
  //PhotoSwipeUI 的dom对象存储
  pswpElement = null;
  //PhotoSwipe对象存储
  gallery: any = null;


  constructor(public userService: UserService) { }

  ngOnInit() {
    var len = this.datas.length;

      for (var i = 0; i < len; i++) {
        if (this.datas[i]["src"].length > 5) {
          var objs = {};
          objs["src"] = this.datas[i]["src"];
          objs["w"] = this.datas[i]["width"];
          objs["h"] = this.datas[i]["height"];
          objs["title"] = "步骤 " + (i + 1) + "：" + this.datas[i]["text"];
          this.items.push(objs);
        }
      }
      
  }

  //查看步骤图
  pswpElementInit(idx) {
    if(!this.pswpElement){
      this.pswpElement = document.querySelectorAll('.pswp')[0];
    }

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: idx * 1 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, options);
    this.gallery.init();
    
  }

}
