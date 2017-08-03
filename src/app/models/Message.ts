import {Action} from '@ngrx/store';

export class Message {
    public messageKey: string = '';
    public titleKey: string = '';
    public actionKey: string = '';
    public action: Action = null;
}
