import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Auth from './pages/Auth'
import Intro from './pages/Intro';
import Blog from './pages/Blog';
import BlogContent from './pages/BlogContent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/detail" element={< BlogContent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App