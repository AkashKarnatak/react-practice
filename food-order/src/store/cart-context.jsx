import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext({
  foodItems: [],
  updateFoodItems: (items) => {},
  cart: {},
  onAdd: (id, num) => {},
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
})

export function CartContextProvider(props) {
  const [foodItems, setFoodItems] = useState([])
  const [cart, setCart] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  const updateFoodItems = (items) => {
    setFoodItems(items)
  }

  const addHandler = (id, num) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }
      newCart[id] = (newCart[id] || 0) + num
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
      value={{
        foodItems,
        updateFoodItems,
        cart,
        onAdd: addHandler,
        isModalVisible,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
