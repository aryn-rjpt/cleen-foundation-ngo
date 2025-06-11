// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';

import Admin from './components/Admin.jsx';
import Apply from './Components/Apply.jsx';
import Blog from './components/Blog.jsx';
import Chatbot from './components/Chatbot.jsx';
import Contact from './components/Contact.jsx';
import Donation from './components/Donation.jsx';
import Employee from './components/Employee.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Error from './components/Error.jsx';

// ✅ AboutLayout with subroutes
import AboutLayout from './Components/AboutLayout.jsx';
import Overview from './Components/About/Introduction.jsx';
import Journey from './Components/About/Journey.jsx';
import Founder from './Components/About/Founder.jsx';
import Team from './Components/About/Team.jsx';
import Gallery from './Components/About/Gallery.jsx';
import Partners from './Components/About/Partners.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: 'home', element: <Home /> },
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <Overview /> },
          { path: 'journey', element: <Journey /> },
          { path: 'founder', element: <Founder /> },
          { path: 'team', element: <Team /> },
          { path: 'gallery', element: <Gallery /> },
          { path: 'partners', element: <Partners /> }
        ]
      },
      { path: 'admin', element: <Admin /> },
      { path: 'apply', element: <Apply /> },
      { path: 'blog', element: <Blog /> },
      { path: 'chatbot', element: <Chatbot /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donation', element: <Donation /> },
      { path: 'employee', element: <Employee /> },
      { path: 'login', element: <Login /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
