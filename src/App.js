import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="Math-Magicians/">
              <Route index element={<Home />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="quote" element={<Quote />} />
            </Route>
          </Routes>
        </Router>
      </>
    );
  }
}
