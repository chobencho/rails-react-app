import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "routes/Blog";
import Blogs from "routes/Blogs";
import CreateBlog from "routes/CreateBlog";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="create" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
