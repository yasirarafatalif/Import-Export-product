import { Star, MapPin, Package, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Card = ({
  title = "Premium Product",
  description = "Experience the best quality features.",
  buttonText = "View Details",
  link = "/all-products",
  image = "https://picsum.photos/400/300",
  rating = "4.8",
  price = "120",
  quantity = "15",
  country = "Bangladesh",
}) => {
  return (
    <div className="group relative flex flex-col rounded-[2rem] bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)]">
      
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden rounded-[1.5rem]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 backdrop-blur-md">
            New
          </span>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 rounded-xl bg-gray-900/80 px-3 py-1.5 text-sm font-bold text-white backdrop-blur-md">
          ${price}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4 pt-5">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-indigo-600">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 rounded-lg bg-yellow-50 px-2 py-1 text-yellow-700">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold">{rating}</span>
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        {/* Specs Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4 border-y border-gray-100 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Package size={16} className="text-indigo-500" />
            <span className="text-xs font-medium">{quantity} in stock</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-indigo-500" />
            <span className="text-xs font-medium">{country}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to={link} className="block">
          <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]">
            {buttonText}
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;