import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendShareComponent } from './send-share.component';

describe('SendShareComponent', () => {
  let component: SendShareComponent;
  let fixture: ComponentFixture<SendShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
