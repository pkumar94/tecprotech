import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 


const material = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule
]


@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]

})
export class MaterialModule { }
