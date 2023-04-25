import React from 'react';
import './Orders.css';

const Orders = props => {
  const orderEls = props.orders.map(order => {
    return (
      <div key={order.id + Math.random(Math.floor() * 1000)} className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={ingredient + order.id}>{ingredient}</li>
          })}
        </ul>
        <button onClick={() => props.remove(order.id) }>Complete!</button>
      </div>
    )
  });

  return (
    <section key={"orders"}>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;