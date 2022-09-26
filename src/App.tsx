import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './assets/scss/app.scss';
import MainLayout from './components/Layout/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: 'NotFount' */ './pages/NotFound'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: 'FullPizza' */ './pages/FullPizza'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route
          path='cart'
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='pizza/:id'
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <FullPizza />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='*'
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
