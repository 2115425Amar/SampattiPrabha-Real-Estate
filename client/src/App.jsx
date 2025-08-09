import Hpages from "./pages/Hpages/Hpages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./pages/newPostPage/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";
import Contact from "./pages/Contact/Contact";
import BulkUploadForm from "./pages/BulkUploadForm/BulkUploadForm";
import EditPostPage from "./pages/EditPostPage/EditPostPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Hpages />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        // In a React application using react-router-dom, loaders are functions that run before rendering a route.
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        // Jab singlePageLoader se data mil jaata hai, tab SinglePage component ko render kiya jaata hai.
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/update",
          element: <UpdatePassword />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
        {
          path: "/bulk-upload",
          element: <BulkUploadForm />,
        },
        {
          path: "/edit/:id",
          element: <EditPostPage isEdit={true} />,
          loader: singlePageLoader, // preload data for edit
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
    // <>
    // <Routes>
    // <Route path="/" element={<Layout/>} />
    // </Routes>
    // </>
  );
}

export default App;

// test