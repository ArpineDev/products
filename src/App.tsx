import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './view/components/root';
import { ProductPage } from './view/components/product-page';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/products/:productId',
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
