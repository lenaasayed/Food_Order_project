import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/provider.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styles: [],
})
export class AddProviderComponent implements OnInit {
  submitted = false;
  emailError=false;
  emailErrorMsg="Invalid email . Try again or contact us ."
  prov = new ProviderClass();
  providerForm: FormGroup;
  providerList:ProviderClass[];
  constructor(private providerService:ProviderService) {}

  ngOnInit(): void {
    this.buildFormControl();
    this.loadData()
  }
//Methods


// get f(){return this.providerForm.controls;}

// public get f() :FormGroup  {
//   return this.providerForm.controls;
// }


// get f(){return}
  handleSubmit() {
    // console.log(this.providerForm.value);
    // console.log('aaaaaaaaaaaaaaaaaaaa');
    // console.log(p);
    // console.log(this.prov);
    // console.log('aaaaaaaaaaaaaaaaaaaa');

    this.buildProvider();
    if(!this.isInvalidEmail()){
      this.providerService.addProvider(this.prov)
        .subscribe(
          data=>{
            this.submitted=true;
            this.emailError=false;
          },
          error=>{
            console.log(error)
          }
        )
    }
    // this.submitted = true;
    // provider.push(this.prov);

    // console.log(provider);

  }

  //Get all record
  loadData(){
    this.providerService.getProviders()
    .subscribe(
      data=>{
        this.providerList=data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  //Check for duplicate email
  isInvalidEmail(){
    let email = this.providerForm.get('email').value;
    if(this.providerList.filter(el=>el.email==email).length>0){
      this.emailError=true;
      return true;
    }
    return false;
  }
  //Generate new id
  getNewId(){
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (this.providerList.findIndex((el) => el.id == newId) == -1) {
        return newId;
      }
    }
  }

  //Build new provider object
  buildProvider(){
    let p = this.providerForm.value;
    this.prov.id = this.getNewId();
    console.log(this.getNewId())
    console.log(this.prov.id )

    this.prov.first_name = p.first_name;
    this.prov.last_name = p.last_name;
    this.prov.email = p.email;
    this.prov.position = p.position;
    this.prov.company = {
      company_name: p.company_name,
      city: p.city,
      phone: p.phone,
    };
  }
  //Build Form Control
  buildFormControl(){
    this.providerForm = new FormGroup({
      first_name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      last_name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      position: new FormControl('',[Validators.required]),
      company_name: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
    });
  }
}

