import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Client from './pages/Client';
import Layout from './pages/Layout';
import Tramos from './pages/Tramos';
import TramosForClient from './pages/TramosForClient';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContextDate from './context/UseContextDate'
const App = () => {
  return (
    <UseContextDate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='client' element={<Client />} />
            <Route path="tramos" element={<Tramos />} />
            <Route path="tramosForClient" element={<TramosForClient />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UseContextDate>
  )
}

export default App;
