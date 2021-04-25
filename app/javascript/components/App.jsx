import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import HotelForm from './HotelForm';
import Header from "./Header";
import Show from "./Show";

export default class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}>
          </Route>
          <Route path='/new-hotel' component={HotelForm}>
          </Route>
          <Route path='/show/:id' component={Show}>
          </Route>
        </Switch>
      </>
    )
  }
}
