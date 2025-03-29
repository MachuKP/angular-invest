export interface IUserInputInterface {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface ICalculatedValueInterface {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
