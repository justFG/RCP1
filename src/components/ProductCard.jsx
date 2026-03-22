import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/{product.id}da`);
  };

  return (
    <div className="w-80 bg-white rounded-2xl p-5 flex flex-col
                shadow-sm hover:shadow-md hover:scale-[1.018]
                transition-all duration-300 ease-out">

  {/* Image */}
  <div className="bg-gray-50 p-3 rounded-xl mb-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-44 h-44 mx-auto rounded-lg object-cover"
    />
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-900 mb-1">
    {product.name}
  </h3>

  {/* Specs */}
  <p className="text-sm text-gray-500 mb-3">
    {product.shortDescription}
  </p>

  {/* Price */}
  <p className="text-xl font-bold text-gray-900 mb-4">
    {product.price.toLocaleString()} da
  </p>

  {/* Button */}
  <button
    onClick={handleViewDetails}
    className="mt-auto bg-purple-600/90 text-white py-2.5 rounded-lg
               hover:bg-purple-700 transition-colors"
  >
    View Details
  </button>

</div>
  );
};

export default ProductCard;