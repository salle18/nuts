import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-toolbar-menu',
    templateUrl: 'toolbar-menu.component.html',
    styleUrls: ['toolbar-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarMenuComponent {
    @Input() public disableUserAccounts: boolean = false;
}
