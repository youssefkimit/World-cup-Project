import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import Map from './components/Map';
import Translate from './components/Translate';


function Home() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/translate" exact element={<Translate/>}/>
            <Route path="/service" exact element={<Service/>}/>
            <Route path="/map" exact element={<Map/>}/>
        </Routes>
  </BrowserRouter>
  );
}

export default Home;
