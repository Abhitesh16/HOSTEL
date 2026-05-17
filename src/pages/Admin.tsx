import React, { useState } from 'react';
import { Users, AlertTriangle, FileText, Settings, CreditCard, LogOut, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../lib/data';

function PostNotice({ onBack }: { onBack: () => void }) {
  const [success, setSuccess] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="text-xl font-bold text-slate-900">Post Notice</h2>
      </div>
      {success ? (
        <div className="text-center py-12">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Notice Posted Successfully</h3>
          <button onClick={() => setSuccess(false)} className="mt-4 text-sky-600 font-bold hover:underline">Post another notice</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Notice Title</label>
            <input type="text" required placeholder="e.g. End Semester Exam Schedule" className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Category</label>
            <select className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-400">
              <option>Academic</option>
              <option>Hostel</option>
              <option>Events</option>
              <option>General</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Content</label>
            <textarea required rows={5} placeholder="Write the detailed notice here..." className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-bold transition-colors shadow-lg shadow-sky-100">Publish Notice</button>
        </form>
      )}
    </div>
  );
}

function ManageUsers({ onBack }: { onBack: () => void }) {
  const { users } = useUsers();

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="text-xl font-bold text-slate-900">Manage Users</h2>
      </div>
      <div className="overflow-x-auto border border-slate-200 rounded-lg border-b-0">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-3 font-semibold text-slate-600">User ID</th>
              <th className="p-3 font-semibold text-slate-600">Full Name</th>
              <th className="p-3 font-semibold text-slate-600">Email Address</th>
              <th className="p-3 font-semibold text-slate-600">Status</th>
              <th className="p-3 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-3 text-slate-500 font-mono text-xs">{user.id}</td>
                <td className="p-3 font-medium text-slate-900">{user.name}</td>
                <td className="p-3 text-slate-500">{user.email}</td>
                <td className="p-3">
                  <span className={user.status === 'Active' ? "px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] uppercase font-bold tracking-wider rounded-full" : "px-2 py-1 bg-amber-100 text-amber-700 text-[10px] uppercase font-bold tracking-wider rounded-full"}>
                    {user.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button className="text-rose-600 hover:text-rose-700 font-bold text-xs" onClick={() => alert(`Suspend ${user.name}?`)}>Suspend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReviewComplaints({ onBack }: { onBack: () => void }) {
  const [complaints, setComplaints] = useState([
    { id: 1, title: 'Hostel Maintenance Issue', desc: 'Water tap is leaking continuously in Room 204, Gents Hostel 05.', status: 'Pending' },
    { id: 2, title: 'Wi-Fi connectivity problem', desc: 'Unable to connect to the campus Wi-Fi network in the library area.', status: 'Pending' },
    { id: 3, title: 'Classroom Projector out of focus', desc: 'The projector in Dept of Computer Science room 102 needs calibration.', status: 'Resolved' },
  ]);

  const markResolved = (id: number) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, status: 'Resolved' } : c));
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="text-xl font-bold text-slate-900">Review Complaints</h2>
      </div>
      <div className="space-y-4">
        {complaints.map(c => (
          <div key={c.id} className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-slate-900">{c.title}</h3>
              <span className={c.status === 'Pending' ? "px-2 py-1 bg-amber-100 text-amber-700 text-[10px] uppercase font-bold tracking-wider rounded-full" : "px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] uppercase font-bold tracking-wider rounded-full"}>
                {c.status}
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">{c.desc}</p>
            {c.status === 'Pending' && (
              <div className="flex gap-2">
                <button onClick={() => markResolved(c.id)} className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors">Mark Resolved</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemSettings({ onBack }: { onBack: () => void }) {
  const [success, setSuccess] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="text-xl font-bold text-slate-900">System Settings</h2>
      </div>
      {success && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-200 font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Settings saved successfully.</div>}
      <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); setTimeout(() => setSuccess(false), 3000); }} className="space-y-6 max-w-lg">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Current Academic Year</label>
          <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
            <option>2023-2024</option>
            <option>2024-2025</option>
            <option>2025-2026</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">Updates the default year shown across all student portals.</p>
        </div>
        
        <div className="border-t border-slate-100 pt-4">
          <label className="block text-sm font-bold text-slate-700 mb-2">System Maintenance Mode</label>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="maintenance" className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-600" />
            <label htmlFor="maintenance" className="text-sm font-medium text-slate-600">Enable Maintenance Mode</label>
          </div>
          <p className="text-xs text-slate-500 mt-1">When enabled, students will see a maintenance page instead of the login screen.</p>
        </div>
        
        <div className="pt-2">
          <button type="submit" className="px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-sky-100 transition-colors">Save All Settings</button>
        </div>
      </form>
    </div>
  );
}

export function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'post-notice' | 'manage-users' | 'review-complaints' | 'settings'>('dashboard');

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Admin Dashboard</h1>
                <p className="text-xs text-slate-500">University Management Portal</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {activeTab === 'post-notice' && <PostNotice onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'manage-users' && <ManageUsers onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'review-complaints' && <ReviewComplaints onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'settings' && <SystemSettings onBack={() => setActiveTab('dashboard')} />}

        {activeTab === 'dashboard' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Total Students</p>
                    <p className="text-2xl font-bold text-slate-900">1,248</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Active Complaints</p>
                    <p className="text-2xl font-bold text-slate-900">24</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Recent Payments</p>
                    <p className="text-2xl font-bold text-slate-900">86</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Hostel Requests</p>
                    <p className="text-2xl font-bold text-slate-900">15</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  <button onClick={() => setActiveTab('post-notice')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-slate-600 hover:text-sky-700">
                    <FileText className="w-8 h-8" />
                    <span className="text-sm font-medium">Post Notice</span>
                  </button>
                  <button onClick={() => setActiveTab('manage-users')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-slate-600 hover:text-sky-700">
                    <Users className="w-8 h-8" />
                    <span className="text-sm font-medium">Manage Users</span>
                  </button>
                  <button onClick={() => setActiveTab('review-complaints')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-slate-600 hover:text-sky-700">
                    <AlertTriangle className="w-8 h-8" />
                    <span className="text-sm font-medium">Review Complaints</span>
                  </button>
                  <button onClick={() => setActiveTab('settings')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-slate-600 hover:text-sky-700">
                    <Settings className="w-8 h-8" />
                    <span className="text-sm font-medium">System Settings</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { user: 'Student #234', action: 'submitted a new complaint', time: '10 minutes ago' },
                    { user: 'Admin User', action: 'posted a new bulletin notice', time: '1 hour ago' },
                    { user: 'Student #189', action: 'paid semester fee', time: '2 hours ago' },
                    { user: 'Student #441', action: 'requested hostel accommodation', time: '5 hours ago' },
                  ].map((activity, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div>
                        <span className="font-semibold text-slate-800">{activity.user}</span>
                        <span className="text-slate-600 ml-1">{activity.action}</span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </>
        )}
      </main>
    </div>
  );
}
