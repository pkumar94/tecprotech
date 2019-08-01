import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
  { path: 'forgotpassword', loadChildren: './components/forgotpassword/forgotpassword.module#ForgotpasswordModule' },
  { path: 'profile', loadChildren: './components/profile/profile.module#ProfileModule' },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule' },
  { path: 'customer', loadChildren: './components/customer/customer.module#CustomerModule' },
  { path: 'products', loadChildren: './components/products/products.module#ProductsModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
