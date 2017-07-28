import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  @Input() datas:any = [];

  constructor() { }

  ngOnInit() {
  }

}
