import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage'
import Products from './pages/Products'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App