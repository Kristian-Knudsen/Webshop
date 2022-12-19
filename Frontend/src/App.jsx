import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Features/Dashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={
          <div>
            <h1>404 - Not found!</h1>
            <a href="/">Return to dash</a>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App;