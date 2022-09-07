import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

// const client = ...

client.query({
    query: gql`
        query GetUniversities {
        universities {
            name
            alpha_two_code
            country
            web_pages
            }
        }
    `,
}).then((result) => console.log(result));

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);