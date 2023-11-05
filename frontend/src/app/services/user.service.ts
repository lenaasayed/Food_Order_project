import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/user';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient,private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }

   public get currentUser():User{
    return this.userSubject.value;
   }
   register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
     tap({
       //happy part
       next:(user)=>{
         this.setUserToLocalStorage(user);
         this.userSubject.next(user);
         this.toastrService.success(
           `Welcome to FoodMine ${user.name}!`,
           'Register Successful'
         )
       },
       error: (errorResponse)=>{
         this.toastrService.error(errorResponse.error, 'Register Failed')
       }
     })
    )
    }


   login(userLogin:IUserLogin):Observable<User>{
   return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
    tap({
      //happy part
      next:(user)=>{
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(
          `Welcome to FoodMine ${user.name}!`,
          'Login Successful'
        )
      },
      error: (errorResponse)=>{
        this.toastrService.error(errorResponse.error, 'Login Failed')
      }
    })
   )
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
   }

   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
   }

   private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson){return JSON.parse(userJson) as User;}
    return new User();
   }

  }
