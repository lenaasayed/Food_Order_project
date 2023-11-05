import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
let n:number=1;
const routes: Routes = [
  //default route
  {path:'',component:HomeComponent},
  //search route
  {path:'search/:searchTerm',component:HomeComponent},
  //Food Componenet
  {path:'food/:id',component:FoodPageComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckoutPageComponent},
  {path:'payment',component:PaymentPageComponent}







  // {path:"",component:HomeComponent},
  // {path:"about",component:AboutComponent},
  // {path:"contact",component:ContactComponent},
  // {path:"login",component:LoginComponent},
  // {path:"register",component:RegisterComponent},
  // {path:"provider",component:ProviderComponent},
  // {path:"provider/add-provider",component:AddProviderComponent},
  // {path:"provider/edit-provider/:id",component:EditProviderComponent},
  // {path:"provider/delete-provider/:id",component:DeleteProviderComponent},
  // {path:"provider/details-provider/:id",component:DetailsProviderComponent},



  // {path:"protfolio",component:PortfolioComponent},

  // {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
