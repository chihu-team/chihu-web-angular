import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofoundComponent } from './nofound.component';

describe('NofoundComponent', () => {
  let component: NofoundComponent;
  let fixture: ComponentFixture<NofoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
