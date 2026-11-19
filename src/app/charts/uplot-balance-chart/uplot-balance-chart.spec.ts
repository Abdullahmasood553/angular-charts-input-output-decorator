import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UplotBalanceChart } from './uplot-balance-chart';

describe('UplotBalanceChart', () => {
  let component: UplotBalanceChart;
  let fixture: ComponentFixture<UplotBalanceChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UplotBalanceChart],
    }).compileComponents();

    fixture = TestBed.createComponent(UplotBalanceChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
