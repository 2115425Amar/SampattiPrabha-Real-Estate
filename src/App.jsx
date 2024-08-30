import Hpages from "./pages/Hpages/Hpages"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Hpages/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App