import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from "react-router-dom/Route";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Team from './Components/Team';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact strict path="/Home" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
