import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Root } from './routes/Root/Root'
import { ErrorPage404 } from "./routes/ErrorPage/ErrorPage"
import { HomePage } from "./routes/Home/HomePage"
import { PhotosPage } from "./routes/Photos/PhotosPage"
import { ReviewPage } from "./routes/Review/ReviewPage"
import { ContactPage } from "./routes/Сontact/ContactPage"

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      }, {
        path: '/photo',
        element: <PhotosPage />,
      }, {
        path: '/review',
        element: <ReviewPage />,
      },{
        path: '/contact',
        element: <ContactPage />,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App