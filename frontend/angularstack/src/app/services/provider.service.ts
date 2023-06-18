import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProviderClass } from '../models/provider.class';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  //URL Endpoint to our Express app
  apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  //Get all records
  getProviders():Observable<any>{
    return this.http.get(this.apiUrl)
  }
  //Post --add a new record
  addProvider(newProvider:ProviderClass):Observable<any>{
    return this.http.post(this.apiUrl,newProvider)
  }
  //Get one record
  getOneProvider(id:number):Observable<any>{
    return this.http.get(this.apiUrl+id);
  }
  //Put --update a record
  updateProvider(id:number,newProvider:ProviderClass):Observable<ProviderClass>{
    return this.http.put<ProviderClass>(this.apiUrl+id,newProvider)
  }
    //Delete one record
    deleteOneProvider(id:number):Observable<any>{
      return this.http.delete(this.apiUrl+id);
    }

}
