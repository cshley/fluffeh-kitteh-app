import React, { Component } from 'react';
import "./app.css";
import KittehImages from "./components/kittehImages";


class App extends Component {

  render() {
  return (
    <div className="App">
  <p>kitteh</p>
  <KittehImages  />
   
    </div>
    );
  }
}

export default App;
