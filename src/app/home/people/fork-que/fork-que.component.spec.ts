import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkQueComponent } from './fork-que.component';

describe('ForkQueComponent', () => {
  let component: ForkQueComponent;
  let fixture: ComponentFixture<ForkQueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkQueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
