import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdProgressSpinnerModule, MdToolbarModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdProgressSpinnerModule, MdToolbarModule],
    exports: [MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdProgressSpinnerModule, MdToolbarModule]
})
export class MaterialModule {
}
