// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from 'src/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        MaterialModule,
        RouterModule
    ],
    declarations: [
        SidenavComponent,
    ],
    exports: [
        SidenavComponent,
    ]
})
export class SidenavModule {

}
