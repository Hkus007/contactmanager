import React, { Component } from 'react';
import Contacts from './conponents/contacts/Contacts';
import AddContact from './conponents/contacts/addContact';
import Header from './conponents/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import About from './conponents/pages/About'; 
import NotFound from './conponents/pages/NotFound';
import Test from './conponents/test/Test';
import EditContact from './conponents/contacts/addContact';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contact/add" component={AddContact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact/edit/:id" component={EditContact} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
        </div>
        </div>
        </Router>
      </Provider>

    );
  }
}

{/* <AddContact />
<Contacts /> */}

export default App;
