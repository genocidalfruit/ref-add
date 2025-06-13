import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, X, CheckCircle, AlertTriangle, XCircle, Info, Settings } from 'lucide-react';

// Map routes to page titles
const routeTitles = {
  '/admin-dashboard': 'Dashboard',
  '/vendors': 'Vendors',
  '/bulk-upload': 'My Products',
  '/add-product': 'My Products',
  '/admin-inbox': 'Inbox',
  '/inventory': 'Inventory',
  '/qa-review': 'QA Review',
  '/brands': 'Brand',
  '/product-categories': 'Product Category',
  '/product-subcategories': 'Subcategory',
  '/condition': 'Condition',
};

// Master pages for settings button styling
const masterPages = ['/brands', '/product-categories', '/product-subcategories', '/condition'];

// Dummy notifications data for admin
const dummyNotifications = [
  {
    id: 1,
    title: 'New Vendor Registration',
    message: 'TechNerve Solutions has submitted their vendor application',
    time: '5 minutes ago',
    type: 'info',
    read: false,
  },
  {
    id: 2,
    title: 'Product Approval Required',
    message: '12 products are pending QA review and approval',
    time: '30 minutes ago',
    type: 'warning',
    read: false,
  },
  {
    id: 3,
    title: 'Inventory Alert',
    message: 'Dell Latitude 7490 stock has reached minimum threshold',
    time: '1 hour ago',
    type: 'warning',
    read: false,
  },
  {
    id: 4,
    title: 'Bulk Upload Completed',
    message: 'Vendor "GreenByte Traders" successfully uploaded 24 products',
    time: '2 hours ago',
    type: 'success',
    read: true,
  },
  {
    id: 5,
    title: 'System Maintenance',
    message: 'Scheduled maintenance completed successfully',
    time: '1 day ago',
    type: 'success',
    read: true,
  },
  {
    id: 6,
    title: 'Failed Upload',
    message: 'Bulk upload failed for vendor "LogicHub India" - format error',
    time: '2 days ago',
    type: 'error',
    read: true,
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(dummyNotifications);
  const dropdownRef = useRef(null);

  let pageTitle = routeTitles[location.pathname];
  if (!pageTitle) {
    if (location.pathname.startsWith('/edit-product')) {
      pageTitle = 'My Products';
    } else {
      pageTitle = 'Page';
    }
  }

  // Check if current page is a master page
  const isOnMasterPage = masterPages.includes(location.pathname);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const getNotificationIcon = (type) => {
    const iconProps = { className: "w-4 h-4 flex-shrink-0" };
    
    switch (type) {
      case 'success':
        return <CheckCircle {...iconProps} className="w-4 h-4 flex-shrink-0 text-green-500" />;
      case 'warning':
        return <AlertTriangle {...iconProps} className="w-4 h-4 flex-shrink-0 text-yellow-500" />;
      case 'error':
        return <XCircle {...iconProps} className="w-4 h-4 flex-shrink-0 text-red-500" />;
      case 'info':
      default:
        return <Info {...iconProps} className="w-4 h-4 flex-shrink-0 text-blue-500" />;
    }
  };

  const handleSettingsClick = () => {
    if (isOnMasterPage) {
      navigate('/admin-dashboard');
    } else {
      navigate('/brands');
    }
  };

  return (
    <header className="flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4 bg-white border-b border-gray-200 flex-shrink-0 w-full">
      {/* Page Title - in line with search bar and right side */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <span className="font-bold text-lg lg:text-2xl text-gray-800 whitespace-nowrap">{pageTitle}</span>
        {/* Search Bar */}
        <div className="ml-20 relative flex-1 max-w-xs lg:max-w-md">
          <Search className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search product/order"
            className="w-full pl-8 lg:pl-10 pr-3 lg:pr-4 py-1.5 lg:py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 lg:gap-4 ml-4">
        {/* Settings Button */}
        <button 
          className={`flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full transition-colors border ${
            isOnMasterPage 
              ? 'bg-[#23472B] hover:bg-[#357347] border-[#23472B]' 
              : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
          }`}
          onClick={handleSettingsClick}
          title="Settings"
        >
          <Settings className={`w-4 h-4 ${isOnMasterPage ? 'text-white' : 'text-gray-600'}`} />
        </button>

        {/* Notification Bell with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="relative flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors border border-gray-200 overflow-visible"
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            <Bell className="w-4 h-4 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-[#23472B] hover:text-[#357347] font-medium"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className={`font-medium text-sm ${
                              !notification.read ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-[#23472B] rounded-full flex-shrink-0 mt-1"></div>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <span className="text-xs text-gray-400 mt-2 block">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-center text-sm text-[#23472B] hover:text-[#357347] font-medium">
                    View all notifications
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-xs lg:text-sm">AF</span>
          </div>
          <span className="font-medium text-gray-800 text-sm lg:text-base hidden sm:block">Andrew Forbit</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
