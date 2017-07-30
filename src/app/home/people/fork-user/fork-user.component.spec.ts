import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkUserComponent } from './fork-user.component';

describe('ForkUserComponent', () => {
  let component: ForkUserComponent;
  let fixture: ComponentFixture<ForkUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
