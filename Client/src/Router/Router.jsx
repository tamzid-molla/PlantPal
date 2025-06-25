import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";
import AllPlants from "../Pages/AllPlants";
import ViewDetails from "../Pages/ViewDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../Pages/Update";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allPlants",
        Component: AllPlants,
      },
      {
        path: "/addPlants",
        element: (
          <PrivateRoute>
            <AddPlants></AddPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPlants",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/plants/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-bice-tau.vercel.app/plants/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-bice-tau.vercel.app/plants/${params.id}`
          ),
        Component: Update,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
