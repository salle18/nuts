import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {StateService} from "../services";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TransactionsOverviewGuard implements CanActivate {

    public canActivate(): Observable<boolean> {
        return Observable.of(true);
    }

    public constructor(private stateService: StateService) {}
}
