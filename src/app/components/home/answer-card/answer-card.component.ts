import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent implements OnInit {

  @Input() datas:any = [];

  constructor() { }

  ngOnInit() {
  }

}
