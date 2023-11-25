import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import "./index.css";
import Settings from './pages/SettingPage.jsx';
import Login from './pages/TestLoginPage.jsx';
import Signup from './pages/TestSignUp.jsx';
import NotificationPage from './pages/NotificationPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProfilePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      // {
      //   path: 'feed',
      //   element: <Feed />,
      // },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'notifications',
        element: <NotificationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
