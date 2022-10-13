import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';

function App() {
  const [cardIsEmpty] = useState(true);
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* the reason why we use `/about/asteric` is
           because we want the /about to match any other page
            especially nested to it
             i fwe dont use /asteric it will bring an empty page   */}
          <Route path='/about/*' element={<About />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/test'
            element={
              <div>
                <h2>Test </h2>
                <p>Hello!</p>
              </div>
            }
          />
          {/* in version 5 we use Redirect to direct the user 
          to another page but in v6 we use Navigate example below  */}
          <Route path='/redirect' element={<Navigate to='/about' />} />
          {/* use Navigate to do 2 conditions */}
          <Route
            path='/checkout'
            element={
              cardIsEmpty ? <Navigate to='/products' /> : <p>Check out</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
