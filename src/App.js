import React, {PureComponent} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './page/Movies/Movies'
import Customers from './page/Customers/Customers'
import Rentals from './page/Rentals/Rentals'
import NotFound from './page/NotFound/NotFound'
import NavBar from './component/NavBar/NavBar'
import MovieForm from './page/MovieForm/MovieForm'

class App extends PureComponent {
  render() {
    return (
      <>
        <NavBar/>
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/" exact component={Movies}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;