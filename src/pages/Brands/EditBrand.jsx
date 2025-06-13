import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../RAHeader';
import Sidebar from '../MastersSidebar';

const EditBrand = () => {
  const [brandName, setBrandName] = useState('');
  const [description, setDescription] = useState('');
  const [activeStatus, setActiveStatus] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/brands');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      brandName,
      description,
      activeStatus
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F5] flex">
      {/* Sidebar */}
      <div className="fixed h-full w-56 lg:w-64 z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="ml-56 lg:ml-64 flex-1 flex flex-col min-h-screen">
        <Header />

        {/* Main Section */}
        <main className="px-8 py-6 flex-1">
          <div className="flex gap-6 max-w-7xl mx-auto">
            {/* Form Section */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-sm border border-[#E7EFE7] p-6">
                <h2 className="text-xl font-semibold text-[#23472B] mb-6">Edit Brand</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Brand Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="Enter brand name"
                      className="w-full px-3 py-2 border border-[#E7EFE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23472B] focus:border-transparent"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter brand description"
                      rows={6}
                      className="w-full px-3 py-2 border border-[#E7EFE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23472B] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-2 border border-[#E7EFE7] text-gray-600 rounded-md hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#23472B] text-white rounded-md hover:bg-[#357347] transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Control Section */}
            <div className="w-80">
              <div className="bg-white rounded-xl shadow-sm border border-[#E7EFE7] p-6">
                <h3 className="text-lg font-semibold text-[#23472B] mb-4">Control</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Active Status
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeStatus}
                        onChange={(e) => setActiveStatus(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#23472B] relative transition-colors duration-300">
                        <span
                          className={
                            "absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform duration-300" +
                            (activeStatus ? " translate-x-5" : "")
                          }
                        ></span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditBrand;