// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { HeadernavModule } from '../headernav/headernav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CustomerRoutingModule,
        MaterialModule,
        SidenavModule,
        HeadernavModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        CustomerComponent,
    ],
    exports: [
        CustomerComponent,
    ]
})
export class CustomerModule {

}
