import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import JobDetails from "../Components/JobDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ErrorPage from "../Pages/ErrorPage";
import MyBids from "../Pages/MyBids";
import UpdateJob from "../Pages/UpdateJobs";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'/addJobs',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/myPostedJobs',
          element:<MyPostedJobs></MyPostedJobs>
        },
        {
          path:'/bids',
          element:<MyBids></MyBids>
        },
        {
          path:'/jobDetails/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<UpdateJob></UpdateJob>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

export default router;  
  