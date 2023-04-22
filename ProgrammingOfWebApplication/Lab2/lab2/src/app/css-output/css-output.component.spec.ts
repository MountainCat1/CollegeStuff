import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssOutputComponent } from './css-output.component';

describe('CssOutputComponent', () => {
  let component: CssOutputComponent;
  let fixture: ComponentFixture<CssOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
