import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

// LAZY LOADING - instead of import use the below line

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    // kayde se yaha api call hogi and we will get an api response and in that api we will get the username
    const data = {
      name: "Himani Solanki",
    };
    setUserName(data.name);
  }, []);
  // We can use use Multiple UserContext.Provider. It does not take its productiveness
  return (
    // Provider - provide our store to react application => bridge between react and redux
    <Provider store={appStore}>
      {/* // We will pass setUserName as well in the value because we want to change
      the user when we are typing. */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* Body and Footer */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        // Will get an error if <Grocery/> not wrapped inside Suspense. When clicking on Grocery
        // it takes some time to load. React tries to load it but the data is still not there.
        // Hence an error occurs and Suspense saves us from it.
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// RouterProvider to provide the configurations to the app
root.render(<RouterProvider router={appRouter} />);
