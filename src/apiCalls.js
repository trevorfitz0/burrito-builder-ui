export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrder = (id, name, ingredients) => {
  fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: 
    JSON.stringify({
      id: id,
      name: name,
      ingredients: ingredients
    })
  })
    
}