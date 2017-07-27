import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {StateService} from "../services";
import {AccountsActions} from '../actions';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccountsOverviewGuard implements CanActivate {

    public canActivate(): Observable<boolean> {
        return this.stateService.accountsLoaded$.take(1).do(loaded => loaded || this.stateService.dispatch(new AccountsActions.LoadAction())).map(() => true);
    }

    public constructor(private stateService: StateService) {}
}
