import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import PickUpButton from "../Button/PickUpButton/PickUpButton";

const AllProductCard = ({ SingleData }) => {
  const { image_link, name, price, origin_country, rating, stock, _id } = SingleData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        max-w-[270px]
        rounded-2xl
        shadow-md hover:shadow-xl
        border
        overflow-hidden
        transition-all duration-300
        mx-auto my-4 cursor-pointer

        bg-[#fafaee] text-gray-800 border-gray-100
        dark:bg-[#272730] dark:text-black dark:border-gray-700
      "
    >
      {/* Image Section */}
      <div className="relative w-70 h-64 overflow-hidden">
        <img
          src={image_link}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110 blur-[2px]" : "scale-100"
          }`}
        />

        {/* Hover Overlay */}
        {isHovered && (
          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center gap-2
              transition-all duration-500

              bg-white/40 backdrop-blur-sm
              dark:bg-black/50
            "
          >
            <Link to={`/all-product/${_id}`}>
              <PickUpButton label="See Details" />
            </Link>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-semibold text-lg truncate">
            {name}
          </h2>
          <span className="font-medium text-sm">
            ${price}
          </span>
        </div>

        <p className="text-sm text-gray-500 dark:text-yellow-500 mb-1">
          Origin: {origin_country}
        </p>

        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
          <span>⭐ {rating}</span>
          <span>Stock: {stock}</span>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
