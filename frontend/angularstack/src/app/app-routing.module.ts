import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AddProviderComponent } from './provider/add-provider/add-provider.component';
import { EditProviderComponent } from './provider/edit-provider/edit-provider.component';
import { DeleteProviderComponent } from './provider/delete-provider/delete-provider.component';
import { DetailsProviderComponent } from './provider/details-provider/details-provider.component';
import { ProviderComponent } from './provider/provider.component';
import { RegisterComponent } from './register/register.component';

let n:number=1;
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"provider",component:ProviderComponent},
  {path:"provider/add-provider",component:AddProviderComponent},
  {path:"provider/edit-provider/:id",component:EditProviderComponent},
  {path:"provider/delete-provider/:id",component:DeleteProviderComponent},
  {path:"provider/details-provider/:id",component:DetailsProviderComponent},



  {path:"protfolio",component:PortfolioComponent},

  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
