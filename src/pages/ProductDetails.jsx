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
        description: "The ultimate pro laptop with stunning display and powerful performance.",
        image: macbookImg,
        price: 249900,
        features: [
            "Apple M3 Max chip",
            "36GB RAM",
            "1TB SSD",
            "Liquid Retina XDR display"
        ]
    },
    {
        id: 2,
        name: "Dell XPS 15",
        shortDescription: "Intel i9, 32GB RAM, RTX 4060",
        description: "Premium Windows laptop with powerful graphics.",
        image: dellImg,
        price: 219900,
        features: [
            "Intel i9",
            "32GB RAM",
            "RTX 4060",
            "OLED display"
        ]
    },
    {
        id: 3,
        name: "ASUS ROG Zephyrus G14",
        shortDescription: "Ryzen 9, 32GB RAM, RTX 4070",
        description: "Powerful gaming laptop.",
        image: asusImg,
        price: 189900,
        features: [
            "Ryzen 9",
            "32GB RAM",
            "RTX 4070"
        ]
    },
    {
        id: 4,
        name: "HP Spectre x360",
        shortDescription: "Intel i7, 16GB RAM",
        description: "Convertible laptop.",
        image: hpImg,
        price: 159900,
        features: [
            "Intel i7",
            "16GB RAM",
            "Touchscreen"
        ]
    },
    {
        id: 5,
        name: "Lenovo ThinkPad X1",
        shortDescription: "Intel i7, 16GB RAM",
        description: "Business laptop.",
        image: lenovoImg,
        price: 179900,
        features: [
            "Intel i7",
            "16GB RAM",
            "Lightweight"
        ]
    },
    {
        id: 6,
        name: "Microsoft Surface 5",
        shortDescription: "Intel i7, 16GB RAM",
        description: "Slim laptop.",
        image: microsoftImg,
        price: 149900,
        features: [
            "Intel i7",
            "16GB RAM",
            "Touchscreen"
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