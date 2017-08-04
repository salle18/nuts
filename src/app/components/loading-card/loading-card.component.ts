import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-loading-card',
    templateUrl: 'loading-card.component.html',
    styleUrls: ['loading-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingCardComponent {
    @Input() public loading: boolean = false;

    @Input() public loaded: boolean = true;

    @Input() public titleKey: string = '';

    @Input() public subtitleKey: string = '';

    @Input() public errorKey: string = 'error_loading_data';
}
