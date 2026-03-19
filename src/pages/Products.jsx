import ProductCard from '../components/ProductCard.jsx';
import './Products.css';
import macbookImg from '../images/macbook.jpg';
import dellImg from '../images/dell.jpg';
import asusImg from '../images/asusrog.jpg';
import hpImg from '../images/hpspectre.jpg';
import lenovoImg from '../images/lenovocarbon.jpg';  
import microsoftImg from '../images/microsoft.jpg';  

const products = [
  {
    id: 1,
    name: "MacBook Pro 16",
    shortDescription: "Apple M3 chip, 36GB RAM, 1TB SSD",
    image: macbookImg,
    price: 249900
  },
  {
    id: 2,
    name: "Dell XPS 15",
    shortDescription: "Intel i9, 32GB RAM, 1TB SSD, RTX 4060",
    image: dellImg,
    price: 219900
  },
  {
    id: 3,
    name: "ASUS ROG Zephyrus G14",
    shortDescription: "AMD Ryzen 9, 32GB RAM, 1TB SSD, RTX 4070",
    image: asusImg,
    price: 189900
  },
  {
    id: 4,
    name: "HP Spectre x360",
    shortDescription: "Intel i7, 16GB RAM, 1TB SSD, 2-in-1",
    image: hpImg,
    price: 159900
  },
  {
    id: 5,
    name: "Lenovo ThinkPad X1 Carbon",
    shortDescription: "Intel i7, 16GB RAM, 512GB SSD",
    image: lenovoImg,  
    price: 179900
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    shortDescription: "Intel i7, 16GB RAM, 512GB SSD",
    image: microsoftImg,  
    price: 149900
  }
];

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">Our Laptops Collection</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;