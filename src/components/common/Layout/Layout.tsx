import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow h-full flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
