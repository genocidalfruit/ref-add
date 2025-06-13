import React, { useRef, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

function BulkUpload() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  // Drag and drop handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] flex flex-col ml-64">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">Bulk Upload</h1>
            <div className="bg-[#EEF7EE] rounded-xl p-6 mb-6">
              <h2 className="text-lg font-medium mb-4">Add Product</h2>
              <div
                className={`bg-[#F8FAF7] rounded-lg p-6 flex flex-col items-center border-2 ${
                  dragActive ? 'border-[#4B9460] bg-[#E7EFE7]' : 'border-[#E7EFE7]'
                } transition-colors`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                tabIndex={0}
                role="button"
                aria-label="Drag and drop files here or click to select"
              >
                <button
                  type="button"
                  onClick={handleChooseFile}
                  className="flex flex-col items-center justify-center w-full focus:outline-none"
                  tabIndex={-1}
                >
                  <span className="mb-3">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                      <rect width="32" height="32" rx="16" fill="#D1E7D6"/>
                      <path d="M16 10v8m0 0l-3-3m3 3l3-3" stroke="#4B9460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="block">
                    <span className="inline-block bg-[#4B9460] text-white px-5 py-2 rounded-md font-semibold cursor-pointer">
                      Choose File
                    </span>
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.xlsx,.pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileInputChange}
                  />
                  <span className="text-xs text-gray-500 mt-2">
                    Supported Formats: PDF, Word<br/>
                    {file ? <span className="text-gray-700">Selected: {file.name}</span> : "No File Chosen"}
                  </span>
                </button>
                <span className="mt-2 text-xs text-gray-400">or drag and drop here</span>
              </div>
            </div>
            <div className="bg-[#F8FAF7] rounded-xl p-6 border border-[#E7EFE7]">
              <div className="text-gray-700 text-base font-semibold mb-2">Note</div>
              <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
                <li>
                  Fill Column data as per sample CSV file&nbsp;
                  <a href="#" className="text-[#4B9460] underline">click here</a>.
                </li>
                <li>
                  Please don’t use comma (,) and single quote (').
                </li>
                <li>
                  Format Date cell to English(Zimbabwe) as 2012-12-04.
                </li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BulkUpload;
