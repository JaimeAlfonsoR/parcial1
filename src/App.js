import React from 'react';
import './App.css';
import Login1 from './componentes/login1';
import Login2 from './componentes/login2';
import Partes from './componentes/partes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './componentes/detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/partes" element={<Partes />} />
          <Route path="/Login2/:correo" element={<Login2 />} />
          <Route path="/partes/:parteId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
