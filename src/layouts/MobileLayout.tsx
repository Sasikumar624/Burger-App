import React from 'react';
import { Outlet } from 'react-router-dom';

export const MobileLayout: React.FC = () => {
  return (
    <div className="max-w-[300px] mx-auto min-h-screen bg-white shadow-lg relative">
      <Outlet />
    </div>
  );
};