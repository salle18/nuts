import {Action} from '@ngrx/store';
import {Message} from '../models';

export namespace MessagesActions {
    const CATEGORY = 'Messages';

    export const SHOW_MESSAGE = `[${CATEGORY}] Show Message`;

    export const SHOW_DIALOG = `[${CATEGORY}] Show Dialog`;

    export class ShowMessageAction implements Action {
        public readonly type: string = SHOW_MESSAGE;
        public constructor(public payload: Message) {}
    }

    export class ShowDialogAction implements Action {
        public readonly type: string = SHOW_DIALOG;
        public constructor(public payload: Message) {}
    }

}
