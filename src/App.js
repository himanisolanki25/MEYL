import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    {/* Body and Footer */}
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// RouterProvider to provide the configurations to the app
root.render(<RouterProvider router={appRouter}/>)