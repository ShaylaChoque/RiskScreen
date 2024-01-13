import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskscreenComponent } from './riskscreen.component';

describe('RiskscreenComponent', () => {
  let component: RiskscreenComponent;
  let fixture: ComponentFixture<RiskscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
