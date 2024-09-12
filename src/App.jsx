import Hpages from "./pages/Hpages/Hpages"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import  {Layout, RequireAuth } from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";

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
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        }
      ]
    }
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App