import {NgModule} from '@angular/core';
/*tslint:disable-next-line:max-line-length */
import {MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdListModule, MdMenuModule, MdProgressSpinnerModule, MdSnackBarModule, MdToolbarModule} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdListModule, MdMenuModule,
        MdProgressSpinnerModule, MdSnackBarModule, MdToolbarModule
    ],
    exports: [
        MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdListModule, MdMenuModule,
        MdProgressSpinnerModule, MdSnackBarModule, MdToolbarModule
    ]
})
export class MaterialModule {
}
