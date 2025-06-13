import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '../RAHeader';
import Sidebar from '../RASidebar';

const realStockData = [
  {
    image: '/desktop1.png',
    name: 'HP ProDesk 400 G7',
    brand: 'HP',
    specs: 'i5, 10th Gen, 16gb RAM...',
    sourceVendor: 'TechCorp',
    date: '15-05-2025',
    units: 18,
    price: 35000,
    status: 'Live',
    portalControl: 'Unpublish',
    activeStatus: true,
  },
  {
    image: '/desktop2.png',
    name: 'Dell OptiPlex 7080',
    brand: 'Dell',
    specs: 'i7, 10th Gen, 32gb RAM...',
    sourceVendor: 'SystemsPlus',
    date: '20-05-2025',
    units: 25,
    price: 52000,
    status: 'Live',
    portalControl: 'Unpublish',
    activeStatus: true,
  },
  {
    image: '/desktop3.png',
    name: 'Lenovo ThinkCentre M720',
    brand: 'Lenovo',
    specs: 'i5, 9th Gen, 8gb RAM...',
    sourceVendor: 'BusinessTech',
    date: '10-05-2025',
    units: 12,
    price: 28000,
    status: 'Not Published',
    portalControl: 'Publish to Portal',
    activeStatus: true,
  },
  {
    image: '/desktop4.png',
    name: 'ASUS ExpertCenter D700',
    brand: 'ASUS',
    specs: 'i7, 11th Gen, 16gb RAM...',
    sourceVendor: 'ProSystems',
    date: '25-05-2025',
    units: 8,
    price: 45000,
    status: 'Live',
    portalControl: 'Unpublish',
    activeStatus: true,
  },
  {
    image: '/desktop5.png',
    name: 'Acer Veriton X2665G',
    brand: 'Acer',
    specs: 'i3, 10th Gen, 8gb RAM...',
    sourceVendor: 'OfficeHub',
    date: '18-05-2025',
    units: 30,
    price: 22000,
    status: 'Not Published',
    portalControl: 'Publish to Portal',
    activeStatus: true,
  },
];

const virtualStockData = [
  {
    image: '/laptop1.png',
    name: 'Dell Latitude 7490',
    brand: 'Dell',
    specs: 'i7, 9th Gen, 8gb RAM...',
    sourceVendor: 'FiTech',
    date: '01-06-2025',
    units: 24,
    price: 44000,
    status: 'Not Published',
    portalControl: 'Publish to Portal',
    activeStatus: true,
  },
  {
    image: '/laptop2.png',
    name: 'HP EliteBook 840 G5',
    brand: 'HP',
    specs: 'i7, 9th Gen, 8gb RAM...',
    sourceVendor: 'GreenByte Traders',
    date: '01-06-2025',
    units: 12,
    price: 57000,
    status: 'Live',
    portalControl: 'Unpublish',
    activeStatus: true,
  },
  {
    image: '/laptop3.png',
    name: 'Lenovo Legion 5',
    brand: 'Lenovo',
    specs: 'i7, 9th Gen, 8gb RAM...',
    sourceVendor: 'LogicHub Hub',
    date: '01-06-2025',
    units: 8,
    price: 38200,
    status: 'Not Published',
    portalControl: 'Publish to Portal',
    activeStatus: true,
  },
  {
    image: '/laptop4.png',
    name: 'Apple Macbook',
    brand: 'Apple',
    specs: 'i7, 9th Gen, 8gb RAM...',
    sourceVendor: 'UrbanTech Refurbs',
    date: '01-06-2025',
    units: 14,
    price: 53000,
    status: 'Live',
    portalControl: 'Unpublish',
    activeStatus: true,
  },
  {
    image: '/laptop5.png',
    name: 'Ideapad Gaming 3',
    brand: 'Lenovo',
    specs: 'i7, 9th Gen, 8gb RAM...',
    sourceVendor: 'Rebooted Systems',
    date: '01-06-2025',
    units: 16,
    price: 48000,
    status: 'Live',
    portalControl: 'Unpublish',
    activeStatus: true,
  },
];

