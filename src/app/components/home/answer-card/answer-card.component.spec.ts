import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCardComponent } from './answer-card.component';

describe('AnswerCardComponent', () => {
  let component: AnswerCardComponent;
  let fixture: ComponentFixture<AnswerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
