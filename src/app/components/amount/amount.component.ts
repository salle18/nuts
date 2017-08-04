import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-amount',
    templateUrl: 'amount.component.html',
    styleUrls: ['amount.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmountComponent {
    @Input() public amount: number = 0;

    @Input() public currencyCode: string = '';
}
