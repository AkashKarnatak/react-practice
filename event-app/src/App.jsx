import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import NewEvent from './pages/NewEvent'
import EditEvent from './pages/EditEvent'
import Root from './components/Root'
import EventsRoot from './components/EventsRoot'
import Error from './pages/Error'
import NewsLetter from './pages/NewsLetter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'newsletter', element: <NewsLetter />, action: NewsLetter.action },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: Events.loader },
          { path: 'new', element: <NewEvent />, action: NewEvent.action },
          {
            path: ':id',
            id: 'event-loader',
            loader: EventDetail.loader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: EventDetail.action,
              },
              {
                path: 'edit',
                element: <EditEvent />,
                action: EditEvent.action,
              },
            ],
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
