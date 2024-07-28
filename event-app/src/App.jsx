import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import NewEvent from './pages/NewEvent'
import EditEvent from './pages/EditEvent'
import Root from './components/Root'
import EventsRoot from './components/EventsRoot'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: Events.loader },
          { path: ':id', element: <EventDetail />, loader: EventDetail.loader },
          { path: 'new', element: <NewEvent /> },
          { path: ':id/edit', element: <EditEvent /> },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
