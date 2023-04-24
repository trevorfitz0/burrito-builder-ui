import React, { Component } from 'react';
import './App.css';
import {getOrders, removeOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.updateOrders = this.updateOrders.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
    .then(data => this.setState({ orders: data.orders}))
    .catch(err => console.error('Error fetching:', err));
  }

  updateOrders(id, name, ingredients) {
    const newOrder = {id, name, ingredients}
    const allOrders = this.state.orders
    allOrders.push(newOrder)
    this.setState({ orders: allOrders })
  }

  removeOrder(id) {
    const newArr = this.state.orders
    const objWithIdIndex = newArr.findIndex((obj) => obj.id === id);

    newArr.splice(objWithIdIndex, 1);
    removeOrder(id)
    this.setState({ orders: newArr})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm update={ this.updateOrders }/>
        </header>

        <Orders remove={ this.removeOrder } orders={ this.state.orders }/>
      </main>
    );
  }
}


export default App;
