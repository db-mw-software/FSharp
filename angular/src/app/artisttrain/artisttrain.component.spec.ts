import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisttrainComponent } from './artisttrain.component';

describe('ArtisttrainComponent', () => {
  let component: ArtisttrainComponent;
  let fixture: ComponentFixture<ArtisttrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisttrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisttrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
