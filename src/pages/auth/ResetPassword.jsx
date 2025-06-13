import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="flex min-h-screen">
      {/* Left side - Dark green leather background with laptop and text */}
      <div className="w-1/2 relative overflow-hidden">
        {/* Dark green leather texture background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-12">
          {/* Laptop illustration */}
          <div className="mb-8">
            <div className="relative">
              {/* Laptop screen */}
              <div className="w-72 h-48 bg-gray-800 rounded-lg border-2 border-gray-600 shadow-2xl transform rotate-12">
                <div className="w-full h-full bg-black rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              {/* Laptop base/keyboard */}
              <div className="absolute -bottom-2 left-2 w-72 h-6 bg-gray-700 rounded-lg transform rotate-12 shadow-lg">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-48 h-3 bg-gray-600 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-white text-4xl font-bold leading-tight mb-4 max-w-sm drop-shadow-lg">
            Your Gateway to List, Manage, and Grow with Refurbished Adda
          </h1>
        </div>
      </div>

      {/* Right side - Reset Password Form */}
      <div className="w-1/2 bg-white flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          {/* Reset Password heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Reset Your Password</h2>
          
          <div className="space-y-6">
            {/* New Password field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                New Password*
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="button"
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out shadow-md"
            >
              Submit
            </button>

            {/* Back to Login link */}
            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">Back to Login? </span>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
