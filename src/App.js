import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Header from './Component/Header';
import Hero from './Component/Hero';
import Category from './Component/Category';
import Categories from './Component/Categories';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
      <div className="grid">
        <Switch>
          <Route path="/Categories">
            <Header />
            <Hero />
            <Categories />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Hero />
            <Contact />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
            <Category />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
