import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from './components/containers';

const routes = require('./config/routes.json');

/**
 * Route component to display components dynamically on each route
 */
class Routes extends Component { 
    route = ({ component, path }) => {
        const RouteComponent = Pages[component];
        return (
            <Route
                exact
                key={component}
                page={component}
                path={path}
                render={props => <RouteComponent {...props} />}
            />
        )
    }

    render() { 
      return ( 
          <Router> 
              <Switch>
                  {Object.values(routes).map(routeData => this.route(routeData))}
              </Switch> 
          </Router> 
     ); 
    } 
  } 
    
export default Routes; 