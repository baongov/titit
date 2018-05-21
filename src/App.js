import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Col} from 'react-bootstrap'

import NavBarInstance from './components/navbar';

// Redux module
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './state/reducers'

// Twitter components
import MessagePage from './pages/message'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notfound'

import './App.css';

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBarInstance />
            <Col className="col-sm-4 col-sm-offset-4">
              <Switch>
                <Route exact path='/' component={MessagePage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='*' component={NotFoundPage} />
              </Switch>
            </Col>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
