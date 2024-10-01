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
import NewPostPage from "./pages/newPostPage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import Contact from "./pages/Contact/Contact";

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
          element:<ListPage/>,
          loader: listPageLoader,
        },
        // In a React application using react-router-dom, loaders are functions that run before rendering a route.
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        // Jab singlePageLoader se data mil jaata hai, tab SinglePage component ko render kiya jaata hai.
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
          // loader: profilePageLoader,
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        }
      ]
    }
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App


// test