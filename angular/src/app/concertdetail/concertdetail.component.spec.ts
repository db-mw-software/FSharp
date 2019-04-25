import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertdetailComponent } from './concertdetail.component';

describe('ConcertdetailComponent', () => {
  let component: ConcertdetailComponent;
  let fixture: ComponentFixture<ConcertdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
