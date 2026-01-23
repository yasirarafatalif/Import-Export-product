import React from 'react';
import { Facebook, Youtube, Twitter, Mail, ArrowRight, Globe, Ship } from 'lucide-react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Upper Footer: Branding & Newsletter */}
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo></Logo>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Simplifying global commerce through secure import and export solutions. Connecting markets, one deal at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-indigo-600 rounded-full transition-colors group">
                <Facebook size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-indigo-600 rounded-full transition-colors group">
                <Twitter size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-indigo-600 rounded-full transition-colors group">
                <Youtube size={18} className="group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Services</h6>
            <ul className="space-y-4 text-sm">
              <li><Link to="/all-products" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Marketplace</Link></li>
              <li><Link to="/my-exports" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Export Management</Link></li>
              <li><Link to="/my-import" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Import Tracking</Link></li>
              <li><Link to="/add-export" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Customs Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h6 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Company</h6>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">About Our Mission</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Trade Compliance</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Global Partners</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:ml-2 transition-all duration-300">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h6 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Stay Updated</h6>
            <p className="text-xs text-gray-400 italic">Get the latest trade insights and market trends.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="w-11/12 max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <p>© 2026 Yasir Arafat Alif. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <div className="flex items-center gap-1">
              <Globe size={14} />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;