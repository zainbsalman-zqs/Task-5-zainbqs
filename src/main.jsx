import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './Pages/Auth.js';
import SignUp from './Pages/SingUp.js';
import SignIn from './Pages/SignIn.js';
import Dashe from './Pages/Dashe.js';
import Items from './Pages/Items.js';
import ItemsIndex from './Pages/ItemsIndex.js';
import AddItems from './Pages/AddItems.js';
import EditItem from './Pages/EditItem.js';
import Show from './Pages/Show.js';



const routers = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
    children: [
      {
        path: "",
        element: <SignIn/>
      },
      {
        path: "/singup",
        element: <SignUp/>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashe/>,
    children:[
      {
path:"items",
element:<Items/>,
children:[{
  path:"",
  element:<ItemsIndex/>
},
{
  path:"show/:id",
  element:<Show/>
},
{
  path:"add",
  element:<AddItems/>
},
{
  path:"edit/:id",
  element:<EditItem/>
},]
    }]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);

