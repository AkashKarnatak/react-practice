import React from 'react'
import { useState } from 'react'

const foodItems = [
  {
    id: 1,
    name: 'Sushi',
    desc: 'Finest fish and veggies',
    cost: '22.99',
  },
  {
    id: 2,
    name: 'Schnitzel',
    desc: 'A german speciality!',
    cost: '16.50',
  },
  {
    id: 3,
    name: 'Barbecue Burger',
    desc: 'American, raw, meaty',
    cost: '12.99',
  },
  {
    id: 4,
    name: 'Green Bowl',
    desc: 'Healty...and green...',
    cost: '18.99',
  },
]

export const CartContext = React.createContext({
  foodItems,
  cart: { 1: 0, 2: 0, 3: 0, 4: 0 },
  onAdd: (id, num) => {},
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
})

export function CartContextProvider(props) {
  const [cart, setCart] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 })
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addHandler = (id, num) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }
      newCart[id] += num
      return newCart
    })
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }

  return (
    <CartContext.Provider
      value={{ foodItems, cart, onAdd: addHandler, isModalVisible, showModal, hideModal }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
