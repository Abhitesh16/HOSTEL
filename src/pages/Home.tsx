import { Link } from 'react-router-dom';
import { Bell, BedDouble, AlertCircle, ArrowRight, Building2, CreditCard, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

import regeneratedImage from '../assets/images/regenerated_image_1778102018331.jpg';

const campusImage = regeneratedImage;

export function Home() {
  const { currentUser } = useAuth();

  if (currentUser) {
    return (
      <div className="space-y-8">
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Welcome back, {currentUser.displayName || 'Student'}!</h1>
            <p className="text-slate-500">Here is an overview of your hostel status and recent updates.</p>
          </div>
          <div className="hidden sm:flex h-16 w-16 bg-sky-100 text-sky-600 rounded-full items-center justify-center">
            <User className="h-8 w-8" />
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Room Allocation</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <BedDouble className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">A-102</p>
                <p className="text-sm text-slate-500">Gents Hostel-05</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Pending Dues</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">₹0</p>
                <p className="text-sm text-slate-500">All clear</p>
              </div>
            </div>
            <Link to="/payments" className="mt-auto text-sm font-bold text-sky-600 hover:text-sky-700">View history &rarr;</Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Complaints</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">0</p>
                <p className="text-sm text-slate-500">Active issues</p>
              </div>
            </div>
            <Link to="/complaints" className="mt-auto text-sm font-bold text-sky-600 hover:text-sky-700">Report issue &rarr;</Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Notice Board Card */}
          <Link to="/notices" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-sky-400 flex flex-col hover:shadow-md hover:border-sky-100 transition-all group">
            <div className="mb-4 text-sky-400">
              <Bell className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-700 mb-2">Bulletin Board</h2>
            <p className="text-sm text-slate-500 flex-grow leading-relaxed">
              Check the latest announcements, event updates, and important guidelines from the administration.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-sky-500 opacity-80 group-hover:opacity-100 transition-opacity">
              View notices <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </Link>

          {/* Room Booking Card */}
          <Link to="/booking" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-emerald-500 flex flex-col hover:shadow-md hover:border-emerald-200 transition-all group">
            <div className="mb-4 text-emerald-500">
              <BedDouble className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-700 mb-2">Accommodation</h2>
            <p className="text-sm text-slate-500 flex-grow leading-relaxed">
              Apply for hostel accommodation, select your preferred room type, and manage your booking status.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity">
              Apply now <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </Link>

          {/* Fee Payment Card */}
          <Link to="/payments" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-rose-500 flex flex-col hover:shadow-md hover:border-rose-200 transition-all group">
            <div className="mb-4 text-rose-500">
              <CreditCard className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-700 mb-2">Fee Payments</h2>
            <p className="text-sm text-slate-500 flex-grow leading-relaxed">
              View fee structures, check pending dues, and securely pay your hostel and mess fees online.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-rose-600 opacity-80 group-hover:opacity-100 transition-opacity">
              Pay dues <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </Link>

          {/* Complaints Card */}
          <Link to="/complaints" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-orange-500 flex flex-col hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="mb-4 text-orange-500">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-700 mb-2">Support Desk</h2>
            <p className="text-sm text-slate-500 flex-grow leading-relaxed">
              Facing issues in your room? Register maintenance or disciplinary complaints easily for quick resolution.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-orange-600 opacity-80 group-hover:opacity-100 transition-opacity">
              Register complaint <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-sky-600 text-white shadow-md">
        <div className="absolute inset-0">
          <img 
            src={campusImage} 
            alt="University Campus Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/60 mix-blend-multiply"></div>
          <svg className="absolute h-full w-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col max-w-3xl">
          <span className="text-sky-200 font-bold tracking-widest uppercase text-xs mb-3">Welcome to your second home</span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
            Assam University <br />
            <span className="text-sky-100">Hostel Portal</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-50 mb-10 max-w-2xl leading-relaxed opacity-90">
            Manage your hostel accommodations seamlessly. Apply for rooms, stay updated with the latest announcements, and log maintenance requests all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/booking" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-sky-600 bg-white hover:bg-slate-50 transition-colors shadow-lg shadow-sky-100/20">
              <BedDouble className="mr-2 h-4 w-4" />
              Apply for Room
            </Link>
            <Link to="/notices" className="inline-flex items-center justify-center px-6 py-3 border-2 border-sky-500 text-sm font-bold rounded-lg text-white hover:bg-sky-500 transition-colors">
              <Bell className="mr-2 h-4 w-4" />
              View Notices
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Notice Board Card */}
        <Link to="/notices" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-sky-400 flex flex-col hover:shadow-md hover:border-sky-100 transition-all group">
          <div className="mb-4 text-sky-400">
            <Bell className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-700 mb-2">Bulletin Board</h2>
          <p className="text-sm text-slate-500 flex-grow leading-relaxed">
            Check the latest announcements, event updates, and important guidelines from the administration.
          </p>
          <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-sky-500 opacity-80 group-hover:opacity-100 transition-opacity">
            View notices <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </Link>

        {/* Room Booking Card */}
        <Link to="/booking" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-emerald-500 flex flex-col hover:shadow-md hover:border-emerald-200 transition-all group">
          <div className="mb-4 text-emerald-500">
            <BedDouble className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-700 mb-2">Accommodation</h2>
          <p className="text-sm text-slate-500 flex-grow leading-relaxed">
            Apply for hostel accommodation, select your preferred room type, and manage your booking status.
          </p>
          <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity">
            Apply now <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </Link>

        {/* Complaints Card */}
        <Link to="/complaints" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-orange-500 flex flex-col hover:shadow-md hover:border-orange-200 transition-all group">
          <div className="mb-4 text-orange-500">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-700 mb-2">Support Desk</h2>
          <p className="text-sm text-slate-500 flex-grow leading-relaxed">
            Facing issues in your room? Register maintenance or disciplinary complaints easily for quick resolution.
          </p>
          <div className="mt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-orange-600 opacity-80 group-hover:opacity-100 transition-opacity">
            Register complaint <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </Link>
      </section>
      
      {/* Admin Quick Look */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-sm border-l-4 border-l-sky-500">
        <div className="absolute -right-6 -top-6 text-slate-50 opacity-50 pointer-events-none">
          <Building2 className="w-48 h-48" />
        </div>
        <div className="relative z-10 w-full">
           <h3 className="text-sm font-bold text-slate-700 mb-1">Hostel Administration Hours</h3>
           <p className="text-sm text-slate-500">The administration office is open Monday to Friday, 10:00 AM to 5:00 PM. For emergencies outside these hours, please contact the warden on duty.</p>
        </div>
      </section>
    </div>
  );
}
