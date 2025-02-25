import { Component, computed, inject, Input } from '@angular/core';
import { InvestmentInput } from '../Investment-Input.model';
import { InvestmentService } from '../Services/investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrls: ['./investment-result.component.css']
})
export class InvestmentResultComponent {
  
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData() || []);
  // get results() {
  //   return this.investmentService.resultData;
  // }
  
  trackByYear(index: number, result: any): number {
    return result.year;
  }


}
