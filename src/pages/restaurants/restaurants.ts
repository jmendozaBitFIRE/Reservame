import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ALITAS } from "../../data/data.alitas";
import { ReservationPage } from "../index.pages";



@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  category:any={};
  restaurants = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("name"));
    this.restaurants = ALITAS.splice(0);
  }

  ionViewDidLoad() {
    
    this.category = this.navParams.get("category");
  }

  goToReservation(restaurant:any){
    console.log(restaurant);
    this.navCtrl.push(ReservationPage, {restaurant: restaurant});
  }
}
