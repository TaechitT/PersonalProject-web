import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from "../pages/Header";
import { useAuth } from "../context/AuthContext";
import Homepage from "../pages/Homepage";
import Footer from "../pages/Footer";
import Trend from "../pages/Trend";
import Column from "../pages/Column";
import About from "../pages/About";
import Favorite from "../pages/Favorite";
import AdminPage from "../pages/Admin";
import CardColumn from "../pages/Card";

export default function Router() {
  const { user } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: user ? (
            <>
              <Homepage />
              <Trend />,
            </>
          ) : (
            <>
              {" "}
              <Homepage />
            </>
          ),
        },
        {
          path: "/column",
          element: user ? (
            <>
              <Column />
            </>
          ) : (
            <>
              <Homepage />
            </>
          ),
          children: [],
        },
        {
          path: "/about",
          element: (
            <>
              <About />
            </>
          ),
        },
        {
          path: "/favorite",
          element: (
            <>
              <Favorite />
            </>
          ),
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
        {
          path: "/column/:id",
          element: (
            <>
              <CardColumn />
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
