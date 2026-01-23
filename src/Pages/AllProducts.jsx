import React, { useState, useMemo } from 'react';
import Input from '../Components/Scarch/Input';
import Card from '../Components/DesginCard/Card';
import { SearchX } from 'lucide-react';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import CardSkeleton from '../Components/Skeleton/CardSkeleton';

const AllProducts = () => {
  const axiosSecure = useAxios();

  const { data: allCradData = [], isLoading: allCardLoading } = useQuery({
    queryKey: ['allCradData'],
    queryFn: async () => {
      const res = await axiosSecure.get('/all-products');
      return res.data;
    },
  });

  const [searchText, setSearchText] = useState('');

  const filteredProducts = useMemo(() => {
    return allCradData.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [allCradData, searchText]);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header (Always Visible) */}
      <div className="sticky top-10 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="w-11/12 mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Discovery Catalog
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {allCardLoading
                  ? 'Loading premium items...'
                  : `Showing ${filteredProducts.length} premium items`}
              </p>
            </div>

            <div className="w-full md:w-96">
              <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search products..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-11/12 mx-auto py-10">

        {/* Skeleton */}
        {allCardLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <Card
                key={item._id}
                price={item.price}
                quantity={item.stock}
                country={item.origin_country}
                rating={item.rating}
                title={item.name}
                description={item.description}
                buttonText="See Details"
                link={`/all-product/${item._id}`}
                image={item.image_link}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <SearchX size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              No products found
            </h3>
            <p className="text-gray-500 max-w-xs mx-auto mt-2">
              We couldn't find anything matching "{searchText}"
            </p>
            <button
              onClick={() => setSearchText('')}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
