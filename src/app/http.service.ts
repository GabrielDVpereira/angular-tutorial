import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Injectable makes this class avaliable to be injected as a dependency in another component
export class HttpService {

  constructor(private http: HttpClient) { }

  httpRequest(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
