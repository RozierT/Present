import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import "./index.css";
import Settings from './pages/SettingPage.jsx';
import Login from './pages/TestLoginPage.jsx';
import Signup from './pages/TestSignUp.jsx';
import NotificationPage from './pages/NotificationPage.jsx';
import MakeProfile from './pages/TestCreateProfile.jsx';
import HomePage from './pages/TestHomePage.jsx';
import FeedPage from './pages/FeedPage.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'signup/profile',
        element: <MakeProfile />
      },
      {
        path: 'feed',
        element: <FeedPage />,
      },
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
