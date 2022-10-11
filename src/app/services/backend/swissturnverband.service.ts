/* import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwissturnverbandService {
  private readonly apollo: ApolloBase;
  constructor (private readonly apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('swissturnverband');
  }

  getClubs (): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          clubs {
            id
            name
          }
        }
      `
    }).valueChanges;
  }

  getNews (): Observable<any> {
    return this.apollo.watchQuery({
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
            url
          }
        }
      `
    }).valueChanges;
  }

  getGames (teamId: string): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          team(teamId: teamId) {
            id
            name
            games {
              id
            }
          }
        }
      `
    }).valueChanges;
  }
}
*/
