import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SignupSignIn from './components/SignUpIn/SignupSignIn';
import { AuthProvider } from './context/context';
import PremiumContent from './pages/PremiumContentPage/PremiumContent';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Thanks from './components/Thanks/Thanks';

function App() {


  return (
  <ShoppingCartProvider>
    <AuthProvider>
      <Routes>
          <Route path='/' element={<LandingPage />}>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/products' element={<ProductsPage />}/>
            <Route path='/auth' element={<SignupSignIn />}/>
            <Route path='/premium' element={<PremiumContent />}/>
            <Route path='/thanks' element={<Thanks />}/>
          </Route>
      </Routes>
    </AuthProvider>
  </ShoppingCartProvider>

  );
}

export default App;
