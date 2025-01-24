import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import JobDetails from "../Components/JobDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/jobDetails/:id',
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

export default router;  
  