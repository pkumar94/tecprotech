// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { HeadernavModule } from '../headernav/headernav.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
    imports: [
        DashboardRoutingModule,
        MaterialModule,
        SidenavModule,
        HeadernavModule,
        HighchartsChartModule
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule {

}
