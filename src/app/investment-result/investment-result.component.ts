import { Component, Input } from '@angular/core';
import { ICalculatedValueInterface } from '../user-input/user-input-model';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  @Input() results?: ICalculatedValueInterface[];
}
