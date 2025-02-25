import { Component, OnInit, signal } from '@angular/core';
import { InvestmentInput } from './Investment-Input.model';
import { InvestmentService } from './Services/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Investment-Calculator';

  // resultsData=signal<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[] | undefined>(undefined);
  // constructor(private investmentService: InvestmentService) 
  // {  
  // }

  // resultsData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
 
  // onCalculateInvestmentResults(data: InvestmentInput) {
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } =
  //     data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;

  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  //   this.resultsData.set(annualData);  
  //   console.log(annualData);
  // }

}
