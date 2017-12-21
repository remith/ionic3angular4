import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { CallNumber } from 'ionic-native';
//import { EmailComposer } from 'ionic-native';
import { HomePage } from '../home/home';

@Component({
  selector: 'item-details',
  templateUrl: 'item-details.html'
})

export class ItemDetails {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
    
  BackHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
