import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Error404 from "./Pages/Error404";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EachCard from "./EachCard";
import PrivateRoute from "./Pages/PrivateRoute";
import Booking from "./Pages/Booking";
import Faq from "./Pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error404></Error404>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/api.json')
      },

      {
        path:"/login",
        element:<Login></Login>
      },

      {
        path:"/register",
        element:<Register></Register>
      },

      {
        path:"/booking",
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      },

      {
        path:"/faqs",
        element:<PrivateRoute><Faq></Faq></PrivateRoute>
      },

      {
        path:"/dataForCards/:id",
        element:<PrivateRoute><EachCard></EachCard></PrivateRoute>,
        loader:()=>fetch('/api.json')
      }
    ]
  },
]);

export default router;