import { Component, Input } from '@angular/core';
import { InvestmentInput } from '../Investment-Input.model';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrls: ['./investment-result.component.css']
})
export class InvestmentResultComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
  trackByYear(index: number, result: any): number {
    return result.year;
  }
  
}
