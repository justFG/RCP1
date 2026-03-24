import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<>error 404</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App