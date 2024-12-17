import {createBrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
      },
    },
);

export default router;
