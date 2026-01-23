import React, { useContext } from 'react';
import { LayoutDashboard, PackagePlus, Ship, History, Settings, LogOut, Bell, UserCircle } from 'lucide-react';
import Logo from '../../../Components/Logo/Logo';
import { AuthContext } from '../../../Context/AuthContext';
import { Link } from 'react-router';

const DashboardLayOut = ({ children }) => {
     const { user, singOut } = useContext(AuthContext)
    // Menu items array for easy scalability
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Overview", active: true },
        { icon: <Ship size={20} />, label: "Import Products" },
        { icon: <PackagePlus size={20} />, label: "Export/Sell" },
        { icon: <History size={20} />, label: "Trade History" },
        { icon: <Settings size={20} />, label: "Settings" },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-slate-700 flex items-center gap-2">
                    <Logo></Logo>
                </div>
                
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                item.active ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-gray-400'
                            }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <button className="flex items-center gap-3 p-3 w-full hover:bg-red-600/10 text-red-400 rounded-lg transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
                    <h2 className="text-xl font-semibold text-gray-800">Welcome Back, User!</h2>
                    
                    <div className="flex items-center gap-6 text-gray-500">
                        
                        
                        {/* <div className="flex items-center gap-2 cursor-pointer border-l pl-6">
                            <UserCircle size={28} />
                            <span className="text-sm font-medium text-gray-700">John Doe</span>
                        </div> */}




                             {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="group flex items-center gap-3 pl-2"
              >
                <div className="w-10 h-10   p-0.5">
                  <img
                    className="w-full h-full rounded-full "
                    src={
                      user.photoURL ||
                      "https://api.dicebear.com/7.x/initials/svg?seed=User"
                    }
                    alt="User"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 z-[1] menu p-2 shadow-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 w-52 rounded-none"
              >
                <li className="p-3 text-[10px] font-bold text-white uppercase tracking-widest">
                  <Link
                    to="/dashboard"
                    className="rounded-none text-xs font-bold uppercase"
                  >
                    Dashboard
                  </Link>
                  
                </li>
                <li className="text-white ">
                  <Link
                    to="/my-profile"
                    className="rounded-none text-xs font-bold uppercase"
                  >
                    My Account
                  </Link>
                </li>
                <li className="text-white ">
                  <Link
                    to="/settings"
                    className="rounded-none text-xs font-bold uppercase"
                  >
                    Activity Log
                  </Link>
                </li>
                <li className="mt-2 border-t border-gray-100 ">
                  <button
                    onClick={() => singOut()}
                    className="rounded-none text-xs font-bold uppercase text-red-500"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-xs uppercase tracking-widest border-b-2  border-white pb-1 text-white font-bold hover:text-gray-500 transition-colors"
            >
              Login
            </Link>
          )}



                    </div>
                </header>

                {/* Dynamic Content */}
                <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        {children || (
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl h-96 flex items-center justify-center text-gray-400">
                                Render your stats or product list here
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayOut;