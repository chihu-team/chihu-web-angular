import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectComponent } from './collect.component';

describe('CollectComponent', () => {
  let component: CollectComponent;
  let fixture: ComponentFixture<CollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
