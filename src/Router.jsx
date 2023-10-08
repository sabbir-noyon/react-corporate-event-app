import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Error404 from "./Pages/Error404";
import Home from "./Components/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error404></Error404>,

      children:[
        {
          path:"/",
          element:<Home></Home>
        }

        
      ]
    },
  ]);

  export default router;