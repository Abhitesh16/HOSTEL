import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Receipt, CheckCircle2, ShieldCheck, Wallet, Clock, Download, ArrowRight, Building } from 'lucide-react';
import { cn } from '../lib/utils';

export function Payments() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);

  const invoicesList = [
    { id: 'room', title: 'Room Rent', subtitle: 'October 2024', amount: 3000 },
    { id: 'mess', title: 'Mess Fee', subtitle: 'October 2024', amount: 3500 },
  ];
  
  const [selectedInvoiceIds, setSelectedInvoiceIds] = useState<string[]>(['room', 'mess']);

  const toggleInvoice = (id: string) => {
    setSelectedInvoiceIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalPayable = invoicesList
    .filter(i => selectedInvoiceIds.includes(i.id))
    .reduce((acc, curr) => acc + curr.amount, 0);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalPayable === 0) return;
    setPaidAmount(totalPayable);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto mt-8 bg-white p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-700 mb-2">Payment Successful</h2>
        <p className="text-sm text-slate-500 mb-6 max-w-md">
          Your payment of <strong className="text-slate-700">₹{paidAmount.toLocaleString('en-IN')}</strong> has been processed successfully. A receipt has been sent to your registered email ID.
        </p>
        
        <div className="w-full max-w-sm bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 text-left space-y-3 flex flex-col">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Transaction ID</span>
            <span className="font-bold text-slate-700 font-mono">TXN-AU-849201D</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Date & Time</span>
            <span className="font-bold text-slate-700">{new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Payment Mode</span>
            <span className="font-bold text-slate-700 uppercase">{paymentMethod}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Download Receipt
          </button>
          <button 
            onClick={() => {
              navigate('/');
            }}
            className="px-6 py-2.5 bg-sky-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-sky-100 hover:bg-sky-500 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-rose-500 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
            <Wallet className="w-3 h-3" /> Total Due Amount
          </span>
          <span className="text-2xl font-bold text-slate-800">₹6,500</span>
          <span className="text-xs text-rose-500 font-medium mt-2 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Due in 5 Days
          </span>
        </div>
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-emerald-500 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Last Paid
          </span>
          <span className="text-2xl font-bold text-slate-800">₹6,500</span>
          <span className="text-xs text-slate-500 font-medium mt-2">
            Sep 10, 2024 • Mess & Room Fee
          </span>
        </div>
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-sky-400 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
            <Building className="w-3 h-3" /> Current Plan
          </span>
          <span className="text-lg font-bold text-slate-800 leading-tight">Double Seater + Mess</span>
          <span className="text-xs text-slate-500 font-medium mt-2">
            Valid until Dec 2024
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: Dues and History */}
        <div className="md:col-span-5 space-y-6">
          {/* Pending Invoices */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h2 className="font-bold text-slate-700 flex items-center gap-2">
                <Receipt className="w-4 h-4" /> Pending Invoices
              </h2>
              <span className="px-2 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold rounded uppercase tracking-wider">{invoicesList.length} Items</span>
            </div>
            <div className="p-0 divide-y divide-slate-100">
              {invoicesList.map(invoice => (
                <label key={invoice.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4 cursor-pointer">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      checked={selectedInvoiceIds.includes(invoice.id)}
                      onChange={() => toggleInvoice(invoice.id)}
                      className="w-4 h-4 text-sky-500 border-slate-300 rounded focus:ring-sky-400"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-bold text-slate-700">{invoice.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{invoice.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-800">₹{invoice.amount.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </label>
              ))}
              {invoicesList.length === 0 && (
                <div className="p-6 text-center text-sm text-slate-500">No pending dues!</div>
              )}
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Selected To Pay</span>
               <span className="text-lg font-bold text-sky-500">₹{totalPayable.toLocaleString('en-IN')}</span>
            </div>
          </section>

          {/* Transaction History */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
             <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-700 text-sm">Recent Transactions</h2>
                <button className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">View All</button>
             </div>
             <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                   <div className="flex gap-3 items-center">
                     <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-700">Mess Fee • Sep</p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Sep 10, 2024</p>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-slate-700">₹3,500</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex gap-3 items-center">
                     <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-700">Room Rent • Sep</p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Sep 05, 2024</p>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-slate-700">₹3,000</span>
                </div>
             </div>
          </section>
        </div>

        {/* Right Column: Payment Portal */}
        <div className="md:col-span-7">
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden h-full">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="font-bold text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Secure Checkout
              </h2>
            </div>
            
            <form onSubmit={handlePay} className="p-6 flex flex-col flex-grow">
              <div className="space-y-6 flex-grow">
                
                {/* Amount to Pay */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Amount to Pay</label>
                  <div className="w-full p-4 border border-sky-100 bg-white rounded-xl relative overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">Total Balance</span>
                    <div className="text-3xl font-black text-sky-600 mt-1">₹{totalPayable.toLocaleString('en-IN')}</div>
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <CreditCard className="w-16 h-16" />
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Select Payment Method</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={cn(
                        "py-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-2",
                        paymentMethod === 'upi' ? "border-sky-500 bg-white text-sky-600 shadow-sm" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      )}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className={cn("h-4", paymentMethod === 'upi' ? "opacity-100" : "opacity-60 grayscale")} />
                      UPI
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={cn(
                        "py-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-2",
                        paymentMethod === 'card' ? "border-sky-500 bg-white text-sky-600 shadow-sm" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      )}
                    >
                      <CreditCard className="w-5 h-5" />
                      Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                      className={cn(
                        "py-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-2",
                        paymentMethod === 'netbanking' ? "border-sky-500 bg-white text-sky-600 shadow-sm" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      )}
                    >
                      <Building className="w-5 h-5" />
                      Net Banking
                    </button>
                  </div>
                </div>

                {/* Dynamic Payment Fields */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {paymentMethod === 'upi' && (
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase">UPI ID / VPA</label>
                      <input type="text" placeholder="username@upi" required className="w-full p-2.5 border border-slate-200 bg-white rounded-lg text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow" />
                      <p className="text-[10px] text-slate-400">A payment request will be sent to your UPI app.</p>
                    </div>
                  )}
                  {paymentMethod === 'card' && (
                    <div className="space-y-3">
                       <label className="text-xs font-bold text-slate-500 uppercase">Card Number</label>
                       <input type="text" placeholder="XXXX XXXX XXXX XXXX" required className="w-full p-2.5 border border-slate-200 bg-white rounded-lg text-sm mb-3 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow" />
                       <div className="grid grid-cols-2 gap-3">
                         <input type="text" placeholder="MM/YY" required className="w-full p-2.5 border border-slate-200 bg-white rounded-lg text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow" />
                         <input type="text" placeholder="CVV" required className="w-full p-2.5 border border-slate-200 bg-white rounded-lg text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow" />
                       </div>
                    </div>
                  )}
                  {paymentMethod === 'netbanking' && (
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase">Select Bank</label>
                      <select required className="w-full p-2.5 border border-slate-200 bg-white rounded-lg text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-shadow">
                        <option value="">Select your bank...</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                      </select>
                    </div>
                  )}
                </div>

              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isProcessing || totalPayable === 0}
                  className="w-full py-3.5 bg-sky-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-sky-100 transition-colors hover:bg-sky-500 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay ₹{totalPayable.toLocaleString('en-IN')} Securely <ArrowRight className="w-4 h-4 ml-1" /></>
                  )}
                </button>
                <div className="flex justify-center items-center gap-1 mt-3 opacity-60">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">256-bit Encrypted Checkout</span>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
