import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import Header from '../RAHeader';
import Sidebar from '../MastersSidebar';

const MOCK_BRANDS = [
  {
    name: 'HP',
    description: 'Leading brand in high-performance computing solutions.',
    active: true,
  },
  {
    name: 'DELL',
    description: 'Trusted name in networking and reliable PCs.',
    active: true,
  },
  {
    name: 'Lenovo',
    description: 'Delivering quality machines for work and play.',
    active: true,
  },
  {
    name: 'Acer',
    description: 'Known for sleek design and powerful performance.',
    active: true,
  },
  {
    name: 'ASUS',
    description: 'A preferred choice for professionals and gamers alike.',
    active: true,
  },
];

const ProductCat = () => {
  const [brands, setBrands] = useState(MOCK_BRANDS);
  const navigate = useNavigate();

  const handleToggle = (idx) => {
    setBrands((prev) =>
      prev.map((brand, i) =>
        i === idx ? { ...brand, active: !brand.active } : brand
      )
    );
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

        {/* Toolbar under header */}
        <div className="w-full bg-[#F9F9F5] px-8 py-4 flex flex-wrap items-center gap-2 border-b border-[#E7EFE7]">
          {/* Search */}
          <div className="flex items-center bg-white border border-[#E7EFE7] rounded-md px-2 py-1 w-64">
            <Search className="w-4 h-4 text-[#4B9460] mr-2" />
            <input
              type="text"
              placeholder="Search brands"
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
          {/* Filter */}
          <div className="flex items-center bg-white border border-[#E7EFE7] rounded-md px-3 py-1 text-sm gap-1 cursor-pointer">
            <Filter className="w-4 h-4 text-[#4B9460]" />
            <span>Hi Filter</span>
          </div>
          {/* Sort */}
          <div className="flex items-center bg-white border border-[#E7EFE7] rounded-md px-3 py-1 text-sm gap-1 cursor-pointer">
            <span>Sort by</span>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Import */}
          <button
            className="bg-white border border-[#4B9460] text-[#23472B] px-4 py-2 rounded-md font-medium hover:bg-[#E7EFE7] transition"
          >
            Import
          </button>
          {/* Add Brand */}
          <button
            className="bg-[#23472B] text-white px-4 py-2 rounded-md font-medium hover:bg-[#357347] transition"
          >
            Add Brand
          </button>
        </div>

        {/* Main Section */}
        <main className="px-8 py-6 flex-1">
          <div className="flex flex-col gap-4 max-w-7xl mx-auto">
            {/* Brand Master Title & Filter */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#23472B] text-lg">Product Category</span>
              <select className="bg-[#F9F9F5] border border-[#E7EFE7] rounded-md px-3 py-1 text-sm focus:outline-none">
                <option>All Time</option>
              </select>
            </div>
            
            {/* Brand Table */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E7EFE7] p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-[#EEF7EE] text-[#4B9460]">
                      <th className="py-3 px-4 font-medium text-left rounded-tl-xl">Brand Name</th>
                      <th className="py-3 px-4 font-medium text-left">Description</th>
                      <th className="py-3 px-4 font-medium text-left">Active Status</th>
                      <th className="py-3 px-4 font-medium text-left rounded-tr-xl">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brands.map((brand, idx) => (
                      <tr key={brand.name} className="border-b border-[#E7EFE7] last:border-b-0">
                        <td className="py-3 px-4 font-medium text-[#23472B]">{brand.name}</td>
                        <td className="py-3 px-4 text-gray-600">{brand.description}</td>
                        <td className="py-3 px-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={brand.active}
                              onChange={() => handleToggle(idx)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#23472B] relative transition-colors duration-300">
                              <span
                                className={
                                  "absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform duration-300" +
                                  (brand.active ? " translate-x-5" : "")
                                }
                              ></span>
                            </div>
                          </label>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2 h-full">
                            <button
                              className="bg-white border border-[#E7EFE7] text-red-500 px-3 py-1 rounded-md hover:bg-[#F8FAF7] transition"
                            >
                              Delete
                            </button>
                            <button
                              className="bg-[#23472B] text-white px-3 py-1 rounded-md hover:bg-[#357347] transition"
                            >
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 py-3">
                <div className="text-sm text-gray-500">
                  Showing&nbsp;
                  <select className="bg-white border border-[#E7EFE7] rounded px-1 py-0.5 text-sm mx-1">
                    <option>5</option>
                  </select>
                  out of 312
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded bg-[#B6EBA7] text-[#2D5A3D] font-semibold">1</button>
                  <button className="w-8 h-8 rounded bg-white text-gray-600 hover:bg-[#EEF7EE]">2</button>
                  <button className="w-8 h-8 rounded bg-white text-gray-600 hover:bg-[#EEF7EE]">3</button>
                  <span className="mx-1 text-gray-400">...</span>
                  <button className="w-8 h-8 rounded bg-white text-gray-600 hover:bg-[#EEF7EE]">16</button>
                  <button className="w-8 h-8 rounded bg-white text-gray-600 hover:bg-[#EEF7EE]">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductCat;
