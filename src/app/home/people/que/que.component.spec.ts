import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueComponent } from './que.component';

describe('QueComponent', () => {
  let component: QueComponent;
  let fixture: ComponentFixture<QueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
