import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import Home from "./Home";
import { Component } from "react";
import Details from "./Details";
import Error from "./Error";



const router = createBrowserRouter([
  {
    path: "/",
    Component: App ,
    children:[
        { index: true, Component: Home },
        {
           path:"/home",
           Component:Home, 
        },
      {
        path:"/Details/:id",
        Component: Details,
      }
    ]
  },
  {
    path:"*",
    Component:Error,
  }
]);


export default router