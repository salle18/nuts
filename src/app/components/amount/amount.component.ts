import { Component, Input } from '@angular/core';
import {Account} from "../../models";

@Component({
  selector: 'app-amount',
  templateUrl: 'amount.component.html',
  styleUrls: ['amount.component.scss']
})
export class AmountComponent {

  @Input() public amount: number = 0;

  @Input() public currencyCode: string = '';
}
