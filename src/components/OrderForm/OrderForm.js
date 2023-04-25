import React, { Component } from 'react';
import { addOrder } from '../../apiCalls';
import './OrderForm.css'

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name === '') {
      this.props.errorHandler('Please enter your name')
      return
    }
    const ingredientLength = this.state.ingredients.length
    if (ingredientLength === 0) {
      this.props.errorHandler('Please choose at least 1 ingredient')
      return
    }
    this.props.errorHandler('')
    this.clearInputs();
    addOrder(this.state.ingredients.length + 1, this.state.name, this.state.ingredients)
    this.props.update(this.state.ingredients.length + 1, this.state.name, this.state.ingredients)
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleIngredientChange = (e) => {
    e.preventDefault()
    const newArr = this.state.ingredients
    const dupeCheck = newArr.filter(ingredient => ingredient === e.target.name)
    if(dupeCheck.length === 0 ) {
      newArr.push(e.target.name)
      this.setState({ ingredients: newArr })
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button className='ingredient-button' key={ingredient} name={ingredient} onClick={(e) => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
        className='name-input'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />
        <div className='buttons'>
          { ingredientButtons }
        </div>

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className='submit' onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
