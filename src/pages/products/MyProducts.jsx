import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';

const MOCK_PRODUCTS = [
  {
    title: 'Dell Latitude 7490',
    brand: 'Dell',
    specs: 'i7, 8th Gen, 8gb RAM...',
    category: 'Business',
    date: '01-06-2025',
    units: 24,
    price: '44,000',
    active: true,
  },
  {
    title: 'HP Elitebook 840 G5',
    brand: 'HP',
    specs: 'i7, 8th Gen, 8gb RAM...',
    category: 'Business',
    date: '01-06-2025',
    units: 12,
    price: '37,000',
    active: true,
  },
  {
    title: 'Lenovo Legion 5',
    brand: 'Lenovo',
    specs: 'i7, 9th Gen, 8gb RAM...',
    category: 'Business',
    date: '01-06-2025',
    units: 8,
    price: '38,000',
    active: true,
  },
  {
    title: 'Apple Macbook',
    brand: 'Apple',
    specs: 'i7, 8th Gen, 8gb RAM...',
    category: 'Business',
    date: '01-06-2025',
    units: 10,
    price: '85,000',
    active: true,
  },
  {
    title: 'Ideapad Gaming 3',
    brand: 'Lenovo',
    specs: 'i7, 9th Gen, 8gb RAM...',
    category: 'Business',
    date: '01-06-2023',
    units: 10,
    price: '48,000',
    active: true,
  },
];

const MyProducts = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const navigate = useNavigate();

  const handleToggle = (idx) => {
    setProducts((prev) =>
      prev.map((prod, i) =>
        i === idx ? { ...prod, active: !prod.active } : prod
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F9F9F5] flex">
      {/* Sidebar */}
      <div className="fixed h-full w-56 lg:w-64 z-10 bg-[#2F4F2F] text-[#A3C1A3]">
        <Sidebar />
      </div>
      {/* Main content (with margin to accommodate fixed sidebar) */}
      <div className="ml-56 lg:ml-64 flex-1">
        <Header />
        <main className="px-8 py-6">
          <div className="flex flex-col gap-4 max-w-7xl mx-auto">
            {/* Search and Actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-1 items-center gap-3">
                <input
                  type="text"
                  placeholder="Search products"
                  className="bg-white border border-[#D3E4D3] rounded-md px-4 py-2 text-sm w-full max-w-xs focus:outline-none focus:border-[#2F4F2F]"
                />
                <select className="bg-white border border-[#D3E4D3] rounded-md px-3 py-2 text-sm focus:outline-none">
                  <option>Filter</option>
                </select>
                <select className="bg-white border border-[#D3E4D3] rounded-md px-3 py-2 text-sm focus:outline-none">
                  <option>Sort by</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-white border border-[#2F4F2F] text-[#2F4F2F] px-4 py-2 rounded-md font-medium hover:bg-[#A3C1A3] transition"
                  onClick={() => navigate('/bulk-upload')}
                >
                  Bulk Upload
                </button>
                <button
                  className="bg-[#2F4F2F] text-white px-4 py-2 rounded-md font-medium hover:bg-[#4B9460] transition"
                  onClick={() => navigate('/add-product')}
                >
                  Add Product
                </button>
              </div>
            </div>
            {/* Product Table */}
            <div className="bg-white rounded-xl shadow-sm border border-[#D3E4D3] p-4 mt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-[#2F4F2F] text-lg">Product Uploads</div>
                <select className="bg-[#F9F9F5] border border-[#D3E4D3] rounded-md px-3 py-1 text-sm focus:outline-none">
                  <option>All Time</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-[rgba(136,231,136,0.35)] text-[#2F4F2F]">
                      <th className="py-2 px-4 font-medium text-left rounded-tl-xl">Product Title</th>
                      <th className="py-2 px-4 font-medium text-left">Specifications</th>
                      <th className="py-2 px-4 font-medium text-left">Product Category</th>
                      <th className="py-2 px-4 font-medium text-left">Submitted Date</th>
                      <th className="py-2 px-4 font-medium text-left">No of Units</th>
                      <th className="py-2 px-4 font-medium text-left">Price/unit</th>
                      <th className="py-2 px-4 font-medium text-left">Active Status</th>
                      <th className="py-2 px-4 font-medium text-left rounded-tr-xl">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, idx) => (
                      <tr key={p.title} className="border-b border-[#D3E4D3] last:border-b-0">
                        <td className="py-2 px-4 flex items-center gap-2">
                          <span className="inline-block w-8 h-8 bg-[#F9F9F5] rounded-md flex items-center justify-center">
                            <img
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.brand)}&background=A3C1A3&color=2F4F2F&size=32`}
                              alt={p.brand}
                              className="w-7 h-7 rounded"
                            />
                          </span>
                          <div>
                            <div className="font-medium text-[#2F4F2F]">{p.title}</div>
                            <div className="text-xs text-[#A3C1A3]">{p.brand}</div>
                          </div>
                        </td>
                        <td className="py-2 px-4 text-[#2F4F2F]">{p.specs}</td>
                        <td className="py-2 px-4 text-[#2F4F2F]">{p.category}</td>
                        <td className="py-2 px-4 text-[#2F4F2F]">{p.date}</td>
                        <td className="py-2 px-4 text-[#2F4F2F]">{p.units}</td>
                        <td className="py-2 px-4 text-[#2F4F2F]">{p.price}</td>
                        <td className="py-2 px-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={p.active}
                              onChange={() => handleToggle(idx)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-[#A3C1A3] rounded-full peer peer-checked:bg-[#2F4F2F] relative transition-colors duration-300">
                              <span
                                className={
                                  "absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform duration-300" +
                                  (p.active ? " translate-x-5" : "")
                                }
                              ></span>
                            </div>
                          </label>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex items-center gap-2 h-full">
                            <button
                              className="bg-white border border-[#D3E4D3] text-[#2F4F2F] px-3 py-1 rounded-md hover:bg-[#F9F9F5] transition"
                              onClick={() => navigate(`/edit-product/${idx}`)}
                            >
                              Delete
                            </button>
                            <button
                              className="bg-[#2F4F2F] text-white px-3 py-1 rounded-md hover:bg-[#4B9460] transition"
                              onClick={() => navigate(`/edit-product/${idx}`)}
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4">
                <div className="text-sm text-[#2F4F2F]">
                  Showing&nbsp;
                  <select className="bg-white border border-[#D3E4D3] rounded px-1 py-0.5 text-sm mx-1">
                    <option>5</option>
                  </select>
                  out of 312
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded bg-[#A3C1A3] text-[#2F4F2F] font-semibold">1</button>
                  <button className="w-8 h-8 rounded bg-white text-[#2F4F2F] hover:bg-[#A3C1A3]">2</button>
                  <button className="w-8 h-8 rounded bg-white text-[#2F4F2F] hover:bg-[#A3C1A3]">3</button>
                  <span className="mx-1 text-[#A3C1A3]">...</span>
                  <button className="w-8 h-8 rounded bg-white text-[#2F4F2F] hover:bg-[#A3C1A3]">16</button>
                  <button className="w-8 h-8 rounded bg-white text-[#2F4F2F] hover:bg-[#A3C1A3]">
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

export default MyProducts;
