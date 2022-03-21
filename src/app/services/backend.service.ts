import { Injectable } from '@angular/core';
import {Apollo,ApolloBase, gql} from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apolloUnihockey: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apolloUnihockey = this.apolloProvider.use('swissUnihockey');
  }

  getClubs(): Observable<any>{
    return this.apolloUnihockey
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
    return this.apolloUnihockey
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
            date
     
          }
        }
      `,
    }).valueChanges;
  }

}
