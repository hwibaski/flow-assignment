import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Upload from './Upload';
import Config from './Config';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
