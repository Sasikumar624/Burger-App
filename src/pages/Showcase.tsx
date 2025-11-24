import React from 'react';
import { Welcome } from './Welcome';
import { Login } from './Login';

export const Showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap items-center justify-center gap-12 p-8">
      {/* Screen 1: Welcome */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold text-gray-600">Welcome Screen</h2>
        <div className="w-[393px] h-[852px] bg-white shadow-2xl rounded-[50px] overflow-hidden border-[8px] border-gray-800 relative">
          <div className="h-full overflow-y-auto no-scrollbar">
             <Welcome className="!min-h-full" />
          </div>
        </div>
      </div>

      {/* Screen 2: Login */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold text-gray-600">Login Screen</h2>
        <div className="w-[393px] h-[852px] bg-white shadow-2xl rounded-[50px] overflow-hidden border-[8px] border-gray-800 relative">
          <div className="h-full overflow-y-auto no-scrollbar">
             <Login className="!min-h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};