import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ORDERS_CREATE_URL, ORDERS_NEW_FOR_CURRENT_USER_URL } from '../shared/constants/urls';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDERS_CREATE_URL,order);
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDERS_NEW_FOR_CURRENT_USER_URL)
  }
}
