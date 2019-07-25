import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SiteVisitLogs from './pages/SiteVisitLogs';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <div className="App">
            <Link to="/">Visitor's Log</Link>
            <Route exact path="/" component={Dashboard} />
            <Route path="/visitors" component={SiteVisitLogs} />
          </div>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
