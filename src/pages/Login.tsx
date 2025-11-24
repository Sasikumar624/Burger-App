import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import logoSmall from '../assets/logo-small.png';
import iconEmail from '../assets/icon-email.png';
import iconPassword from '../assets/icon-password.png';
import iconCheck from '../assets/icon-check.png';
import iconGoogle from '../assets/icon-google.png';
import iconFacebook from '../assets/icon-facebook.png';
import { clsx } from 'clsx';

interface LoginProps {
  className?: string;
}

export const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <div className={clsx("min-h-screen bg-white px-6 py-8 flex flex-col items-center safe-area-view", className)}>
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-6 mt-8 mb-8">
        <img src={logoSmall} alt="Logo" className="h-12 object-contain" />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-text-dark">Sign in</h1>
          <p className="text-text-gray text-sm">sign in to your account via email</p>
        </div>
      </div>

      {/* Form */}
      <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Input 
          type="email" 
          placeholder="Enter your email" 
          icon={iconEmail} 
        />
        <Input 
          type="password" 
          placeholder="Enter your password" 
          icon={iconPassword} 
        />

        <div className="flex items-center justify-between w-full mt-2">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div className="w-5 h-5 rounded border border-border-light bg-input-bg flex items-center justify-center relative">
               <input type="checkbox" className="peer absolute w-full h-full opacity-0 cursor-pointer" />
               <img src={iconCheck} className="w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity" alt="checked" /> 
            </div>
            <span className="text-text-dark text-sm">Remember me</span>
          </label>
          <Link to="#" className="text-text-dark text-sm hover:underline">Forgot password?</Link>
        </div>

        <Button type="submit" variant="brand" fullWidth className="mt-6">
          sign in
        </Button>
      </form>

      {/* Social Login */}
      <div className="w-full mt-8 space-y-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-px bg-border-light"></div>
          <span className="relative bg-white px-4 text-text-gray text-sm">
            Sign in with social media
          </span>
        </div>

        <div className="space-y-3">
          <Button variant="outline" fullWidth icon={<img src={iconGoogle} className="w-5 h-5" alt="Google" />}>
            Sign in with Google
          </Button>
          <Button variant="outline" fullWidth icon={<img src={iconFacebook} className="w-5 h-5" alt="Facebook" />}>
            Sign in with facebook
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 text-sm text-text-dark text-center">
        Not a member, <Link to="#" className="font-medium text-orange-500 hover:underline">Create a new account</Link>
      </div>
    </div>
  );
};