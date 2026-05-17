import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Search, Wrench, Zap, Wifi, Droplets, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

export function Complaints() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hostel: 'Baghini Nevedita Chatri Niwas',
    roomNumber: '',
    category: '',
    description: '',
  });

  const categories = [
    { id: 'electrical', name: 'Electrical', icon: Zap },
    { id: 'plumbing', name: 'Plumbing', icon: Droplets },
    { id: 'internet', name: 'Internet/WiFi', icon: Wifi },
    { id: 'furniture', name: 'Furniture', icon: Wrench },
    { id: 'disciplinary', name: 'Disciplinary', icon: ShieldAlert },
    { id: 'other', name: 'Other Issue', icon: Search },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category) {
      alert('Please select a complaint category before submitting.');
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-700 mb-2">Complaint Registered</h2>
        <p className="text-sm text-slate-500 mb-6 max-w-sm">
          Your complaint regarding <strong>{categories.find(c => c.id === formData.category)?.name}</strong> in {formData.hostel}, Room <strong>{formData.roomNumber}</strong> has been logged.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 bg-sky-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-sky-100 hover:bg-sky-500 transition-colors"
        >
          Register Another Complaint
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="font-bold text-slate-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Support & Maintenance Desk
          </h2>
          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase tracking-wider">Helpdesk</span>
        </div>
        
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Room Number & Urgency */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="hostel" className="text-xs font-bold text-slate-500 uppercase">
                    Hostel
                  </label>
                  <select
                    id="hostel"
                    name="hostel"
                    value={formData.hostel}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                  >
                    <option value="Baghini Nevedita Chatri Niwas">Baghini Nevedita Chatri Niwas</option>
                    <option value="Begum Rukia Chatri Niwas">Begum Rukia Chatri Niwas</option>
                    <option value="Ladies Hostel-06">Ladies Hostel-06</option>
                    <option value="Mother Terrasa Chatri Niwas">Mother Terrasa Chatri Niwas</option>
                    <option value="Sahid Kamala Chatri Niwas">Sahid Kamala Chatri Niwas</option>
                    <option value="APJ Abdul Kalam Chatra Niwas">APJ Abdul Kalam Chatra Niwas</option>
                    <option value="Gents Hostel-05">Gents Hostel-05</option>
                    <option value="Ishwar Chandra Vidyasagar Chatra Niwas">Ishwar Chandra Vidyasagar Chatra Niwas</option>
                    <option value="Kaji Nazrul Islam Chatra Niwas">Kaji Nazrul Islam Chatra Niwas</option>
                    <option value="Sahid Khudiram Bose Chatra Niwas">Sahid Khudiram Bose Chatra Niwas</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="roomNumber" className="text-xs font-bold text-slate-500 uppercase">
                    Room Number / Block
                  </label>
                  <input
                    type="text"
                    id="roomNumber"
                    name="roomNumber"
                    required
                    value={formData.roomNumber}
                    onChange={handleChange}
                    placeholder="e.g., A-102"
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-xs font-bold text-slate-500 uppercase">
                    Detailed Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the issue in detail..."
                    className="w-full p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow resize-y"
                  ></textarea>
                </div>
              </div>

              {/* Category */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 uppercase block">
                  Complaint Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={cn(
                        "flex flex-col gap-2 p-4 text-left rounded-xl transition-all border text-sm font-medium",
                        formData.category === cat.id 
                          ? "border-sky-500 bg-white text-sky-600 shadow-sm" 
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-200 hover:bg-slate-100"
                      )}
                    >
                      <cat.icon className={cn("w-5 h-5", formData.category === cat.id ? "text-sky-500" : "text-slate-400")} />
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="bg-white px-4 py-2 rounded-lg flex items-center justify-between w-full md:w-auto md:min-w-[250px] border border-slate-50">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-sky-500 uppercase tracking-wider">Status Preview</span>
                   <span className="text-xs font-semibold text-slate-700">Ticket #TKT-NEW</span>
                 </div>
                 <span className="px-2 py-1 bg-white text-sky-500 text-[10px] font-bold rounded shadow-sm border border-slate-50">DRAFT</span>
              </div>
             
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-slate-800 focus:ring-4 focus:ring-slate-900/20 transition-all"
              >
                Submit Complaint Ticket
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
