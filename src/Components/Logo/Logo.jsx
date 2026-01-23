import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link to="/" className="flex items-center gap-2 pr-6 border-r border-gray-100 dark:border-white/10 h-10">
            <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-black font-black text-lg italic">T</span>
            </div>
            <span className="font-bold tracking-tighter text-xl text-black dark:text-white uppercase">
              Trade<span className="font-light text-gray-400">Hub</span>
            </span>
          </Link>
            
        </div>
    );
};

export default Logo;