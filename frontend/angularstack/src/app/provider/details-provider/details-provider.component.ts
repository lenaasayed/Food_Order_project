import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProviderClass } from 'src/app/models/provider.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-details-provider',
  templateUrl: './details-provider.component.html',
  styles: [
  ]
})
export class DetailsProviderComponent implements OnInit {

  company=new ProviderClass().company;
  prov = new ProviderClass();
  id:number;


  constructor(private providerService:ProviderService,private route:ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => this.id = parseInt(params.get('id')))

    this.providerService.getOneProvider(this.id)
    .subscribe(
      data=>{
        this.prov=data[0];
        this.company=this.prov.company;
        console.log( this.prov);
        console.log( this.company)

      },
      error=>{
        console.log(error)
      }
    )

  }
}
