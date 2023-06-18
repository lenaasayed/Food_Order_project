import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { DeleteProviderComponent } from './delete-provider/delete-provider.component';
import { DetailsProviderComponent } from './details-provider/details-provider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { ProviderComponent } from './provider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProviderComponent,
    AddProviderComponent,
    DeleteProviderComponent,
    EditProviderComponent,
    DetailsProviderComponent,],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports:[    ProviderComponent,
    AddProviderComponent,
    DeleteProviderComponent,
    EditProviderComponent,
    DetailsProviderComponent,
    ReactiveFormsModule]
})
export class ProviderModule { }
