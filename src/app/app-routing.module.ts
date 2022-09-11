import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'payment',component:PaymentComponent},
  {path:'admin',component:AdminNavComponent},
  {path:'orders',component:OrdersComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-signup',component:AdminSignupComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
