import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage.jsx';
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
import NewImagePage from './pages/ImageUpload.jsx';
import CreatePost from './pages/CreatePost.jsx';




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
        path: 'camera',
        element: <NewImagePage />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'notifications',
        element: <NotificationPage />,
      },
      {
        path: 'explore',
        element: <ExplorePage />,
      },
      {
        path: 'createpost',
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
