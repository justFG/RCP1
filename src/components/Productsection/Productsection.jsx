import ProductCard from "../ProductCard.jsx";
import "../../pages/Products.css";
import macbookImg from "../../images/macbook.jpg";
import dellImg from "../../images/dell.jpg";
import asusImg from "../../images/asusrog.jpg";
import hpImg from "../../images/hpspectre.jpg";
import lenovoImg from "../../images/lenovocarbon.jpg";
import microsoftImg from "../../images/microsoft.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "MacBook Pro 16",
    shortDescription: "Apple M3 chip, 36GB RAM, 1TB SSD",
    image: macbookImg,
    price: 249900,
  },
  {
    id: 2,
    name: "Dell XPS 15",
    shortDescription: "Intel i9, 32GB RAM, 1TB SSD, RTX 4060",
    image: dellImg,
    price: 219900,
  },
  {
    id: 3,
    name: "ASUS ROG Zephyrus G14",
    shortDescription: "AMD Ryzen 9, 32GB RAM, 1TB SSD, RTX 4070",
    image: asusImg,
    price: 189900,
  },
  {
    id: 4,
    name: "HP Spectre x360",
    shortDescription: "Intel i7, 16GB RAM, 1TB SSD, 2-in-1",
    image: hpImg,
    price: 159900,
  },
  {
    id: 5,
    name: "Lenovo ThinkPad X1 Carbon",
    shortDescription: "Intel i7, 16GB RAM, 512GB SSD",
    image: lenovoImg,
    price: 179900,
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    shortDescription: "Intel i7, 16GB RAM, 512GB SSD",
    image: microsoftImg,
    price: 149900,
  },
];

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative bg-linear-to-tr from-[#081637] via-[#081637] to-[#C70431] h-screen pt-5">
        <h1 className="products-title">Our Products</h1>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="products-grid">
          {products.map(
            (product, index) =>
              index < 3 && <ProductCard key={product.id} product={product} />,
          )}
        </div>

        <div
          className="absolute cursor-pointer select-none left-1/2 -translate-x-1/2 md: mt-15 w-fit text-[#081637] font-[The_Blast] text-xl bg-[#19CEE4] px-10 py-5 transition duration-300 ease-in-out hover:bg-[rgb(7,149,168)]"
          onClick={() => navigate("/products")}
        >
          View products
        </div>
      </div>
    </>
  );
};

export default Products;
