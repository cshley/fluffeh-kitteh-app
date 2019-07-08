import React, { Component } from 'react';
import "./app.css";
import Form from './components/Form';


const API_KEY = "d1f5a3acae70dc33db0f071926bd9bc9";


class App extends Component {
  getRecipe= async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&page=2`);
   
  }
  render() {
  return (
    <div className="App">
     <header className="App-header">
       <h1 className="App-title">Recipe Search</h1>
     </header>
     <Form getRecipe={this.getRecipe} />
    </div>
    );
  }
}

export default App;
