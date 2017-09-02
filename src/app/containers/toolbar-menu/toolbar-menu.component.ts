import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {StateService} from "../../services";
import {UserActions} from '../../actions';

@Component({
    selector: 'app-toolbar-menu',
    templateUrl: 'toolbar-menu.component.html',
    styleUrls: ['toolbar-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarMenuComponent {
    @Input() public disableUserAccounts: boolean = false;
    
    public onLogout(): void {
        this.stateService.dispatch(new UserActions.LogoutAction());
    }
    
    public constructor(private stateService: StateService) {}
}
