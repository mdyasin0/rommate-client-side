import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "./Home";
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
import PrivateRoute from "./Privetroute";

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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/FindRoommateForm",
        element: (
          <PrivateRoute>
            <FindRoommateForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/BrowseListings",
        Component: BrowseListings,
      },
      {
        path: "/MyListings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/Signup",
        Component: Signup,
      },
      {
        path: "/Terms",
        Component: Terms,
      },

      {
        path: "/Privacy",
        Component: Privacy,
      },
      {
        path: "/Refund",
        Component: Refund,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
