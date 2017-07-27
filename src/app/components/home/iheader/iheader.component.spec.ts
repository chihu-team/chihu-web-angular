import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IheaderComponent } from './iheader.component';

describe('IheaderComponent', () => {
  let component: IheaderComponent;
  let fixture: ComponentFixture<IheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
