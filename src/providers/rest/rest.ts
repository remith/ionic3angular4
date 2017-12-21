import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { catchError, tap } from 'rxjs/operators';
//import { MessageService } from '../../app/message.service';
//import { of } from 'rxjs/observable/of';
//import { map, debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
	private url = 'https://restcountries.eu/rest/v2/all';
  countries : any;
	//private http:HttpClient;
  constructor(private http: HttpClient) {
    console.log('Constructor of RestProvider called');
    //console.log('');

  }

  getCountries() : Observable<any>{
    console.log('Inside getCountries of RestProvider');
  	return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
/*  		.pipe(
  			tap(data => this.log('Fetched Countries')),
			catchError(this.handleError('getCountries',[]))
			);*/
  	}

    private extractData(res: Response) {
      let body = res;
       // console.log(body);
      return body || [];
    }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

  //filter by search
/*  filterItems(searchTerm){
    console.log('inside filterItems');
    //console.log(this.countries);
    this.countries = this.extractData();
    console.log(this.countries);
      return this.countries.filter((c) => {
        return (c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });    
    }*/

/*  	private log(message: string) {
    this.messageService.add('RestProvider: ' + message);
  }*/
/*    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/



 /* searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }*/

/*  angular.module('ionicApp', [])

.controller('MainCtrl', function($scope, $http) {
 $http.get('https://cors-test.appspot.com/test').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

angular.module('ionicApp', [])

.controller('MainCtrl', function($scope, $http) {
  $http.get('http://echo.jsontest.com/conditions/frightful').then(function(resp) {
    $scope.conditions = resp.data.conditions;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
});*/