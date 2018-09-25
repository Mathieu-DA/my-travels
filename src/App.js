import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

import Destination from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Destination
          destination="Bangui"
          country="République centrafricaine"
          image="https://www.un.org/africarenewal/sites/www.un.org.africarenewal/files/car12.jpg"
          distance="6613 km"
        />
        <Destination
          destination="Columbus, Ohio"
          country="United States of America"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9rqA5hobxrKkCy5rjYldr7TOdEjvqeKCVKxKf6H4qKPijsFl"
          distance="6817 km"
        />
      </div>
    );
  }
}

export default App;