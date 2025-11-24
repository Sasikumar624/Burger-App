import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'brand';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className,
  icon,
  ...props 
}) => {
  const baseStyles = "h-[50px] rounded-xl font-medium text-base flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-text-dark text-white shadow-md active:bg-black", // Based on Figma 'Sign in' button on Welcome
    brand: "bg-brand text-white shadow-md active:bg-orange-600", // Based on 'Get Started' and Login 'sign in'
    secondary: "bg-brand text-white shadow-md active:bg-orange-600", // Mapping secondary to brand for now based on usage
    outline: "bg-white border border-border-light text-text-dark active:bg-gray-50",
  };

  return (
    <button 
      className={clsx(
        baseStyles, 
        variants[variant], 
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-3 flex items-center">{icon}</span>}
      {children}
    </button>
  );
};