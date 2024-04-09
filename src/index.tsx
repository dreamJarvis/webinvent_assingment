import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from './Errors/PageNotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
]);

root.render(
  <Provider store={store} >
    <RouterProvider router={appRouter} />
  </Provider>
);
