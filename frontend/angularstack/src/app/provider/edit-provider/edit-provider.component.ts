import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProviderClass } from 'src/app/models/provider.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styles: [
  ]
})
export class EditProviderComponent implements OnInit {
  submitted = false;
  emailError=false;
  emailErrorMsg="Invalid email . Try again or contact us ."
  prov = new ProviderClass();
  providerForm: FormGroup;
  providerList:ProviderClass[];

  id:number;
  email:string;
  email1:string;
  ready=false; //load only when data are present

  constructor(private providerService:ProviderService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.buildFormControl();
    this.loadData();

    this.route.paramMap.subscribe(params => this.id = parseInt(params.get('id')))

    this.providerService.getOneProvider(this.id)
    .subscribe(
      data=>{
        this.prov=data[0];
        console.log(data);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        // console.log(this.prov);

        //flatten object
        const temp = {};
        for(const [k1,v1] of Object.entries(this.prov))
        {
          switch(k1)
          {
            case '_id' || 'id': break;
            case 'company':
              {
                  for(const [k2,v2] of Object.entries(this.prov[k1]))
                  {
                      switch(k2)
                    {
                        case '_id' || 'id': break;
                        default:
                        temp[k2]=v2;
                        // if(k2 != '_id'){
                        //   temp[k2] = v2;
                        // }
                    }
                  }
                  break;
              }
            default:
              temp[k1]=v1;
          }

        }
        console.log(temp);
        console.log("this.prov");
        console.log(this.prov);

        // setTimeout(()=>{
        //   this.providerForm.patchValue(temp);
        // },2000)
        this.providerForm.patchValue(temp);

        this.ready=true;

      },
      error=>{
        console.log(error)
      }
    )

  }
//Methods

  handleSubmit() {

    this.buildProvider();
    if(!this.isInvalidEmail()){


      this.providerService.updateProvider(this.id,this.prov)
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
    console.log('handleSubmit()')

    console.log(this.email)
    console.log(this.email1)
  }

  //Get all record
  loadData(){
    console.log('loadData()')

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
    console.log('isInvalidEmail')

    let email = this.providerForm.get('email').value;
    this.email1=email;
     if( this.providerList.filter(el=>el.email==email).length>0){
      this.emailError=true;
      return true;
    }
    // this.emailError=false;
    return false;
  }
  //Generate new id
  getNewId(){
    let newId: number;
    console.log('getNewId()')

    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (this.providerList.findIndex((el) => el.id == newId) == -1) {
    console.log('newId');

        return newId;
      }
    }
  }

  //Build new provider object
  buildProvider(){
    console.log('buildProvider')

    let p = this.providerForm.value;
    this.prov.id = this.getNewId();
    console.log('ppppppppppppppppppppppppppppppppppppp')
    console.log(p)

    console.log(this.prov.id )

    this.prov.first_name = p.first_name;
    this.prov.last_name = p.last_name;
    this.prov.email = p.email;
    this.prov.position = p.position;
    this.prov.company = {
      company_name: p.company_name,
      city: p.city,
      phone: p.phone
    };
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk')
    console.log(this.prov.company.company_name)

  }
  //Build Form Control
  buildFormControl(){
    console.log('buildFormControl')

    this.providerForm = new FormGroup({
      first_name: new FormControl([Validators.required,Validators.minLength(2)]),
      last_name: new FormControl([Validators.required]),
      email: new FormControl([Validators.required,Validators.email]),
      position: new FormControl([Validators.required]),
      company_name: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
    });
  }
}
