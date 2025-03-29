import { Component, EventEmitter, Output } from '@angular/core';
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
  initialInvestment = 0;
  annualInvestment = 10;
  expectedReturn = 100;
  duration = 10;
  @Output() calculate = new EventEmitter<IUserInputInterface>();

  handleOnSubmit() {
    const inputData = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    this.calculate.emit(inputData);
  }
}
