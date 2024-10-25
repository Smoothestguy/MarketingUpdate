import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isAuthenticated() ? '/home' : '/auth');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#1a365d] flex items-center justify-center">
      <div className="text-center fade-in">
        <img 
          src="/adwebvertising-logo.png" 
          alt="AdWebvertising Academy"
          className="w-64 h-auto mb-8 mx-auto pulse"
        />
        <h1 className="text-3xl font-bold text-white mb-2">AdWebvertising Academy</h1>
        <p className="text-white opacity-80">Your Digital Marketing Journey Starts Here</p>
      </div>
    </div>
  );
}