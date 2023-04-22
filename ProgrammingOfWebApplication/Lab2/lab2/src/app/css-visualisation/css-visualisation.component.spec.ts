import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVisualisationComponent } from './css-visualisation.component';

describe('CssVisualisationComponent', () => {
  let component: CssVisualisationComponent;
  let fixture: ComponentFixture<CssVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssVisualisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
