import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Mail, ChevronLeft, ChevronRight, Archive, Trash2, Reply, MoreHorizontal, Search } from 'lucide-react';

const messages = [
  {
    id: 1,
    subject: 'System Maintenance Alert',
    preview: 'Our platform will undergo scheduled maintenance...',
    date: 'Sep 11',
    read: false,
    selected: true,
    body: (
      <>
        <div className="text-lg font-semibold mb-2">System Maintenance Alert</div>
        <div className="text-xs text-gray-500 mb-4">04 June 2025, 07:09 AM</div>
        <div className="mb-4">Dear Vendor,</div>
        <div className="mb-4">
          We’d like to inform you that our platform will be undergoing scheduled system maintenance on the following date and time.
        </div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-medium">📅 Date:</span>
          <span>June 7, 2025</span>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-medium">⏰ Time:</span>
          <span>12:00 AM to 3:00 AM IST</span>
        </div>
        <div className="mb-4">
          <span className="font-medium text-yellow-700">⚠️ Impact:</span>
          <span className="text-gray-700">
            &nbsp;Product uploading, editing, and bulk-uploads will be temporarily unavailable during this maintenance window...
          </span>
        </div>
        <div className="mb-4">
          We recommend completing any critical uploads or updates before the maintenance begins.<br/>
          We appreciate your patience and understanding.<br/>
          If you have any questions, feel free to reach out to our support team via the Help Center.<br/><br/>
          Thank you for your continued partnership.<br/>
          Team Refurbished Adda
        </div>
      </>
    ),
  },
  {
    id: 2,
    subject: 'New Feature Announcement',
    preview: 'New Feature: Download Product Sheet',
    date: 'Sep 10',
    read: true,
    selected: false,
    body: <div>New Feature details...</div>,
  },
  {
    id: 3,
    subject: 'Profile Verified',
    preview: 'Your Vendor Profile Has Been Successfully Verified',
    date: 'Sep 9',
    read: true,
    selected: false,
    body: <div>Your profile is now verified.</div>,
  },
];

function Inbox() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedMessage = messages.find((msg) => msg.id === selectedId);

  return (
    <div className="flex min-h-screen bg-[#F8FAF7]">
      {/* Fixed Sidebar */}
      <div className="fixed inset-y-0 left-0 z-10 w-56 lg:w-64">
        <Sidebar />
      </div>

      {/* Main content shifted right by sidebar width */}
      <div className="ml-56 lg:ml-64 flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1 p-6 gap-6 overflow-hidden">
          {/* Message List */}
          <div className="w-[340px] bg-white rounded-xl shadow-sm border border-[#E7EFE7] flex flex-col">
            <div className="p-4 pb-2 border-b border-[#E7EFE7] flex items-center">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search inbox..."
                className="bg-transparent flex-1 outline-none text-sm"
              />
            </div>
            <ul className="flex-1 overflow-y-auto">
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  onClick={() => setSelectedId(msg.id)}
                  className={`cursor-pointer px-4 py-3 border-b border-[#E7EFE7] transition 
                    ${selectedId === msg.id ? 'bg-[#F1F7F3]' : ''}
                    ${!msg.read ? 'font-semibold text-gray-900' : 'text-gray-700'}
                    hover:bg-[#F1F7F3]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{msg.subject}</span>
                    <span className="text-xs text-gray-400 ml-2">{msg.date}</span>
                  </div>
                  <div className="text-xs text-gray-500 truncate">{msg.preview}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Message Details */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-[#E7EFE7] flex flex-col min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-[#E7EFE7] bg-[#F5F9F6] rounded-t-xl">
              <div className="flex items-center gap-2">
                <button className="p-1 text-gray-400 hover:text-green-700"><ChevronLeft size={20} /></button>
                <button className="p-1 text-gray-400 hover:text-green-700"><ChevronRight size={20} /></button>
                <span className="ml-4 text-sm text-gray-500">
                  {selectedMessage?.subject}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 text-gray-400 hover:text-green-700"><Archive size={18} /></button>
                <button className="p-1 text-gray-400 hover:text-green-700"><Trash2 size={18} /></button>
                <button className="p-1 text-gray-400 hover:text-green-700"><Reply size={18} /></button>
                <button className="p-1 text-gray-400 hover:text-green-700"><MoreHorizontal size={18} /></button>
                <span className="ml-4 text-xs text-gray-400">4 from 30</span>
              </div>
            </div>
            {/* Message Content */}
            <div className="flex-1 px-8 py-6 overflow-y-auto text-[15px] text-gray-700">
              {selectedMessage ? selectedMessage.body : (
                <div className="text-gray-400 text-center py-12">Select a message to read</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
