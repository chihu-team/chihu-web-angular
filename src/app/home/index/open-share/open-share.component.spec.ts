import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenShareComponent } from './open-share.component';

describe('OpenShareComponent', () => {
  let component: OpenShareComponent;
  let fixture: ComponentFixture<OpenShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
