import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home/Home";
import FeedBack from "./components/FeedBack/FeedBack";
import Details from "./components/Details/Details";
import RoadmapPage from "./components/Roadmap/RoadmapPage";
import Login from "./auth/Login";
import ProtectedRoute from "./auth/authComponents/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/add",
      element: (
        <ProtectedRoute>
          <FeedBack />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/details/:id",
      element: (
        <ProtectedRoute>
          <Details />
        </ProtectedRoute>
      ),
    },
    {
      path: "/roadmap",
      element: (
        <ProtectedRoute>
          <RoadmapPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default App;
