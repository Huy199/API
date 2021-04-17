import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import List from './components/ProductList/List';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className='container'>
            <div className='row'>
              {/* <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <button type='button' className='btn btn-info mb-10'>
                Them san pham
              </button>
              <List />
            </div> */}

              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };
}

export default App;
