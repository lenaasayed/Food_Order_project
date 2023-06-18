import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-delete-provider',
  templateUrl: './delete-provider.component.html',
  styles: [
  ]
})
export class DeleteProviderComponent implements OnInit {

  id:number;
  company:string;
  isDeleted=false;
  constructor(private providerService:ProviderService,private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => this.id=parseInt(params.get('id')))

    this.deleteRecord();
  }

  deleteRecord(){
    this.providerService.deleteOneProvider(this.id)
     .subscribe(
      data =>{
        console.log(data);
        this.company=data.company.company_name;
        this.isDeleted=true;
      },
      error=>{
        console.log(error)
      }
     )
  }

}
