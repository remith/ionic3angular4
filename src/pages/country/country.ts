import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CountryDetailsPage } from '../../pages/country-details/country-details';
import { HomePage } from '../../pages/home/home';
//search by filter
import { FormControl } from '@angular/forms';
//import { catchError, map, tap, debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
/**
 * Generated class for the CountryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {

  countries: any;
  errorMessage: any;
  currentPageClass = this;
  //filter
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  data:any;
  
  constructor(public navCtrl: NavController, public rest: RestProvider) {
  	//this.getCountries();
  	this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.getCountries();
    console.log('inside ionViewDidLoad');
    //this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
            this.setFilteredItems();
 
        });
  }
	//filter by search
  setFilteredItems() {
    this.countries = this.filterItems(this.searchTerm);
    console.log('inside setFilteredItems');
    console.log(this.countries);
  }

  filterItems(searchTerm){
    console.log('inside filterItems');
    console.log(searchTerm);
    //console.log(this.countries);
    //console.log(this.countries);
      return this.countries.filter((c) => {
        return (c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });    
    }


  getCountries() {
  	console.log('Inside getCountries of country.ts ');
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

    itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CountryDetailsPage, {
      item: item
    });
  }

  	BackHome(){
    	this.navCtrl.setRoot(HomePage);
	}

}
