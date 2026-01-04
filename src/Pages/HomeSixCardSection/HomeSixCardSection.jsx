import React from 'react';
import Card from '../../Components/DesginCard/Card';
import Input from '../../Components/Scarch/Input';
import CardSkeleton from '../../Components/Skeleton/CardSkeleton';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const HomeSixCardSection = ({ homeData, isLoading }) => {
  return (
    <section className="relative bg-[#f8fafc] py-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative w-11/12 mx-auto">
        
        {/* Header Section: The Control Hub */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-indigo-600"></span>
              <span className="text-indigo-600 font-semibold tracking-widest uppercase text-xs">Premium Selection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Curated items for your <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Modern Lifestyle
              </span>
            </h2>
          </div>

          <div className="w-full lg:w-auto min-w-[300px] md:min-w-[450px]">
            <div className="bg-white p-2 rounded-2xl shadow-2xl shadow-indigo-100/50 border border-indigo-50/50 backdrop-blur-sm">
              <Input placeholder="Search for unique products..." />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : homeData.map((data, index) => (
                <div
                  key={data._id}
                  className="group relative"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards' 
                  }}
                >
                  {/* Subtle card glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  
                  <div className="relative bg-white rounded-[2rem]">
                    <Card
                      price={data.price}
                      quantity={data.stock}
                      country={data.origin_country}
                      rating={data.rating}
                      title={data.name}
                      description={data.description}
                      buttonText="See Details"
                      link={`/product/${data._id}`}
                      image={data.image_link}
                    />
                  </div>
                </div>
              ))}
        </div>

        {/* View All Action */}
        <div className="mt-16 text-center">
            <Link to="/all-products" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-all hover:gap-4 active:scale-95 shadow-xl shadow-slate-200">
                Explore Full Collection
                <ArrowRight size={20} />
            </Link>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HomeSixCardSection;