import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

function EditProduct() {
  return (
    <div className="min-h-screen bg-[#F8FAF7] flex flex-col ml-64">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Removed the My Products heading */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* Photos */}
              <section className="bg-[#EEF7EE] rounded-xl p-6 min-h-[120px] flex flex-col">
                <span className="font-medium text-gray-800 mb-2">Photos</span>
                <div className="flex items-center flex-1">
                  <button className="pb-1 w-12 h-12 rounded-lg border-2 border-dashed border-[#B6CDBB] flex items-center justify-center text-3xl text-[#4B9460] bg-white hover:bg-[#D1E7D6] transition">
                    +
                  </button>
                </div>
              </section>

              {/* Basic Details */}
              <section className="bg-[#EEF7EE] rounded-xl p-6">
                <div className="font-medium text-gray-800 mb-4">Basic Details</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Product Title / Name</label>
                    <input className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm" placeholder="Enter Product Name/Title" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Product Type</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Brand</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Model Series</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Product Category</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Note</label>
                  <input className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm" placeholder="Additional Notes (if any)" />
                </div>
              </section>

              {/* Inventory & Pricing */}
              <section className="bg-[#EEF7EE] rounded-xl p-6">
                <div className="font-medium text-gray-800 mb-4">Inventory & Pricing</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Price Per Unit</label>
                    <input className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm" placeholder="Enter Price per Unit" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Number of units available</label>
                    <input className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm" placeholder="Enter Unit" />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Specifications */}
              <section className="bg-[#EEF7EE] rounded-xl p-6">
                <div className="font-medium text-gray-800 mb-4">Specifications</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Processor</label>
                    <input className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm" placeholder="Enter Details" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">RAM</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">RAM Type</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Storage Type</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Storage Size</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Screen Size</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Screen Resolution</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Graphics Card</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Battery Health</label>
                    <input className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm" placeholder="Enter Battery Details" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Keyboard Type</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Operating System</label>
                    <select className="w-full rounded-md border border-[#B6CDBB] bg-white px-3 py-2 text-sm">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </section>
              {/* Control */}
              <section className="bg-[#EEF7EE] rounded-xl p-6 flex flex-col justify-between">
                <div className="font-medium text-gray-800 mb-4">Control</div>
                <div className="flex items-center justify-start gap-4">
                  <span className="text-gray-700 text-sm">Active Status</span>
                  <label className="inline-flex items-center cursor-pointer relative">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#4B9460] transition-all"></div>
                    <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow -translate-y-1/2 top-1/2 left-0.5 peer-checked:translate-x-full transition-all"></div>
                  </label>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditProduct;
