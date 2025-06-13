import React, { useState } from 'react';

function SignupStep2() {
  const [companyName, setCompanyName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [companyRegistration, setCompanyRegistration] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

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
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-12">
          {/* Laptop illustration */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-72 h-48 bg-gray-800 rounded-lg border-2 border-gray-600 shadow-2xl transform rotate-12">
                <div className="w-full h-full bg-black rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-2 w-72 h-6 bg-gray-700 rounded-lg transform rotate-12 shadow-lg">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-48 h-3 bg-gray-600 rounded-sm"></div>
              </div>
            </div>
          </div>
          <h1 className="text-white text-4xl font-bold leading-tight mb-4 max-w-sm drop-shadow-lg">
            Your Gateway to List, Manage, and Grow with Refurbished Adda
          </h1>
        </div>
      </div>

      {/* Right side - Business Details Form */}
      <div className="w-1/2 bg-white flex items-center justify-center px-8">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Business Details</h2>
          <div className="space-y-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Company Name*
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                placeholder=""
              />
            </div>
            {/* GST Number and Company Registration in line */}
            <div className="grid grid-cols-2 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  GST Number (optional)
                </label>
                <input
                  type="text"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Company Registration Number (optional)
                </label>
                <input
                  type="text"
                  value={companyRegistration}
                  onChange={(e) => setCompanyRegistration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
              </div>
            </div>
            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Address Line 1*
              </label>
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                placeholder=""
              />
            </div>
            {/* City, State, Pincode */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  City*
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  State*
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Pincode*
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100"
                  placeholder=""
                />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Back
              </button>
              <button
                type="button"
                className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out shadow-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupStep2;
