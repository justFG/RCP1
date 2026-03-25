import { useNavigate } from "react-router-dom";
import { memo, useMemo } from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const formattedPrice = useMemo(
    () => product.price.toLocaleString(),
    [product.price]
  );
  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="w-full max-w-[380px] rounded-2xl p-6 flex flex-col
                 border border-white/5
                 bg-gradient-to-br from-[#081637] to-[#C70431]
                 shadow-lg hover:shadow-xl
                 hover:scale-[1.02]
                 transition-transform duration-200"
    >
      {/* Image */}
      <div className="bg-white/5 rounded-xl p-3 mb-3 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-36 h-36 object-cover rounded-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold uppercase tracking-wide mb-1">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-white/60 text-sm mb-2 line-clamp-2">
        {product.shortDescription}
      </p>

      {/* Divider */}
      <div className="h-px mb-3 bg-gradient-to-r from-[#C70431] to-transparent opacity-60" />

      {/* Price */}
      <p className="text-white text-xl font-extrabold mb-4">
        {formattedPrice}
        <span className="text-sm font-normal opacity-70 ml-1">DA</span>
      </p>

      {/* Button */}
      <button
        onClick={handleViewDetails}
        className="mt-auto cursor-pointer bg-purple-600/90 text-white py-2.5 rounded-lg
               hover:bg-purple-700 transition-colors"
      >
        View Details
      </button>
    </div>
  );
};

export default memo(ProductCard);