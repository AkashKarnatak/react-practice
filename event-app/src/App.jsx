import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import NewEvent from './pages/NewEvent'
import EditEvent from './pages/EditEvent'
import Root from './components/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/events', element: <Events /> },
      { path: '/events/:id', element: <EventDetail /> },
      { path: '/events/new', element: <NewEvent /> },
      { path: '/events/:id/edit', element: <EditEvent /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
