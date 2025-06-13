import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Mail,
  ClipboardList,
  Boxes,
  BarChart3,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper for active state
  const isActive = (path) => location.pathname === path;

  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin-dashboard',
      icon: <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Vendors',
      path: '/vendors',
      icon: <Users className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'QA Review',
      path: '/qa-review',
      icon: <ClipboardList className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Inventory',
      path: '/inventory',
      icon: <Boxes className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Mail',
      path: '/admin-inbox',
      icon: <Mail className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5" />,
      disabled: false,
    },
  ];

  return (
    <aside className="w-56 lg:w-64 bg-[#E8F2E8] flex flex-col py-3 px-3 lg:py-4 lg:px-4 flex-shrink-0 h-screen fixed left-0 top-0 z-30">
      {/* Logo section */}
      <div className="flex items-center -mt-5">
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
                      "my-2 flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-green-200",
                      active
                        ? "bg-[#4CAF50] text-white"
                        : disabled
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-600 hover:bg-[#D1E7D6] hover:text-[#388E3C]"
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

      {/* Bottom info card */}
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
