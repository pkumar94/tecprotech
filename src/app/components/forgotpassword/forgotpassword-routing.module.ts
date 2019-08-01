import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword.component';

const routes: Routes = [
  {
    path: '', component: ForgotpasswordComponent,
    children: [
      { path: 'forgotpassword', component: ForgotpasswordComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgotpasswordRoutingModule { }
