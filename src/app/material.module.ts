import { NgModule } from '@angular/core';
import {MdCardModule, MdIconModule, MdListModule, MdProgressSpinnerModule, MdToolbarModule} from '@angular/material';

@NgModule({
    imports: [
        MdCardModule, MdIconModule, MdListModule, MdProgressSpinnerModule, MdToolbarModule
    ],
    exports: [
        MdCardModule, MdIconModule, MdListModule, MdProgressSpinnerModule, MdToolbarModule
    ]
})
export class MaterialModule { }
