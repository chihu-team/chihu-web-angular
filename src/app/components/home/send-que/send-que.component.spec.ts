import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendQueComponent } from './send-que.component';

describe('SendQueComponent', () => {
  let component: SendQueComponent;
  let fixture: ComponentFixture<SendQueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendQueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
