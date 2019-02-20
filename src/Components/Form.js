import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    createMode: false,
  }

  handlerForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  changedFormHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  createFoodHandler = () => {
    console.log('createFood');
    const { createMode } = this.state;
    if (createMode) {
      const { name, calories, image } = this.state;
      const { createFood } = this.props;
      const newFood = {
        name: name,
        calories: Number(calories),
        image: image,
        quantity: 0,
      }

      createFood(newFood);
      this.setState({
        name: '',
        calories: 0,
        image: '',
        createMode: false,
      });
    } else {
      this.setState({
        createMode: true,
      });
    }
  }


  render() {
    const { name, cal, url, createMode } = this.state;

    console.log(this.state);

    return (

      <div>
        {createMode ? <input className="input" type="text" name="name" value={name} placeholder="name" onChange={this.changedFormHandler} /> : false}
        {createMode ? <input className="input" type="number" name="calories" value={cal} placeholder="calories" onChange={this.changedFormHandler} /> : false}
        {createMode ? <input className="input" type="text" name="image" value={url} placeholder="image" onChange={this.changedFormHandler} /> : false}
        <button onClick={this.createFoodHandler}> {createMode ? "Save food" : "Create food"}</button>
      </div>
    )
  }
}
