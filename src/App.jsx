import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage'
import Products from './pages/Products'
import AboutPage from './pages/Aboutpage';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
         <Route path="/about" element={<AboutPage />} />  
        <Route path="*" element={<>error 404</>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App