import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "./Home";
import { Component } from "react";
import Details from "./Details";
import Error from "./Error";
import Login from "./Login";
import Signup from "./Signup";
import FindRoommateForm from "./FindRoommate";
import BrowseListings from "./BrowseListings";
import MyListings from "./MyListings";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Refund from "./Refund";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/Details/:id",
        Component: Details,
      },
      {
        
         path: "/FindRoommateForm",
        Component: FindRoommateForm,
      },
      {
            path: "/BrowseListings",
        Component: BrowseListings,

      },
      {
            path: "/MyListings",
        Component: MyListings,

      },
      {
        path:"/login",
        Component: Login ,
      },
      {
        path:"/Signup",
        Component: Signup ,
      },
      {
        path:"/Terms",
        Component: Terms,
      },
      {
        path:"/Privacy",
        Component: Privacy ,
      },
      {
        path:"/Refund",
        Component: Refund ,
      }
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
