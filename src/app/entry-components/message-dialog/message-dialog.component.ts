import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-message-dialog',
    templateUrl: 'message-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageDialogComponent {
    @Input() public titleKey: string = '';

    @Input() public messageKey: string = '';

    @Input() public confirmActionKey: string = '';

    @Input() public cancelActionKey: string = 'cancel_action';
}
