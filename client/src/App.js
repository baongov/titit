import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBarInstance from './components/navbar';

// Redux module
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './state/reducers'

// Twitter components
import MessagePage from './pages/message'
import LoginPage from './pages/login'
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

            <Switch>
              <Route exact path='/' component={MessagePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
