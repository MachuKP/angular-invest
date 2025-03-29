import { Component, input } from '@angular/core';
import { ICalculatedValueInterface } from '../user-input/user-input-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  results = input<ICalculatedValueInterface[] | []>();
}
