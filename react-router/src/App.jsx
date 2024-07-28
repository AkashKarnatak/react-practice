import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import { RouterProvider } from 'react-router-dom'
import Root from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
])

const App = () => {
  return (
    <div className='min-h-svh bg-[#222] text-white'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
