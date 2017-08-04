import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWorkComponent } from './send-work.component';

describe('SendWorkComponent', () => {
  let component: SendWorkComponent;
  let fixture: ComponentFixture<SendWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
