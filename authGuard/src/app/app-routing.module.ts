import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegLoginComponent } from './reg-login/reg-login.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { AuthGuard } from './auth.guard';
import { GuardServService } from './guard-serv.service';

const routes: Routes = [
  {path:"regLogin", component: RegLoginComponent},
  {path:"public", component: PublicComponent, canActivate:[AuthGuard]},
  {path:"admin", component: AdminComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
