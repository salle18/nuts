import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {StateService} from '../services';

@Injectable()
export class TransactionsOverviewGuard implements CanActivate {
    public canActivate(): Observable<boolean> {
        return Observable.of(true);
    }

    public constructor(private stateService: StateService) {}
}
