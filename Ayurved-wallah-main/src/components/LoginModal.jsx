import React, { useState } from 'react';
import { X, Lock, Mail, UserCheck, ShieldCheck, ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [role, setRole] = useState('student');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDemoFill = () => {
    setIdentifier('dr.ananya.sharma@ayurvedwallah.edu');
    setPassword('AyurRanker#2026');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      if (onLoginSuccess) onLoginSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white border border-[#C49A45]/30 rounded-2xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Ornate Header */}
        <div className="bg-[#174C32] p-6 text-white text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C49A45]/20 rounded-full blur-xl pointer-events-none"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-[#C49A45]/40 mb-3">
            <span className="text-2xl">🌿</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white tracking-wide">
            Ayurved Wallah Portal
          </h3>
          <p className="text-xs text-[#FAF7EE]/80 mt-1">
            Access your live classes, mock tests & digital notes
          </p>

          {/* Role Switcher */}
          <div className="flex bg-[#0e3120] p-1 rounded-xl mt-4 border border-[#C49A45]/20">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                role === 'student' ? 'bg-[#C49A45] text-white shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              Student Portal
            </button>
            <button
              type="button"
              onClick={() => setRole('faculty')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                role === 'faculty' ? 'bg-[#C49A45] text-white shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              Faculty Portal
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex p-3 bg-[#EBF2E8] text-[#174C32] rounded-full">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#174C32]">Welcome Back, Scholar!</h4>
              <p className="text-xs text-[#58635B]">Redirecting you to your personalized learning dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                  {role === 'student' ? 'Roll No. or Registered Email' : 'Faculty ID / Email'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#78966B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={role === 'student' ? "e.g. AW-2025-0842 or email" : "e.g. fac.shastri@ayurvedwallah.edu"}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-[#FAF7EE]/60 border border-[#78966B]/30 rounded-xl text-sm text-[#242B25] placeholder-[#7E8A81] focus:outline-none focus:border-[#C49A45] focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-[#174C32] uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#contact" onClick={onClose} className="text-[11px] text-[#C49A45] hover:underline font-medium">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#78966B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="Enter your security password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-[#FAF7EE]/60 border border-[#78966B]/30 rounded-xl text-sm text-[#242B25] placeholder-[#7E8A81] focus:outline-none focus:border-[#C49A45] focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Demo Fill Helper */}
              <button
                type="button"
                onClick={handleDemoFill}
                className="w-full py-2 bg-[#FAF7EE] border border-dashed border-[#C49A45] text-[#174C32] text-xs rounded-xl font-medium hover:bg-[#EBF2E8] transition flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#C49A45]" />
                Auto-fill Demo Student Credentials
              </button>

              <button
                type="submit"
                className="w-full py-3 bg-[#174C32] text-white rounded-xl font-semibold text-sm hover:bg-[#216343] transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Enter Student Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <div className="pt-2 border-t border-[#FAF7EE] text-center">
                <p className="text-xs text-[#58635B]">
                  New to Ayurved Wallah?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      const el = document.getElementById('fee-structure');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#C49A45] font-bold hover:underline"
                  >
                    Enrol in a Batch
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Security badge */}
        <div className="bg-[#FAF7EE] px-6 py-3 flex items-center justify-between text-[11px] text-[#58635B]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#174C32]" />
            <span>256-Bit Encrypted Academic Portal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>App Sync Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
