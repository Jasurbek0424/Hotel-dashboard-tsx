import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Details from './components/Details';
import Card from './components/Card';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/create' element={<Create />} />
      <Route path='/hotels/:id' element={<Details />} />
      <Route path='/' element={<Card />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
