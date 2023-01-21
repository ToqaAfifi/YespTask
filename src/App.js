import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ContactUsPage from './pages/ContactUsPage';
import ErrorPage from './pages/ErrorPage';
// import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import StoresPage from './pages/StoresPage';
import TrackOrderPage from './pages/TrackOrderPage';
import WishlistPage from './pages/WishlistPage';

const ProductPage = lazy(() => import('./pages/ProductPage'));

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to='/offers/4' /> },
      {
        path: ':categoryName',
        children: [
          { index: true, element: <ProductsPage /> },
          {
            path: ':productId',
            element: <Suspense fallback={<p>Loading...</p>}><ProductPage /></Suspense>,
            loader: (meta) => import('./services/util').then(module => module.loader(meta))
          }
        ]
      },
      { path: 'contact-us', element: <ContactUsPage /> },
      { path: 'track-order', element: <TrackOrderPage /> },
      { path: 'stores', element: <StoresPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
    ]
  },
  { path: 'login', element: <LoginPage /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
