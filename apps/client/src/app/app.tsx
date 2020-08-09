import React from 'react';
import {
  Route, Link
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '../services/core/apollo-client.service';

import './app.scss';


export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="app">
        <div role="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-2">Page 2</Link></li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>This is the generated root route. <Link to="/page-2">Click here for page 2.</Link></div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div><Link to="/">Click here to go back to root page.</Link></div>
          )}
        />
        {/* END: routes */}
      </div>
    </ApolloProvider>
  );
};


export default App;
