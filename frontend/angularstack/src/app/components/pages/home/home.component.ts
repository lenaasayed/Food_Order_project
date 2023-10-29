import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];
  len=0;

  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm){
        foodsObservable=this.foodService.getAllFoodsBySearchTerm(params.searchTerm)
      }
      else if (params.tag){
        foodsObservable = this.foodService.getAllFoodByTag(params.tag);
      }
      else {
        foodsObservable =foodService.getAll();
      }
      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })

   }





  ngOnInit(): void {
  }

}
