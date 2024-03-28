import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./ApplicationBody/HomePage";
import AppLogo from "./Icons/AppLogo";
import Base from "./ApplicationBody/LoginPage/Base";
import Login from "./ApplicationBody/LoginPage/Login";
import CreateNewAccount from "./ApplicationBody/LoginPage/NewAccountPage";

const router = createBrowserRouter([
  { path: '/', element: <Base />, children: [{path: '', element: <Login />}, {path: 'create-account', element: <CreateNewAccount />}] },
  { path: '/home', element: <HomePage />}
]);

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-mono">
      <div className="p-4 w-3/4">
        <div className="flex justify-center items-center mb-8">
          <AppLogo customStyle={"clock-hand"}/>
          <h1 className="text-5xl font-bold text-blue-600">Your To-Do</h1>
        </div>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
};
