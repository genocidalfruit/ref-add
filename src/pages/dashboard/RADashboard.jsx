import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import Header from '../RAHeader';
import Sidebar from '../RASidebar';

// Import your SVGs
import buSvg from '/bu.png';
import apSvg from '/ap.png';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const RADashboard = () => {
  const navigate = useNavigate();

  const recentUploads = [
    { 
      name: "Dell Latitude 7490", 
      date: "02-06-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Business", 
      units: "24" 
    },
    { 
      name: "HP EliteBook 840 G5", 
      date: "23-05-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Business", 
      units: "18" 
    }
  ];

  // Chart.js data configuration
  const donutData = {
    labels: ['Real stock', 'Virtual Stock'],
    datasets: [
      {
        data: [250, 750],
        backgroundColor: ['#A8E6A3', '#2D5A3D'],
        borderWidth: 0,
        cutout: '50%', // Thicker donut
      },
    ],
  };

  // Chart.js options configuration
  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#E8F2E8] font-sans flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-white overflow-hidden h-screen flex flex-col ml-61">
        <Header />
        
        {/* Dashboard Content */}
        <div className="p-4 lg:p-8 overflow-y-auto flex-1">
          {/* Main Flexbox Container */}
          <div className="flex flex-col xl:flex-row gap-4 lg:gap-6">
            {/* Left Column: Grid + Recent Uploads */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              {/* Top Row: 3 Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {/* Total Vendors Card */}
                <div className="bg-[#2D5A3D] rounded-xl p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-3 lg:mb-4">
                    <div className="flex gap-1 lg:gap-2">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#4CAF50] rounded"></div>
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#4CAF50] rounded"></div>
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#4CAF50] rounded"></div>
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#4CAF50] rounded"></div>
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 lg:mb-2">542</div>
                  <div className="text-green-200 text-sm lg:text-base">Total Vendors</div>
                </div>

                {/* Total Products Uploaded Card */}
                <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3 lg:mb-4">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1 lg:mb-2">350</div>
                  <div className="text-gray-500 text-sm lg:text-base">Total Products Uploaded</div>
                </div>
                {/* Approved to Portal Card */}
                <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3 lg:mb-4">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1 lg:mb-2">150</div>
                  <div className="text-gray-500 text-sm lg:text-base">Approved to Portal</div>
                </div>
              </div>
              {/* Bottom Row: 60/40 Split */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Upload More Card - 60% */}
                <div
                  className="lg:w-[60%] rounded-xl p-4 lg:p-8 border border-gray-200 bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${buSvg})` }}
                >
                  <div className="text-lg lg:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">Upload more,</div>
                  <div className="text-lg lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-8">Work less.</div>
                  <button
                    className="bg-[#4CAF50] text-white rounded-lg py-2 lg:py-3 px-4 lg:px-6 flex items-center gap-2 font-medium text-sm"
                    onClick={() => navigate('/bulk-upload')}
                  >
                    <Plus className="w-3 h-3 lg:w-4 lg:h-4" />
                    Upload Bulk
                  </button>
                </div>
                {/* Live Inventory Status Card with Chart.js - 40% */}
                <div className="lg:w-[40%] bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-700">Live Inventory Status</span>
                    <select className="text-xs bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none ml-2">
                      <option>All Time</option>
                      <option>This Month</option>
                      <option>Last Month</option>
                    </select>
                  </div>
                  
                  {/* Chart.js Doughnut Chart */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-24 h-24">
                      <Doughnut data={donutData} options={donutOptions} />
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#A8E6A3] rounded-full"></div>
                        <span className="text-xs text-gray-600 font-semibold">Real stock</span>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold">(250)25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#2D5A3D] rounded-full"></div>
                        <span className="text-xs text-gray-600 font-semibold">Virtual Stock</span>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold">(750)75%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Uploads Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800">Recent QA Reviews</h3>
                  <div className="flex items-center gap-2 lg:gap-4">
                    <select className="text-xs lg:text-sm bg-white border border-gray-300 rounded px-2 lg:px-3 py-1 focus:outline-none">
                      <option>This Month</option>
                      <option>Last Month</option>
                    </select>
                    <button className="p-1">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Title / Name</th>
                        <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Specifications / Series</th>
                        <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase">Units</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentUploads.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-900">{item.name}</td>
                          <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-500">{item.date}</td>
                          <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-500 hidden md:table-cell">{item.specifications}</td>
                          <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-500">{item.productCategory}</td>
                          <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-500">{item.units}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Right Column: Add New Product + Quick Actions */}
            <div className="w-full xl:w-72 flex flex-col gap-4 lg:gap-6">
              {/* Add New Product Card */}
              <div
                className="rounded-xl p-4 lg:p-8 border border-gray-200 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${apSvg})` }}
              >
                <div className="relative z-10">
                  <div className="text-lg lg:text-xl font-bold text-black mb-4 lg:mb-8 leading-relaxed h-70">
                    List your next<br />best device in<br />seconds.
                  </div>
                  <button
                    className="bg-white text-[#2D5A3D] rounded-lg py-2 lg:py-3 px-4 lg:px-6 flex items-center gap-2 font-medium text-sm"
                    onClick={() => navigate('/add-product')}
                  >
                    <Plus className="w-3 h-3 lg:w-4 lg:h-4" />
                    Add New Product
                  </button>
                </div>
              </div>
              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 flex-1">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800">Quick Actions</h3>
                  <button className="text-gray-400">
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Manage Vendors</div>
                      <div className="text-xs text-gray-500">Onboard, edit, and manage all vendor partners from one place.</div>
                    </div>
                    <div className="w-8 h-8 bg-[#A8E6A3] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">QA Review Panel</div>
                      <div className="text-xs text-gray-500">Review and approve uploaded devices before they go live.</div>
                    </div>
                    <div className="w-8 h-8 bg-[#A8E6A3] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Inventory Management</div>
                      <div className="text-xs text-gray-500">Track, update, and organize your company's real and virtual stock.</div>
                    </div>
                    <div className="w-8 h-8 bg-[#A8E6A3] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Settings</div>
                      <div className="text-xs text-gray-500">Configure system preferences, user roles, and manage access controls.</div>
                    </div>
                    <div className="w-8 h-8 bg-[#A8E6A3] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RADashboard;
