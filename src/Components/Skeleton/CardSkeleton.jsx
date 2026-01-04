import React from "react";

const CardSkeleton = () => {
  return (
    <div className="relative flex flex-col rounded-[2rem] bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-pulse">
      
      {/* Image Skeleton */}
      <div className="relative h-56 w-full overflow-hidden rounded-[1.5rem] bg-gray-200">
        {/* Floating Badge Skeleton */}
        <div className="absolute top-3 left-3 h-6 w-12 rounded-full bg-gray-300"></div>
        
        {/* Price Tag Skeleton */}
        <div className="absolute bottom-3 right-3 h-8 w-16 rounded-xl bg-gray-300/80"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4 pt-5">
        <div className="mb-3 flex items-center justify-between">
          {/* Title Skeleton */}
          <div className="h-6 w-2/3 rounded-lg bg-gray-200"></div>
          {/* Rating Skeleton */}
          <div className="h-6 w-12 rounded-lg bg-gray-200"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full rounded bg-gray-100"></div>
          <div className="h-3 w-5/6 rounded bg-gray-100"></div>
        </div>

        {/* Specs Grid Skeleton */}
        <div className="mb-6 grid grid-cols-2 gap-4 border-y border-gray-100 py-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gray-200"></div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gray-200"></div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="h-11 w-full rounded-xl bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;