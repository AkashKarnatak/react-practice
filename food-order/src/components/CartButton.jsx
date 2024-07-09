function CartButton() {
  const cartContext = useContext(CartContext)

  return (
    <div
      className='cursor-pointer rounded-full bg-orange-950 px-12 py-4 text-xl font-bold'
      onClick={cartContext.showModal}
    >
      <i className='fa-solid fa-cart-shopping'></i>
      <span className='ml-4'>Your Cart</span>
      <span className='ml-4 rounded-full bg-orange-700 px-5 py-2'>
        {Object.values(cartContext.cart).reduce((acc, x) => acc + x, 0)}
      </span>
    </div>
  )
}

