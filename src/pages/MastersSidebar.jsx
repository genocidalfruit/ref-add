import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Package,
  Grid3X3,
  Layers,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper for active state
  const isActive = (path) => location.pathname === path;

  const navItems = [
    {
      name: 'Brand',
      path: '/brands',
      icon: <Package className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Product Category',
      path: '/product-categories',
      icon: <Grid3X3 className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Subcategory',
      path: '/product-subcategories',
      icon: <Layers className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Condition',
      path: '/condition',
      icon: <Settings className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
  ];

  return (
    <aside className="w-56 lg:w-64 bg-[#E8F2E8] flex flex-col py-3 px-3 lg:py-4 lg:px-4 flex-shrink-0 h-screen fixed left-0 top-0 z-30">
      {/* Logo section */}
      <div className="flex items-center mb-8 -mt-5">
        <img src="/logo.svg" alt="Refurbished Adda Logo" className="w-8 h-8 lg:w-40 lg:h-30 ml-8 mr-2 lg:mr-3" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-1" aria-label="Primary Navigation">
        <ul>
          {navItems.map(({ name, path, icon, disabled }) => {
            const active = isActive(path);
            return (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => !disabled && navigate(path)}
                  aria-current={active ? 'page' : undefined}
                  disabled={disabled}
                  className={
                    [
                      "my-2 flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-green-200",
                      active
                        ? "bg-[#4CAF50] text-white shadow-sm"
                        : disabled
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#374151]"
                    ].join(' ')
                  }
                >
                  {icon}
                  <span>{name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;