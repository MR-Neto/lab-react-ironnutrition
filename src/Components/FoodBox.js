import React, { Component } from 'react'

export default class FoodBox extends Component {

  state ={
    quantity:1,
  }

  changedQuantity = (e) =>{
    this.setState({
      quantity:e.target.value,
    })
  }

  addFoodHandler =() =>{
    const { food, addfood } = this.props;
    const { quantity } = this.state;
    addfood(food,quantity);    
  }





  render() {
    const { food } = this.props;
    const { quantity } = this.state;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange = {this.changedQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addFoodHandler}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
