

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MyModalComponent } from './modal.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [MyModalComponent],
    providers: [],
    exports: [MyModalComponent]
})
export class ModalComponentModule { }
