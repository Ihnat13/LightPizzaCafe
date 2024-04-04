import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/mainLayout/mainLayout.jsx';
import Main from './components/main/Main.jsx';
import About from './components/about/about.jsx';
import Menu from './components/menu/menu.jsx';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default App;
