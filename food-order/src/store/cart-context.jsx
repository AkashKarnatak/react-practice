import React from 'react'
import { useState, useCallback } from 'react'

export const CartContext = React.createContext({
  foodItems: [],
  updateFoodItems: (items) => {},
  cart: {},
  onAdd: (id, num) => {},
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
  clearCart: () => {},
})

export function CartContextProvider(props) {
  const [foodItems, setFoodItems] = useState([])
  const [cart, setCart] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  const updateFoodItems = useCallback((items) => {
    setFoodItems(items)
  }, [])

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

  const clearCart = () => {
    setCart({})
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
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
