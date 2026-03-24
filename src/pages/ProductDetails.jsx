import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.css";
import macbookImg from '../images/macbook.jpg';
import dellImg from '../images/dell.jpg';
import asusImg from '../images/asusrog.jpg';
import hpImg from '../images/hpspectre.jpg';
import lenovoImg from '../images/lenovocarbon.jpg';
import microsoftImg from '../images/microsoft.jpg';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);


    const products = [
        {
            id: 1,
            name: "MacBook Pro 16",
            price: 249900,
            image: macbookImg,
            description: "The ultimate pro laptop with stunning Liquid Retina XDR display, 22-hour battery life, and powerful performance for creative professionals. Features the latest Apple M3 chip for blazing-fast performance.",
            features: [
                "Apple M3 Max chip with 16-core CPU",
                "36GB unified memory",
                "1TB SSD storage",
                "16-inch Liquid Retina XDR display",
                "22-hour battery life",
                "Three Thunderbolt 4 ports"
            ]
        },
        {
            id: 2,
            name: "Dell XPS 15",
            price: 219900,
            image: dellImg,
            description: "Premium Windows laptop with InfinityEdge display, powerful graphics, and exceptional build quality for professionals and creators.",
            features: [
                "Intel Core i9-13900H processor",
                "32GB DDR5 RAM",
                "1TB NVMe SSD",
                "NVIDIA RTX 4060 8GB",
                "15.6-inch OLED 3.5K display",
                "Thunderbolt 4 ports"

            ]
        },
        {
            id: 3,
            name: "ASUS ROG Zephyrus G14",
            price: 189900,
            image: asusImg,
            description: "Compact gaming laptop with powerful performance, 165Hz display, and excellent cooling for gamers who need portability without compromise",
            features: [
                "AMD Ryzen 9 7940HS",
                "32GB DDR5 RAM",
                "1TB PCIe 4.0 SSD",
                "NVIDIA RTX 4070 8GB",
                "14-inch QHD 165Hz display",
                "AniMe Matrix display on lid"
            ]
        },
        {
            id: 4,
            name: "HP Spectre x360",
            price: 159900,
            image: hpImg,
            description: "Versatile convertible laptop with stunning OLED display, long battery life, and premium design for creative work and entertainment.",
            features: [
                "Intel Core i7-1355U",
                "16GB LPDDR5 RAM",
                "1TB PCIe SSD",
                "13.5-inch OLED touchscreen",
                "360-degree hinge design",
                "Bang & Olufsen speakers"
            ]
        },
        {
            id: 5,
            name: "Lenovo ThinkPad X1 Carbon",
            price: 179900,
            image: lenovoImg,
            description: "Business-class ultrabook with legendary keyboard, lightweight design, and enterprise-level security features for professionals on the go.",
            features: [
                "Intel Core i7-1365U vPro",
                "16GB LPDDR5 RAM",
                "512GB PCIe SSD",
                "14-inch 2.8K OLED display",
                "2.48 lbs ultra-lightweight",
                "Military-grade durability"
            ]
        },
        {
            id: 6,
            name: "Microsoft Surface Laptop 5",
            price: 149900,
            image: microsoftImg,
            description: "Sleek and lightweight laptop with touchscreen display, excellent build quality, and seamless Windows integration for everyday productivity",
            features: [
                "Intel Core i7-1255U",
                "16GB LPDDR5X RAM",
                "512GB removable SSD",
                "13.5-inch PixelSense touchscreen",
                "Aluminum body",
                "Thunderbolt 4 port"
            ]
        }
    ];

    const product = products.find(p => p.id === parseInt(id));

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
        alert(`${product.name} added to cart!`);
    };

    if (!product) return <div className="main-bg"><h2 className="not-found">Product Not Found</h2></div>;

    return (
        <div className="details-page main-bg">
            <div className="container">
                <button className="back-btn-modern" onClick={() => navigate('/products')}>
                    ← BACK TO PRODUCTS
                </button>

                <div className="details-card-modern">
                    <div className="details-image-section">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="details-info-section">
                        <h1 className="header-font main-title">{product.name}</h1>
                        <p className="price-tag">{product.price.toLocaleString()} DA</p>

                        <div className="divider"></div>

                        <p className="desc-font secondary-text">{product.description}</p>

                        <div className="features-box">
                            <h3 className="sub-header-font">TECHNICAL SPECS</h3>
                            <ul>
                                {product.features.map((f, i) => <li key={i} className="desc-font">• {f}</li>)}
                            </ul>
                        </div>

                        <button className={`main-btn-cyan ${added ? 'btn-success' : ''}`} onClick={handleAddToCart}>
                            {added ? "✓ ADDED" : "ADD TO CART"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;