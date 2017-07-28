import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCardComponent } from './share-card.component';

describe('ShareCardComponent', () => {
  let component: ShareCardComponent;
  let fixture: ComponentFixture<ShareCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
