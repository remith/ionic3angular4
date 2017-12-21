import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the CountryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-details',
  templateUrl: 'country-details.html',
})
export class CountryDetailsPage {
	selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryDetailsPage');
  }

  BackHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
