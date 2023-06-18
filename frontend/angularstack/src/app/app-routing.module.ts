import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
let n:number=1;
const routes: Routes = [
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
