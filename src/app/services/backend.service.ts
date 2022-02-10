import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private apollo: Apollo) {
    
  }

  getClubs(): Observable<any>{
    return this.apollo
    .watchQuery({
      query: gql`
        {
          clubs {
            id
            name
          }
        }
      `,
    }).valueChanges;
  }

  getNews(): Observable<any>{
    return this.apollo
    .watchQuery({
      query: gql`
        {
          news {
            id
            title
            slug
            image
            leadText
            text
            htmlText
            author
            authorImage
            tags
            date,
            url
          }
        }
      `,
    }).valueChanges;
  }

}
