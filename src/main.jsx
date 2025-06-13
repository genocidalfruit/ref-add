import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Auth Pages
import Login from '/src/pages/auth/Login.jsx';
import ForgotPassword from '/src/pages/auth/ForgotPassword.jsx';
import ResetPassword from '/src/pages/auth/ResetPassword.jsx';
import SignupStep1 from '/src/pages/auth/SignupStep1.jsx';
import SignupStep2 from '/src/pages/auth/SignupStep2.jsx';

// Product Pages
import MyProducts from '/src/pages/products/MyProducts.jsx';
import AddProduct from '/src/pages/products/AddProduct.jsx';
import EditProduct from '/src/pages/products/EditProduct.jsx';

// Dashboard & Inbox
import Dashboard from '/src/pages/dashboard/Dashboard.jsx';
import Inbox from '/src/pages/inbox/Inbox.jsx';
import BulkUpload from '/src/pages/bulk-upload/BulkUpload.jsx';

// Admin
import RADashboard from './pages/dashboard/RADashboard';
import Vendors from './pages/Vendors/Vendors';
import QAReview from './pages/QARev/QAReview';
import RAInbox from './pages/inbox/RAInbox';
import Inventory from './pages/Inventory/Inventory';

// Masters
import Brands from './pages/Brands/Brands';
import AddBrand from './pages/Brands/AddBrand';
import EditBrand from './pages/Brands/EditBrand';
import ProductCat from './pages/ProductCat/ProductCat';
import ProductSubCat from './pages/ProductCat/ProductSubcat';
import Condition from './pages/Condition/Condition';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup-step1" element={<SignupStep1 />} />
        <Route path="/signup-step2" element={<SignupStep2 />} />

        {/* User Dashboard & Product Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/bulk-upload" element={<BulkUpload />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<RADashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/qa-review" element={<QAReview />} />
        <Route path="/admin-inbox" element={<RAInbox />} />
        <Route path="/inventory" element={<Inventory />} />

        {/* Masters Routes */}
        <Route path="/brands" element={<Brands />} />
        <Route path="/product-categories" element={<ProductCat />} />
        <Route path="/product-subcategories" element={<ProductSubCat />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/add-brand" element={<AddBrand />} />
        <Route path="/edit-brand/:id" element={<EditBrand />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);