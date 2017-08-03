import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';

import {MessagesActions} from '../actions';
import {MessageService} from "../services";
import {Message} from "../models";

@Injectable()
export class MessagesEffects {
    @Effect({dispatch: false})
    public showMessage$: Observable<Action> =
        this.actions$.ofType(MessagesActions.SHOW_MESSAGE)
            .map(toPayload)
            .do((message: Message) => this.messageService.showSnackBar(message));

    @Effect({dispatch: false})
    public showDialog$: Observable<Action> =
        this.actions$.ofType(MessagesActions.SHOW_DIALOG)
            .map(toPayload)
            .do((message: Message) => this.messageService.showConfirmDialog(message));

    public constructor(
        private actions$: Actions, private messageService: MessageService) {}
}
