import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, X, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

// Map routes to page titles
const routeTitles = {
  '/dashboard': 'Dashboard',
  '/my-products': 'My Products',
  '/bulk-upload': 'My Products',
  '/add-product': 'My Products',
  '/inbox': 'Inbox',
  '/insights': 'Insights',
  // Add more routes and titles as needed
};

// Dummy notifications data
const dummyNotifications = [
  {
    id: 1,
    title: 'New Product Approved',
    message: 'Your Dell Latitude 7490 has been approved and is now live',
    time: '2 minutes ago',
    type: 'success',
    read: false,
  },
  {
    id: 2,
    title: 'Stock Alert',
    message: 'HP EliteBook 840 G5 stock is running low (5 units remaining)',
    time: '1 hour ago',
    type: 'warning',
    read: false,
  },
  {
    id: 3,
    title: 'New Order Received',
    message: 'Order #12345 for MacBook Pro has been placed',
    time: '3 hours ago',
    type: 'info',
    read: true,
  },
  {
    id: 4,
    title: 'Product Rejected',
    message: 'Lenovo Legion 5 requires additional specifications',
    time: '1 day ago',
    type: 'error',
    read: true,
  },
  {
    id: 5,
    title: 'Bulk Upload Complete',
    message: '24 products have been successfully uploaded',
    time: '2 days ago',
    type: 'success',
    read: true,
  },
];

const Header = () => {
  const location = useLocation();
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
        {/* Notification Bell with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="relative p-1 lg:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
