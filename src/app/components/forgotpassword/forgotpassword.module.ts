// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ForgotpasswordComponent } from './forgotpassword.component';
import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ForgotpasswordRoutingModule,
        MaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CommonModule
    ],
    declarations: [
        ForgotpasswordComponent,
    ],
    exports: [
        ForgotpasswordComponent,
    ]
})
export class ForgotpasswordModule {

}
