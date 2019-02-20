import React, { Component } from 'react'

export default class Order extends Component {
  render() {
    const { list, deleteOrder } = this.props;

    return (
      <div>
        <h2 className="title is-4">Today's Food</h2>
        <ul>
          {(list.filter((food) => food.quantity > 0)).map((food, index) => {
            return <li>{food.quantity} {food.name} = {Number(food.quantity) * Number(food.calories)} cal  <button onClick={()=>{
              deleteOrder(food.name);
            }} > Delete </button></li>;
          })}
        </ul>
        <h4 className="title is-6">Total:   {list.reduce((acc,food) => acc + (Number(food.quantity) * Number(food.calories)) , 0 )}</h4>
      </div>
    )
  }
}
