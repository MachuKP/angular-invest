import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserInputInterface } from './user-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal(10000);
  annualInvestment = signal(100);
  expectedReturn = signal(50);
  duration = signal(10);
  calculate = output<IUserInputInterface>();

  handleOnSubmit() {
    const inputData = {
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    };
    this.calculate.emit(inputData);

    this.initialInvestment.set(0)
    this.annualInvestment.set(0)
    this.expectedReturn.set(0)
    this.duration.set(0)
  }
}
