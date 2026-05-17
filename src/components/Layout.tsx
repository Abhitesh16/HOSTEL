import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Bell, BedDouble, AlertCircle, Menu, X, CreditCard, LogIn, LogOut, Compass } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, loginWithGoogle, logout } = useAuth();


  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Explore Hostel', href: '/explore', icon: Compass },
    { name: 'Bulletin', href: '/notices', icon: Bell },
    { name: 'Accommodation', href: '/booking', icon: BedDouble },
    { name: 'Complaints', href: '/complaints', icon: AlertCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-sky-600 text-white px-4 sm:px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-white rounded-full hidden sm:flex items-center justify-center shrink-0 p-1">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/6/6e/Assam_University_Logo.png" 
              alt="Assam University Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-tight">ASSAM UNIVERSITY</h1>
            <p className="text-[10px] uppercase tracking-widest opacity-80">Hostel Management Portal</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'hover:text-sky-100 transition-colors',
                  isActive ? 'underline underline-offset-4' : ''
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        {/* User Profile (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {currentUser ? (
            <>
              <div className="text-right">
                <p className="text-xs font-semibold">{currentUser.displayName}</p>
                <p className="text-[10px] opacity-70 cursor-pointer hover:underline" onClick={logout}>
                  Logout
                </p>
              </div>
              {currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt="User profile" className="w-8 h-8 rounded-full border-2 border-white shrink-0 object-cover" />
              ) : (
                <div className="w-8 h-8 bg-sky-400 rounded-full border-2 border-white shrink-0 flex items-center justify-center">
                  {currentUser.displayName?.[0]}
                </div>
              )}
            </>
          ) : (
            <Link 
              to="/login"
              className="flex items-center gap-2 px-4 py-2 bg-sky-700 hover:bg-sky-600 rounded-lg text-sm font-semibold transition-colors border border-sky-500 text-white"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-sky-500 transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-sky-500 bg-sky-600 shadow-md absolute w-full z-40 top-[72px]">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-sky-500 text-white'
                      : 'text-slate-50 hover:bg-sky-500/50 hover:text-white'
                  )}
                >
                  <item.icon className="h-5 w-5 opacity-80" />
                  {item.name}
                </Link>
              );
            })}
            {currentUser ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  logout();
                }}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors text-slate-50 hover:bg-sky-500/50 hover:text-white"
              >
                <LogOut className="h-5 w-5 opacity-80" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors text-slate-50 hover:bg-sky-500/50 hover:text-white"
              >
                <LogIn className="h-5 w-5 opacity-80" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-500 font-medium border-t border-slate-300">
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start gap-1">
          <span>© 2026 Assam University, Silchar. All rights reserved</span>
          <span>@Abhitesh Naha</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-0">
          <span>Emergency Helpdesk: +91 3842-270806</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="underline">IT Support</a>
          <Link to="/privacy" className="underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
