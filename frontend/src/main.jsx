import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import About from './components/About.jsx';
import Admin from './Components/Admin.jsx';
import Apply from './Components/Apply.jsx';
import Blog from './Components/Blog.jsx';
import Chatbot from './Components/Chatbot.jsx';
import Contact from './Components/Contact.jsx';
import Donation from './Components/Donation.jsx';
import Employee from './Components/Employee.jsx';
import Home from './components/home.jsx';
import Login from './components/Login.jsx';
import Error from './Components/Error.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/admin', element: <Admin /> },
      { path: '/apply', element: <Apply /> },
      { path: '/blog', element: <Blog /> },
      { path: '/chatbot', element: <Chatbot /> },
      { path: '/contact', element: <Contact /> },
      { path: '/donation', element: <Donation /> },
      { path: '/employee', element: <Employee /> },
      { path: '/login', element: <Login /> },
    ]
  }
])

createRoot(root).render(
  <RouterProvider router={router} />
);

