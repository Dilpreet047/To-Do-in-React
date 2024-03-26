import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./ApplicationBody/LoginPage/Login";
import HomePage from "./ApplicationBody/HomePage";

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/home', element: <HomePage />}
]);

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-mono">
      <RouterProvider router={router}/>
    </div>
  )
};
