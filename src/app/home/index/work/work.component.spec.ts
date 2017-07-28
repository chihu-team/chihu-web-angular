import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
