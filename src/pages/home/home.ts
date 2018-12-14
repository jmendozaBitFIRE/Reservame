import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CATEGORIES} from "../../data/data.categories";
import {Category} from "../../interfaces/category.interface";
import { RestaurantsPage } from '../restaurants/restaurants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories:Category[] = [];
  constructor(public navCtrl: NavController) {
    this.categories = CATEGORIES.splice(0);
  }

  goToRestaurants(category:any){
    console.log(category);
    this.navCtrl.push(RestaurantsPage, {"category": category});
  }
}
