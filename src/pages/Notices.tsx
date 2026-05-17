import { Calendar, Bell } from 'lucide-react';
import { NOTICES } from '../lib/data';
import { cn } from '../lib/utils';

export function Notices() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-100 bg-slate-50 rounded-t-2xl flex justify-between items-center">
          <h2 className="font-bold text-slate-700 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Bulletin Board
          </h2>
          <span className="text-xs text-sky-500 font-semibold uppercase tracking-wider">{NOTICES.length} Notices</span>
        </div>
        
        <div className="p-6 flex flex-col gap-6">
          {NOTICES.map((notice) => (
            <article 
              key={notice.id} 
              className={cn(
                "border-l-2 pl-4",
                notice.category === 'Urgent' ? 'border-red-500' :
                notice.category === 'Event' ? 'border-emerald-500' : 'border-sky-200'
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  notice.category === 'Urgent' ? 'text-red-500' :
                  notice.category === 'Event' ? 'text-emerald-500' : 
                  'text-slate-400'
                )}>
                  {notice.category}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  &bull; {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                {notice.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {notice.content}
              </p>
            </article>
          ))}

          {NOTICES.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-slate-500">No notices currently available.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
