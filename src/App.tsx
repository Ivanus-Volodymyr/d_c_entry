import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/common';
import { Discount, GenerateCode, List } from './pages';

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Navigate to="/discount" />} />
          <Route path={'/discount'} element={<Discount />} />
          <Route path={'/generate-code'} element={<GenerateCode />} />
          <Route path={'/list'} element={<List />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
