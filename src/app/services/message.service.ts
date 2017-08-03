import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MdSnackBar, MdDialog, MdDialogRef} from '@angular/material';
import {Message} from '../models';
import {StateService} from "./state.service";
import {MessageDialogComponent} from "../entry-components";
import {identity} from "../utils";

@Injectable()
export class MessageService {
    
    public constructor(private translateService: TranslateService, private stateService: StateService,
                       private snackBarService: MdSnackBar, private dialogService: MdDialog) {}
    
    
    public showSnackBar(message: Message): void {
        this.translateService.get([message.messageKey, message.actionKey]).switchMap(translations =>  this.snackBarService
                .open(translations[message.messageKey], translations[message.actionKey])
                .onAction()
        ).delay(150).subscribe(() => this.stateService.dispatch(message.action));
    }
    
    public showConfirmDialog(message: Message): void {
        const dialogRef: MdDialogRef<MessageDialogComponent> = this.dialogService.open(MessageDialogComponent);
        const componentInstance = dialogRef.componentInstance;
        componentInstance.titleKey = message.titleKey;
        componentInstance.messageKey = message.messageKey;
        componentInstance.confirmActionKey = message.actionKey;
        dialogRef.afterClosed()
            .filter(identity)
            .subscribe(() => this.stateService.dispatch(message.action));
    }
    
}
