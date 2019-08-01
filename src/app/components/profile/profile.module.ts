// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { HeadernavModule } from '../headernav/headernav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ProfileRoutingModule,
        MaterialModule,
        SidenavModule,
        HeadernavModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        ProfileComponent,
    ],
    exports: [
        ProfileComponent,
    ]
})
export class ProfileModule {

}
