import { useParams } from "react-router-dom";
import "./ProductDetails.css";
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
        description: "The ultimate pro laptop with stunning Liquid Retina XDR display, 22-hour battery life, and powerful performance for creative professionals. Features the latest Apple M3 chip for blazing-fast performance",
        image: macbookImg,
        price: 249900,
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
        shortDescription: "Intel i9, 32GB RAM, RTX 4060",
        description: "Premium Windows laptop with InfinityEdge display, powerful graphics, and exceptional build quality for professionals and creators.",
        image: dellImg,
        price: 219900,
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
        shortDescription: "Ryzen 9, 32GB RAM, RTX 4070",
        description: "Business-class ultrabook with legendary keyboard, lightweight design, and enterprise-level security features for professionals on the go.",
        image: asusImg,
        price: 189900,
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
        id: 4,
        name: "HP Spectre x360",
        shortDescription: "Intel i7, 16GB RAM",
        description: "Compact gaming laptop with powerful performance, 165Hz display, and excellent cooling for gamers who need portability without compromise.",
        image: hpImg,
        price: 159900,
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
        id: 5,
        name: "Lenovo ThinkPad X1",
        shortDescription: "Intel i7, 16GB RAM",
        description: "Versatile convertible laptop with stunning OLED display, long battery life, and premium design for creative work and entertainment.",
        image: lenovoImg,
        price: 179900,
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
        id: 6,
        name: "Microsoft Surface 5",
        shortDescription: "Intel i7, 16GB RAM",
        description: "Sleek and lightweight laptop with touchscreen display, excellent build quality, and seamless Windows integration for everyday productivity",
        image: microsoftImg,
        price: 149900,
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

function ProductDetails() {
    const { id } = useParams();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="details-page">
            <div className="details-card">

                <div className="details-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="details-info">
                    <h1>{product.name}</h1>

                    <p className="price">{product.price} DA</p>

                    <p className="desc">{product.description}</p>

                    <h3>Features:</h3>
                    <ul>
                        {product.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;