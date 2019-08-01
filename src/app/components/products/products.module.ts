// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { HeadernavModule } from '../headernav/headernav.module';

@NgModule({
    imports: [
        ProductsRoutingModule,
        MaterialModule,
        SidenavModule,
        HeadernavModule
    ],
    declarations: [
        ProductsComponent,
    ],
    exports: [
        ProductsComponent,
    ]
})
export class ProductsModule {

}
