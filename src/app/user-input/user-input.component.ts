import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentInput } from "src/app/Investment-Input.model";
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
  // reset()
  // {
  //   this.enteredInitialInvestment = '0';
  //   this.enteredAnnualInvestment = '0';
  //   this.enteredExpectedReturn = '5';
  //   this.enteredDuration = '10';
    
  // }
}
