"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Tambahkan useRouter
import { LayoutDashboard, Smartphone, Database, LogOut } from 'lucide-react'; // Tambahkan LogOut

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter(); // Inisialisasi router

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Device', href: '/dashboard/devices', icon: Smartphone },
    { name: 'Data', href: '/dashboard/data', icon: Database },
  ];

  const handleLogout = () => {
    // Tambahkan logika hapus token/session di sini jika ada
    router.push('/login');
  };

  return (
    <>
      {/* === DESKTOP NAVBAR === */}
      <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10 font-[family-name:var(--font-jetbrains-mono)] hidden md:block">
        <div className="px-4 py-3 lg:px-6 max-w-7xl mx-auto grid grid-cols-3 items-center">
          
          <div className="flex justify-start">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
                <span className="text-blue-500">AETHERIS</span>
              </span>
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          {/* Bagian Kanan Desktop: Profile & Logout */}
          <div className="flex justify-end items-center space-x-4">
            <Link 
              href="/dashboard/profile" 
              className={`p-0.5 rounded-full border-2 transition-all ${
                pathname === "/dashboard/profile" 
                  ? "border-blue-500" 
                  : "border-transparent hover:border-white/20"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
                AF
              </div>
            </Link>
            
            {/* Tombol Logout */}
            <button 
              onClick={handleLogout}
              className="text-gray-400 hover:text-red-500 transition-colors p-1"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* === MOBILE HEADER === */}
      <div className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10 md:hidden px-4 py-3 flex justify-between items-center">
        <span className="text-lg font-bold tracking-tighter text-white italic uppercase">
          <span className="text-blue-500">AETHERIS</span>
        </span>
        
        <div className="flex items-center space-x-3">
          <Link href="/dashboard/profile">
            <div className={`w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase border-2 ${pathname === '/dashboard/profile' ? 'border-blue-500' : 'border-transparent'}`}>
              AF
            </div>
          </Link>
          
          <button onClick={handleLogout} className="text-gray-400 p-1">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* === MOBILE BOTTOM NAVBAR === */}
      <nav className="fixed bottom-0 z-50 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 md:hidden font-[family-name:var(--font-jetbrains-mono)]">
        <div className="grid grid-cols-3 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center space-y-1 relative"
              >
                <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                <span className={`text-[10px] font-medium uppercase tracking-wider ${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute top-0 w-8 h-0.5 bg-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;