const statusColors = {
  'Live': 'bg-[#E4F7E8] text-[#34A853]',
  'Not Published': 'bg-[#FDEDED] text-[#E14B4B]',
};

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`relative inline-flex h-6 w-11 border-2 border-gray-200 rounded-full transition-colors duration-200 focus:outline-none ${checked ? 'bg-[#23472B]' : 'bg-gray-200'}`}
      onClick={onChange}
      aria-pressed={checked}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  );
}

const Inventory = () => {
  const [stockType, setStockType] = useState('virtual');
  const currentData = stockType === 'real' ? realStockData : virtualStockData;

  const [toggles, setToggles] = useState(
    currentData.map((item) => item.activeStatus)
  );

  const handleToggle = (idx) => {
    setToggles((prev) =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] flex">
      {/* Sidebar */}
      <div className="fixed h-full w-56 lg:w-64 z-10">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="ml-56 lg:ml-64 flex-1 flex flex-col min-h-screen">
        <Header />
        {/* Toolbar */}
        <div className="w-full bg-white px-4 md:px-8 py-4 flex flex-wrap items-center gap-2 border-b border-[#E7EFE7]">
          {/* Switch - Left aligned */}
          <div className="flex rounded-[8px] overflow-hidden border border-[#E8F2E8] h-8 flex-shrink-0">
            <button
              className={`px-2 md:px-4 font-semibold text-xs md:text-sm transition-colors focus:outline-none h-8 whitespace-nowrap
                ${stockType === 'real'
                  ? 'bg-[#23472B] text-white hover:bg-[#16311a]'
                  : 'bg-white text-[#23472B] hover:bg-[#E8F2E8]'
                }`}
              onClick={() => setStockType('real')}
              type="button"
            >
              Real Stock
            </button>
            <button
              className={`px-2 md:px-4 font-semibold text-xs md:text-sm transition-colors focus:outline-none h-8 whitespace-nowrap
                ${stockType === 'virtual'
                  ? 'bg-[#23472B] text-white hover:bg-[#16311a]'
                  : 'bg-white text-[#23472B] hover:bg-[#E8F2E8]'
                }`}
              onClick={() => setStockType('virtual')}
              type="button"
            >
              Virtual Stock
            </button>
          </div>

          {/* Spacer to push everything else to the right */}
          <div className="flex-1"></div>

          {/* All other buttons - Right aligned */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search */}
            <div className="flex items-center bg-[#F7F9F8] border border-[#E7EFE7] rounded-[8px] px-3 h-8 w-[170px]">
              <Search className="w-3 h-3 text-[#4B9460] mr-2" />
              <input
                type="text"
                placeholder="Search invoice"
                className="bg-transparent outline-none flex-1 text-xs font-semibold text-[#23472B] placeholder:text-[#A0B7A6]"
                style={{ height: '20px' }}
              />
            </div>
            
            <button className="flex items-center gap-1 bg-white border border-[#E7EFE7] rounded-[8px] px-2 md:px-3 h-8 text-xs md:text-sm font-semibold text-[#23472B] whitespace-nowrap transition-colors hover:bg-[#E8F2E8]">
              <Filter className="w-3 h-3 text-[#4B9460]" />
              Filter
            </button>
            <button className="bg-white border border-[#E7EFE7] rounded-[8px] px-2 md:px-3 h-8 text-xs md:text-sm font-semibold text-[#23472B] whitespace-nowrap transition-colors hover:bg-[#E8F2E8]">
              Export Inventory
            </button>
            {/* Convert to Real Stock button: only visible for virtual */}
            <button
              className={`bg-white border border-[#E7EFE7] rounded-[8px] ${stockType === 'virtual' ? 'inline-block' : 'hidden'} px-2 md:px-3 h-8 text-xs md:text-sm font-semibold text-[#23472B] whitespace-nowrap transition-colors hover:bg-[#E8F2E8]`}
              style={{ visibility: stockType === 'virtual' ? 'visible' : 'hidden' }}
            >
              Convert to Real Stock
            </button>
            <button className="bg-[#23472B] text-white rounded-[8px] px-2 md:px-3 h-8 text-xs md:text-sm font-semibold whitespace-nowrap transition-colors hover:bg-[#16311a]">
              Add Inventory
            </button>
          </div>
        </div>
        {/* Main Section */}
        <main className="px-4 md:px-8 py-6 flex-1 flex flex-col items-center">
          <div className="flex flex-col gap-4 w-full max-w-6xl">
            {/* Product Uploads Title & Filter */}
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <span className="font-semibold text-[#23472B] text-lg">
                {stockType === 'real' ? 'Real Stock' : 'Virtual Stock'} Product Uploads
              </span>
              <select className="bg-white border border-[#E7EFE7] rounded-md px-2 md:px-3 py-1 text-xs focus:outline-none">
                <option>All Time</option>
              </select>
            </div>
            {/* Uploads Table */}
            <div className="bg-white rounded-xl shadow border border-[#E7EFE7] p-0 overflow-x-auto w-full">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#E8F2E8] text-[#23472B]">
                    <th className="py-3 px-2 font-medium text-left rounded-tl-xl">Product Title</th>
                    <th className="py-3 px-2 font-medium text-left">Specifications</th>
                    <th className="py-3 px-2 font-medium text-left">Source Vendor</th>
                    <th className="py-3 px-2 font-medium text-left">No of Units</th>
                    <th className="py-3 px-2 font-medium text-left">Price/unit</th>
                    <th className="py-3 px-2 font-medium text-left">Status</th>
                    <th className="py-3 px-2 font-medium text-left">Portal Control</th>
                    <th className="py-3 px-2 font-medium text-left">Active status</th>
                    <th className="py-3 px-2 font-medium text-left rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, idx) => (
                    <tr key={item.name} className="border-b border-[#E7EFE7] last:border-b-0">
                      <td className="py-3 px-2 max-w-[120px] truncate">
                        <div className="flex items-center gap-2 font-medium text-[#23472B]">
                          <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover bg-[#F8FAF7] flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-[#23472B]">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.brand}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 max-w-[90px] truncate">{item.specs}</td>
                      <td className="py-3 px-2 max-w-[90px] truncate">{item.sourceVendor}</td>
                      <td className="py-3 px-2">{item.units}</td>
                      <td className="py-3 px-2 whitespace-nowrap">&#8377;{item.price.toLocaleString()}</td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusColors[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        {item.portalControl === 'Publish to Portal' ? (
                          <button className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-md text-xs font-semibold hover:bg-green-100 transition">
                            Publish to Portal
                          </button>
                        ) : (
                          <button className="bg-gray-50 text-gray-700 border border-gray-300 px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-100 transition">
                            Unpublish
                          </button>
                        )}
                      </td>
                      <td className="py-3 px-2">
                        <Toggle checked={toggles[idx]} onChange={() => handleToggle(idx)} />
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex gap-1 whitespace-nowrap">
                          <button className="bg-[#E8F2E8] text-[#23472B] rounded px-2 py-1 text-xs font-medium hover:bg-[#D1E7D1] transition-colors">
                            Convert
                          </button>
                          <button className="bg-[#23472B] text-white rounded px-2 py-1 text-xs font-medium hover:bg-[#16311a] transition-colors">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {currentData.length === 0 && (
                <div className="p-8 text-center text-gray-400">No data available.</div>
              )}
            </div>
            {/* Pagination */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 py-3 w-full">
              <div className="text-xs text-gray-500">
                Showing&nbsp;
                <select className="bg-white border border-[#E7EFE7] rounded px-1 py-0.5 text-xs mx-1">
                  <option>5</option>
                </select>
                out of {currentData.length}
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
            {/* Footer */}
            <footer className="text-xs text-gray-400 py-4 flex justify-between w-full">
              <span>&copy; 2024</span>
              <span>Terms | Privacy Policy | Contact us</span>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
