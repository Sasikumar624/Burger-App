import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import logoLarge from '../assets/logo-large.png';
import { clsx } from 'clsx';

interface WelcomeProps {
  className?: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={clsx("min-h-screen bg-white flex flex-col items-center px-8 py-12 safe-area-view", className)}>
      {/* Centered Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full">
        <img src={logoLarge} alt="Logo" className="w-[180px] object-contain" />
        <h1 className="text-text-dark text-center font-medium text-2xl max-w-[200px] leading-tight">
          we make burgers to die for
        </h1>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full flex flex-col gap-4 mb-8">
        <Button variant="primary" fullWidth onClick={() => navigate('/login')}>
          Sign in
        </Button>
        <Button variant="brand" fullWidth onClick={() => navigate('/login')}>
          Get Started
        </Button>
      </div>
    </div>
  );
};