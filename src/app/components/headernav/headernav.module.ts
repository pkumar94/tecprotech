// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HeadernavComponent } from './headernav.component';
import { MaterialModule } from 'src/material/material.module';

@NgModule({
    imports: [
        MaterialModule,

    ],
    declarations: [
        HeadernavComponent,
    ],
    exports: [
        HeadernavComponent,
    ]
})
export class HeadernavModule {

    opened = false;
}
