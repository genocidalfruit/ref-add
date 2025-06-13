import React from 'react';
import { Plus, ArrowRight, Users, CheckCircle, BarChart3, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Header from '../Header';
import Sidebar from '../Sidebar';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const navigate = useNavigate();

  // Brand Status chart data
  const brandStatusData = {
    labels: ['Dell', 'Lenovo', 'Acer', 'HP', 'Apple', 'Asus', 'Others'],
    datasets: [
      {
        data: [60, 15, 12, 8, 5, 5, 5],
        backgroundColor: [
          '#2D5A3D',  // Dell - darkest green
          '#4CAF50',  // Lenovo - medium green
          '#81C784',  // Acer - lighter green
          '#A5D6A7',  // HP - light green
          '#C8E6C9',  // Apple - very light green
          '#E8F5E8',  // Asus - pale green
          '#F1F8E9'   // Others - palest green
        ],
        borderWidth: 0,
      },
    ],
  };

  const brandStatusOptions = {
    cutout: '60%',
    plugins: {
      legend: { display: false },
      tooltip: { 
        enabled: true,
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      },
    },
    maintainAspectRatio: false,
  };

  const recentQAReviews = [
    { 
      productTitle: "HP EliteBook 840 G5", 
      date: "02-06-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Business", 
      units: "24" 
    },
    { 
      productTitle: "Dell Latitude 7490", 
      date: "23-05-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Business", 
      units: "18" 
    },
    { 
      productTitle: "Lenovo Legion 5", 
      date: "18-05-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Gaming", 
      units: "36" 
    },
    { 
      productTitle: "Apple MacBook", 
      date: "10-05-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Creative / Design", 
      units: "12" 
    },
    { 
      productTitle: "Lenovo Gaming 3", 
      date: "05-05-2024", 
      specifications: "i7, 9th Gen, 8gb RAM...", 
      productCategory: "Gaming", 
      units: "25" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8F2E8] font-sans flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-white overflow-hidden h-screen flex flex-col ml-61">
        <Header />
        
        {/* Dashboard Content */}
        <div className="p-4 lg:p-8 overflow-y-auto flex-1">
          {/* Main Layout Container */}
          <div className="flex gap-6">
            {/* Left Main Content */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Top Stats Row - 2 Boxes shorter height */}
              <div className="grid grid-cols-2 gap-6">
                {/* Total Products Uploaded - matching image style */}
                <div className="bg-[#2D5A3D] rounded-xl p-6 h-32 flex flex-col justify-between relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded"></div>
                      <div className="w-2 h-2 bg-[#4CAF50] rounded"></div>
                      <div className="w-2 h-2 bg-[#4CAF50] rounded"></div>
                      <div className="w-2 h-2 bg-[#4CAF50] rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">542</div>
                    <div className="text-white text-sm font-medium">Total Products Uploaded</div>
                  </div>
                </div>

                {/* Last Product Uploaded - matching image style */}
                <div className="bg-white rounded-xl p-6 h-32 border border-gray-200 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-black mb-1">Dell Latitude 7490</div>
                    <div className="text-gray-600 text-sm">Last Product Uploaded</div>
                  </div>
                </div>
              </div>

              {/* Second Row - Upload Bulk box 60% width, Add New Product box 40% width */}
              <div className="flex gap-6">
                {/* Upload Bulk box with 60% width - matching image style */}
                <div 
                  className="rounded-xl p-8 border border-gray-200 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/bu.png)',
                    width: '60%'
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-black mb-8 leading-tight">
                      Upload more,<br />
                      Work less.
                    </div>
                    <button
                      className="bg-[#A8E6A3] text-black rounded-lg py-2 px-4 flex items-center gap-2 text-sm hover:bg-[#4CAF50] hover:text-white transition-colors"
                      onClick={() => navigate('/bulk-upload')}
                    >
                      <Plus className="w-4 h-4" />
                      Upload Bulk
                    </button>
                  </div>
                </div>

                {/* Add New Product section - matching image style */}
                <div 
                  className="rounded-xl p-8 border border-gray-200 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/ap.png)',
                    width: '40%'
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-xl font-bold text-black mb-8 leading-tight">
                      List your next<br />
                      best device in<br />
                      seconds.
                    </div>
                    <button
                      className="bg-[#A8E6A3] text-black rounded-lg py-2 px-4 flex items-center gap-2 text-sm hover:bg-[#4CAF50] hover:text-white transition-colors"
                      onClick={() => navigate('/add-product')}
                    >
                      <Plus className="w-4 h-4" />
                      Add New Product
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Recent QA Reviews Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-black">Recent Uploads</h3>
                  <div className="flex items-center gap-4">
                    <select className="text-sm bg-white border border-gray-300 rounded px-3 py-1">
                      <option>This Month</option>
                      <option>Last Month</option>
                    </select>
                    <button className="p-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Title / Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specifications / Series</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No of Units</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentQAReviews.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-black">{item.productTitle}</td>
                          <td className="px-6 py-4 text-sm text-black">{item.date}</td>
                          <td className="px-6 py-4 text-sm text-black">{item.specifications}</td>
                          <td className="px-6 py-4 text-sm text-black">{item.productCategory}</td>
                          <td className="px-6 py-4 text-sm text-black">{item.units}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 flex flex-col gap-6">
              {/* Brand Status Chart */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-black">Brand Status</h3>
                  <select className="text-sm bg-white border border-gray-300 rounded px-3 py-1">
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>This Week</option>
                  </select>
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Donut Chart */}
                  <div className="relative w-40 h-40 mb-6">
                    <Doughnut data={brandStatusData} options={brandStatusOptions} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs text-gray-500">Total Products</span>
                      <span className="text-2xl font-bold text-black">100</span>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#2D5A3D] rounded-sm"></div>
                        <span className="text-black">Dell</span>
                      </div>
                      <span className="font-medium text-black">60</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#4CAF50] rounded-sm"></div>
                        <span className="text-black">Lenovo</span>
                      </div>
                      <span className="font-medium text-black">15</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#81C784] rounded-sm"></div>
                        <span className="text-black">Acer</span>
                      </div>
                      <span className="font-medium text-black">12</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#A5D6A7] rounded-sm"></div>
                        <span className="text-black">HP</span>
                      </div>
                      <span className="font-medium text-black">8</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#C8E6C9] rounded-sm"></div>
                        <span className="text-black">Apple</span>
                      </div>
                      <span className="font-medium text-black">5</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#E8F5E8] rounded-sm"></div>
                        <span className="text-black">Asus</span>
                      </div>
                      <span className="font-medium text-black">5</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#F1F8E9] rounded-sm"></div>
                        <span className="text-black">Others</span>
                      </div>
                      <span className="font-medium text-black">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity - replacing Quick Actions */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-black">Recent Activity</h3>
                  <button className="text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  {/* Today Section */}
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase mb-3">Today</div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-black">
                            <span className="font-medium">HP EliteBook 840 G5</span> - edited
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Just now</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-black">
                            <span className="font-medium">Alex Johnson</span> logged in
                          </div>
                          <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-black">
                            <span className="font-medium">Morgan Lee</span> added a new laptop for business category
                          </div>
                          <div className="text-xs text-gray-500 mt-1">3 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Yesterday Section */}
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase mb-3">Yesterday</div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-black">
                            <span className="font-medium">Taylor Green</span> viewed recent uploads
                          </div>
                          <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-black">
                            <span className="font-medium">Wilson Baptista</span> added a new Laptop
                          </div>
                          <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                        </div>
                      </div>
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

export default Dashboard;
