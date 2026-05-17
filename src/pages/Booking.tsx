import React, { useState } from 'react';
import { CheckCircle2, Building, Info } from 'lucide-react';
import { cn } from '../lib/utils';
import { useUsers } from '../lib/data';

export function Booking() {
  const { addUser } = useUsers();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    course: '',
    year: '1',
    email: '',
    phone: '',
    gender: 'male',
    preferredHostel: 'APJ Abdul Kalam Chatra Niwas',
    specialRequirement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updates: any = { [name]: value };
      if (name === 'gender') {
        updates.preferredHostel = value === 'female' ? 'Baghini Nevedita Chatri Niwas' : 'APJ Abdul Kalam Chatra Niwas';
      }
      return { ...prev, ...updates };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      addUser(formData.name, formData.email);
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-700 mb-2">Request Submitted</h2>
        <p className="text-sm text-slate-500 mb-6 max-w-sm">
          Your room booking request has been received. 
          The administration will contact you shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 bg-sky-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-sky-100 hover:bg-sky-500 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="font-bold text-slate-700 flex items-center gap-2">
            <Building className="w-4 h-4" />
            Room Booking & Allocation
          </h2>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wider">Window Open</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Left Information Panel */}
          <div className="md:col-span-4 bg-slate-50 p-6 flex flex-col justify-between hidden md:flex">
            <div>
              <div className="mb-6 bg-slate-50 text-sky-500 p-3 rounded-xl inline-flex">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-2">Application Guidelines</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Allocation is subject to availability and the university's priority guidelines.
              </p>
              
              <div className="space-y-4 text-xs">
                <div className="border-l-2 border-sky-200 pl-3">
                  <p className="font-bold text-slate-600">Monthly Fees</p>
                  <p className="text-slate-500 mt-1">Room: ~₹3,000 • Mess: ₹3,500</p>
                </div>
                <div className="border-l-2 border-sky-200 pl-3">
                  <p className="font-bold text-slate-600">Facilities</p>
                  <p className="text-slate-500 mt-1">Mess, WiFi included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="md:col-span-8 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">Student Details</h3>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="studentId" className="text-xs font-bold text-slate-500 uppercase">Registration ID</label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      required
                      value={formData.studentId}
                      onChange={handleChange}
                      className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                      placeholder="AUS2026XXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course" className="text-xs font-bold text-slate-500 uppercase">Course Details</label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                      placeholder="B.Tech CS"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="year" className="text-xs font-bold text-slate-500 uppercase">Year of Study</label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                    >
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="pg">Post Graduate</option>
                      <option value="phd">Ph.D Scholar</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gender" className="text-xs font-bold text-slate-500 uppercase">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">Booking Preferences</h3>

                <div className="space-y-2">
                  <label htmlFor="preferredHostel" className="text-xs font-bold text-slate-500 uppercase">Preferred Hostel</label>
                  <select
                    id="preferredHostel"
                    name="preferredHostel"
                    value={formData.preferredHostel}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                  >
                    {formData.gender === 'female' ? (
                      <>
                        <option value="Baghini Nevedita Chatri Niwas">Baghini Nevedita Chatri Niwas</option>
                        <option value="Begum Rukia Chatri Niwas">Begum Rukia Chatri Niwas</option>
                        <option value="Ladies Hostel-06">Ladies Hostel-06</option>
                        <option value="Mother Terrasa Chatri Niwas">Mother Terrasa Chatri Niwas</option>
                        <option value="Sahid Kamala Chatri Niwas">Sahid Kamala Chatri Niwas</option>
                      </>
                    ) : (
                      <>
                        <option value="APJ Abdul Kalam Chatra Niwas">APJ Abdul Kalam Chatra Niwas</option>
                        <option value="Gents Hostel-05">Gents Hostel-05</option>
                        <option value="Ishwar Chandra Vidyasagar Chatra Niwas">Ishwar Chandra Vidyasagar Chatra Niwas</option>
                        <option value="Kaji Nazrul Islam Chatra Niwas">Kaji Nazrul Islam Chatra Niwas</option>
                        <option value="Sahid Khudiram Bose Chatra Niwas">Sahid Khudiram Bose Chatra Niwas</option>
                      </>
                    )}
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="specialRequirement" className="text-xs font-bold text-slate-500 uppercase">
                    Special Requirement (Optional)
                  </label>
                  <textarea
                    id="specialRequirement"
                    name="specialRequirement"
                    rows={3}
                    value={formData.specialRequirement}
                    onChange={handleChange}
                    placeholder="Any specific medical requirements or requests..."
                    className="w-full p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow resize-y"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-2 bg-sky-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-sky-100 transition-colors hover:bg-sky-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
