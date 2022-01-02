import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Upload from './pages/Upload/Upload';
import Config from './pages/Config/Config';
import GlobalStyle from './styles/GlobalStyle';

function Router() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path='/upload' element={<Upload />} />
          <Route exact path='/config' element={<Config />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
