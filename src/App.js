import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import Order from './Components/Order';
import Search from './Components/Search';


class App extends Component {
  state = {
    foodList: foods,
    foundFoods: foods
  }

  addfood = (food, quantity) => {
    const { foodList } = this.state;

    this.setState({
      foodList: foodList.map((element) => {
        if (food.name === element.name) {
          element.quantity = Number(element.quantity) + Number(quantity);
        }
        return element;
      }),
    })
  }

  search = (searchWord) => {
    this.setState({
      foundFoods: foods.filter((food) => food.name.toLowerCase().includes(searchWord.toLowerCase()))
    })
  }

  deleteOrder = (nameDelete) => {
    this.setState({
      foodList: foods.map((food) => {
        if (nameDelete === food.name) {
          food.quantity = 0;
        }
        return food;
      })
    })
  }

  render() {
    const { foodList, foundFoods } = this.state;

    return (

      <div className="App">


        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                IronNutrition              
              </h1>
            </div>
          </div>
        </section>

        <Search search={this.search} />

        <div className="columns">
          <div className="column is-half">
            {foundFoods.map((food, index) => <FoodBox key={index} food={food} addfood={this.addfood} />)}
          </div>
          <div className="column is-half">
            <Order list={foodList} deleteOrder={this.deleteOrder} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
