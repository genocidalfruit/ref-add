import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Mail,
  PieChart
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to match My Products and its subpages
  const isMyProductsActive = () => {
    const path = location.pathname;
    return (
      path === '/my-products' ||
      path === '/bulk-upload' ||
      path === '/add-product' ||
      /^\/edit-product\/[^/]+$/.test(path) // matches /edit-product/:id
    );
  };

  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5" title="Dashboard" />,
      isActive: () => location.pathname === '/dashboard',
    },
    {
      name: 'My Products',
      path: '/my-products',
      icon: <Package className="w-4 h-4 lg:w-5 lg:h-5" title="My Products" />,
      isActive: isMyProductsActive,
    },
    {
      name: 'Inbox',
      path: '/inbox',
      icon: <Mail className="w-4 h-4 lg:w-5 lg:h-5" title="Inbox" />,
      isActive: () => location.pathname === '/inbox',
    }
  ];

  return (
    <aside className="w-56 lg:w-64 bg-[#E8F2E8] flex flex-col py-3 px-3 lg:py-4 lg:px-4 flex-shrink-0 h-screen fixed left-0 top-0 z-30">
      <div className="flex items-center -mt-5">
        <img src="/logo.svg" alt="Refurbished Adda Logo" className="w-8 h-8 lg:w-40 lg:h-30 ml-8 mr-2 lg:mr-3" />
      </div>

      <nav className="flex flex-col gap-1 flex-1" aria-label="Primary Navigation">
        <ul>
          {navItems.map(({ name, path, icon, isActive }) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => navigate(path)}
                aria-current={isActive() ? 'page' : undefined}
                className={`my-2 flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200 
                  focus:outline-none focus:ring-2 focus:ring-green-200
                  ${
                    isActive()
                      ? 'bg-[#4CAF50] text-white'
                      : 'text-gray-600 hover:bg-[#D1E7D6] hover:text-[#388E3C]'
                  }`}
              >
                {icon}
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-[#2D5A3D] rounded-lg p-3 lg:p-4 text-white mt-4 flex-shrink-0">
        <div className="mb-2 lg:mb-3">
          <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded mb-2 flex items-center justify-center">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#2D5A3D] rounded"></div>
          </div>
        </div>
        <div className="text-xs lg:text-sm mb-2 lg:mb-3">
          Get full access to your financial data and analytics and graphs
        </div>
        <button className="w-full bg-[#4CAF50] text-white rounded py-1.5 lg:py-2 px-3 lg:px-4 text-xs lg:text-sm font-medium hover:bg-green-600 transition">
          Get Pro
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
