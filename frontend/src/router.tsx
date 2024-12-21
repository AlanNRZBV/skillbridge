import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AboutUsPage from './pages/AboutUsPage.tsx';
import CoursesPage from './pages/CoursesPage.tsx';
import PricingPage from './pages/PricingPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import Course from './components/Course.tsx';
import axiosApi from './utils/axiosApi.ts';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          hydrateFallbackElement: <div>some shit are loading rn</div>,
          loader: async () => {
            try {
              const response = await axiosApi.get<IPricingPlan>('/plans');
              return response.data;
            } catch (e) {
              console.log('=>(router.tsx:29) e', e);
            }
          },
        },
        {
          path: '/sign-up',
          element: <SignUpPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/courses',
          element: <CoursesPage />,
        },
        {
          path: '/courses/:id',
          element: <Course />,
        },
        {
          path: '/about-us',
          element: <AboutUsPage />,
        },
        {
          path: '/pricing',
          element: <PricingPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />, // Render inside the outlet for unmatched routers
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
