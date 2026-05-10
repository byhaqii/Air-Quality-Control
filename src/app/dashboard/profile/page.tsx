"use client";

import React, { useState } from 'react';
import { User, Mail, MapPin, GraduationCap, Calendar, ShieldCheck, Lock, Info, Camera, Edit3, Save, X } from 'lucide-react';
import { AboutOverview } from "@/components/sections/about-overview";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'password' | 'about'>('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Golden Christian",
    email: "golden.christian@polinema.ac.id",
    location: "Malang, Indonesia",
    program: "D-IV Informatics Engineering",
    semester: "6th Semester",
    institution: "Politeknik Negeri Malang",
    role: "Informatics Student"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 font-[family-name:var(--font-jetbrains-mono)] max-w-4xl mx-auto">
      {/* Header Halaman */}
      <div className="flex flex-col gap-1 text-center md:text-left">
        <h1 className="text-2xl font-bold tracking-tight text-white">Account Settings</h1>
        <p className="text-sm text-gray-400">Manage your identity and system information.</p>
      </div>

      {/* Segmented Control Tabs (Sesuai Gambar) */}
      <div className="bg-white/5 p-1 rounded-xl flex gap-1 border border-white/10">
        <button 
          onClick={() => { setActiveTab('profile'); setIsEditing(false); }}
          className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${activeTab === 'profile' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          Profile Info
        </button>
        <button 
          onClick={() => { setActiveTab('password'); setIsEditing(false); }}
          className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${activeTab === 'password' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          Password
        </button>
        <button 
          onClick={() => { setActiveTab('about'); setIsEditing(false); }}
          className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${activeTab === 'about' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          About System
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-8">
        {activeTab === 'profile' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-6 md:p-10 flex flex-col items-center">
            
            {/* Action Buttons */}
            <div className="w-full flex justify-end mb-6">
              {!isEditing ? (
                <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/10 transition-all">
                  <Edit3 className="w-3.5 h-3.5" /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-red-500/10 text-red-400 text-xs rounded-lg border border-red-500/20"><X className="w-3.5 h-3.5" /></button>
                  <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs rounded-lg shadow-lg"><Save className="w-3.5 h-3.5" /> Save</button>
                </div>
              )}
            </div>

            {/* Profile Photo (Center) */}
            <div className="relative group mb-8">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                AF
              </div>
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <Camera className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Info Grid */}
            <div className="w-full space-y-6">
              <div className="text-center border-b border-white/10 pb-6">
                {isEditing ? (
                  <input name="name" value={profileData.name} onChange={handleChange} className="text-2xl font-bold bg-white/5 border border-white/10 rounded px-4 py-2 w-full text-center text-white outline-none focus:border-blue-500" />
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-white mb-2">{profileData.name}</h2>
                    <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full gap-2 border border-blue-500/20">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{profileData.role}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase mb-2">Email Address</p>
                    {isEditing ? <input name="email" value={profileData.email} onChange={handleChange} className="bg-transparent border-b border-blue-500 w-full text-white py-1 outline-none"/> : <p className="text-sm text-gray-200 truncate">{profileData.email}</p>}
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase mb-2">Location</p>
                    {isEditing ? <input name="location" value={profileData.location} onChange={handleChange} className="bg-transparent border-b border-blue-500 w-full text-white py-1 outline-none"/> : <p className="text-sm text-gray-200">{profileData.location}</p>}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase mb-2">Academic Program</p>
                    {isEditing ? <input name="program" value={profileData.program} onChange={handleChange} className="bg-transparent border-b border-blue-500 w-full text-white py-1 outline-none"/> : <p className="text-sm text-gray-200">{profileData.program}</p>}
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase mb-2">Current Semester</p>
                    {isEditing ? <input name="semester" value={profileData.semester} onChange={handleChange} className="bg-transparent border-b border-blue-500 w-full text-white py-1 outline-none"/> : <p className="text-sm text-gray-200">{profileData.semester}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Password & About tetap konsisten dengan gaya kartu ini */}
        {activeTab === 'password' && (
           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
             <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2"><Lock className="w-5 h-5 text-blue-500" /> Reset Password</h3>
             <div className="space-y-5">
                {['Current Password', 'New Password', 'Confirm'].map((label) => (
                  <div key={label}>
                    <label className="block text-[10px] text-gray-500 uppercase mb-2">{label}</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                ))}
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all">Update Security</button>
             </div>
           </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <AboutOverview />
          </div>
        )}
      </div>
    </div>
  );
}