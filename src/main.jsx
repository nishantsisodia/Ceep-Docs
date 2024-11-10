import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import CreateDocs from './assets/pages/CreateDocs.jsx';
import Alldata from './assets/context/Alldata.jsx';
import ReadPage from './assets/pages/ReadPage.jsx';

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateDocs />,
  },
  {
    path: "/read",
    element: <ReadPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Alldata>  {/* Wrap everything inside Alldata */}
      <RouterProvider router={router} />
    </Alldata>
  </StrictMode>
);
