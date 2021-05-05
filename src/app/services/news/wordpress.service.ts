import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(
    public http: HttpClient
    ) { 


  }

  getNews(url, name){
    return this.http.post('https://europe-west6-myclubmanagement.cloudfunctions.net/general/wordpress',{
      "url": url,
      "clubname": name
    });
  }
}
