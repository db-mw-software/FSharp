import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenretrainComponent } from './genretrain.component';

describe('GenretrainComponent', () => {
  let component: GenretrainComponent;
  let fixture: ComponentFixture<GenretrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenretrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenretrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
