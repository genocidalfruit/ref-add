import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, ListFilter, Search } from 'lucide-react';
import Header from '../RAHeader';
import Sidebar from '../RASidebar';

const MOCK_UPLOADS = [
  {
    image: '/laptop1.png',
    name: 'Dell Latitude 7490',
    specs: 'i7 8th Gen, 8gb RAM, 512gb SSD',
    category: 'Business',
    date: '01-06-2025',
    units: 24,
    productId: '441017',
    vendor: 'Amit',
    active: true,
  },
  {
    image: '/laptop2.png',
    name: 'HP EliteBook 840 G5',
    specs: 'i7 8th Gen, 8gb RAM, 512gb SSD',
    category: 'Business',
    date: '01-06-2025',
    units: 18,
    productId: '377020',
    vendor: 'Sreejith',
    active: true,
  },
  {
    image: '/laptop3.png',
    name: 'Lenovo Legion 5',
    specs: 'i7 8th Gen, 8gb RAM, 512gb SSD',
    category: 'Business',
    date: '01-06-2025',
    units: 36,
    productId: '441033',
    vendor: 'Nitin',
    active: false,
  },
  {
    image: '/laptop4.png',
    name: 'Apple MacBook',
    specs: 'i7 8th Gen, 8gb RAM, 512gb SSD',
    category: 'Business',
    date: '01-06-2025',
    units: 12,
    productId: '441037',
    vendor: 'Harish',
    active: true,
  },
  {
    image: '/laptop5.png',
    name: 'Keypad (Generic)',
    specs: 'i7 8th Gen, 8gb RAM, 512gb SSD',
    category: 'Business',
    date: '01-06-2025',
    units: 25,
    productId: '441039',
    vendor: 'Ravi',
    active: true,
  },
];

const QAReview = () => {
  const [uploads, setUploads] = useState(MOCK_UPLOADS);
  const navigate = useNavigate();

  const handleToggle = (idx) => {
    setUploads((prev) =>
      prev.map((upload, i) =>
        i === idx ? { ...upload, active: !upload.active } : upload
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] flex">
      {/* Sidebar */}
      <div className="fixed h-full w-56 lg:w-64 z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="ml-56 lg:ml-64 flex-1 flex flex-col min-h-screen">
        <Header />

        {/* Toolbar under header */}
        <div className="w-full bg-[#F8FAF7] px-8 py-4 flex flex-wrap items-center gap-2 border-b border-[#E7EFE7]">
          {/* Search */}
          <div className="flex items-center bg-white border border-[#E7EFE7] rounded-md px-2 py-1 w-64">
            <Search className="w-4 h-4 text-[#4B9460] mr-2" />
            <input
              type="text"
              placeholder="Search uploads"
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
          {/* Filter */}
          <div className="flex items-center bg-white border border-[#E7EFE7] rounded-md px-3 py-1 text-sm gap-1 cursor-pointer">
            <Filter className="w-4 h-4 text-[#4B9460]" />
            <span>Filter</span>
          </div>
          {/* Sort */}
          <div className="flex items-center bg-white border border-[#E7EFE7] rounded-md px-3 py-1 text-sm gap-1 cursor-pointer">
            <ListFilter className="w-4 h-4 text-[#4B9460]" />
            <span>Sort by</span>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Approve All */}
          <button
            className="bg-[#23472B] text-white px-4 py-2 rounded-md font-medium hover:bg-[#357347] transition"
            onClick={() => alert('Approved all')}
          >
            Approve
          </button>
        </div>

        {/* Main Section */}
        <main className="px-8 py-6 flex-1">
          <div className="flex flex-col gap-4 max-w-7xl mx-auto">
            {/* Product Uploads Title & Filter */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#23472B] text-lg">Product Uploads</span>
              <select className="bg-[#F8FAF7] border border-[#E7EFE7] rounded-md px-3 py-1 text-sm focus:outline-none">
                <option>All Time</option>
              </select>
            </div>
            {/* Uploads Table */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E7EFE7] p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-[#EEF7EE] text-[#4B9460]">
                      <th className="py-3 px-4 font-medium text-left rounded-tl-xl">Product Title</th>
                      <th className="py-3 px-4 font-medium text-left">Specifications</th>
                      <th className="py-3 px-4 font-medium text-left">Product Category</th>
                      <th className="py-3 px-4 font-medium text-left">Uploaded Date</th>
                      <th className="py-3 px-4 font-medium text-left">Total Units</th>
                      <th className="py-3 px-4 font-medium text-left">Product ID</th>
                      <th className="py-3 px-4 font-medium text-left">Vendor</th>
                      <th className="py-3 px-4 font-medium text-left">Active Status</th>
                      <th className="py-3 px-4 font-medium text-left rounded-tr-xl">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploads.map((u, idx) => (
                      <tr key={u.name} className="border-b border-[#E7EFE7] last:border-b-0">
                        <td className="py-3 px-4 flex items-center gap-2 font-medium text-[#23472B]">
                          <img src={u.image} alt={u.name} className="w-8 h-8 rounded object-cover bg-[#F8FAF7]" />
                          {u.name}
                        </td>
                        <td className="py-3 px-4">{u.specs}</td>
                        <td className="py-3 px-4">{u.category}</td>
                        <td className="py-3 px-4">{u.date}</td>
                        <td className="py-3 px-4">{u.units}</td>
                        <td className="py-3 px-4">{u.productId}</td>
                        <td className="py-3 px-4">{u.vendor}</td>
                        <td className="py-3 px-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={u.active}
                              onChange={() => handleToggle(idx)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#23472B] relative transition-colors duration-300">
                              <span
                                className={
                                  "absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform duration-300" +
                                  (u.active ? " translate-x-5" : "")
                                }
                              ></span>
                            </div>
                          </label>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2 h-full">
                            <button
                              className="bg-white border border-[#E7EFE7] text-[#23472B] px-3 py-1 rounded-md hover:bg-[#F8FAF7] transition"
                              onClick={() => navigate(`/edit-product/${u.productId}`)}
                            >
                              View
                            </button>
                            <button
                              className="bg-[#23472B] text-white px-3 py-1 rounded-md hover:bg-[#357347] transition"
                              onClick={() => alert('Approve')}
                            >
                              Approve
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

export default QAReview;
