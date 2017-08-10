import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWorkComponent } from './hot-work.component';

describe('HotWorkComponent', () => {
  let component: HotWorkComponent;
  let fixture: ComponentFixture<HotWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
