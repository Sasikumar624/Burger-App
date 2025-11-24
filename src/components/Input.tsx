import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export const Input: React.FC<InputProps> = ({ icon, className, ...props }) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
          <img src={icon} alt="" className="w-full h-full object-contain" />
        </div>
      )}
      <input
        className={`w-full h-[50px] bg-input-bg border border-border-light rounded-xl px-4 text-text-dark placeholder:text-text-gray focus:outline-none focus:border-brand transition-colors ${icon ? 'pl-12' : ''} ${className}`}
        {...props}
      />
    </div>
  );
};