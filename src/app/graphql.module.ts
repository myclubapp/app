import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uriSU = 'https://europe-west6-myclubmanagement.cloudfunctions.net/api/swissunihockey'; // <-- add the URL of the GraphQL server here
const uriSV = 'https://europe-west6-myclubmanagement.cloudfunctions.net/api/swissvolley'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): NamedOptions {
  
  return {
    swissUnihockey: {
      link: httpLink.create({uri: uriSU}),
      cache: new InMemoryCache(),
    },
    swissVolley: {
      link: httpLink.create({uri: uriSV}),
      cache: new InMemoryCache(),
    }
  }
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
