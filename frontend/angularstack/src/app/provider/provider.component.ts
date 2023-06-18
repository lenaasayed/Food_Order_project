import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../models/provider.class';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styles: [
  ]
})
export class ProviderComponent implements OnInit {
  provider : ProviderClass

  constructor(private providerService:ProviderService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.providerService.getProviders()
    .subscribe(
      data=>{
        this.provider=data;
      },
      error=>{
        console.log(error)
      }
    )
  }

}
