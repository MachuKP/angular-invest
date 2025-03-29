import { Injectable } from '@angular/core';
import {
  ICalculatedValueInterface,
  IUserInputInterface,
} from './user-input/user-input-model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  calculateResult: ICalculatedValueInterface[] = [];

  calculateInvestmentResults(data: IUserInputInterface) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData)
    this.calculateResult = annualData;
  }
}
