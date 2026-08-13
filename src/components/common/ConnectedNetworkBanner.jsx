import React from 'react';
import {
  Network,
  Building2,
  Shield,
  Layers,
  Calendar,
  Users,
  ShoppingBag,
  DollarSign,
  Database,
  Lock,
  Cpu,
  ShieldCheck,
  ArrowDown
} from 'lucide-react';

export const ConnectedNetworkBanner = () => {
  const sharedSystems = [
    { name: 'Event System', icon: Calendar, desc: 'Unified hunt calendar, pre-signups & live schedules' },
    { name: 'Member System', icon: Users, desc: 'Digital membership credentials & automated roster management' },
    { name: 'Marketplace', icon: ShoppingBag, desc: 'Turnkey merchandise storefronts with margin share payouts' },
    { name: 'Accounting System', icon: DollarSign, desc: 'Automated revenue share & treasury ledger tracking' },
    { name: 'Database', icon: Database, desc: 'National canine pedigree records & official trial results' },
    { name: 'Login System', icon: Lock, desc: 'One single account across all 635+ club & state portals' },
    { name: 'Technology', icon: Cpu, desc: 'Mobile event check-ins & automated bench scorekeeping' },
  ];

  return (
    <div className="bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl space-y-10 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-tan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-tan-500/20 text-tan-300 border border-tan-500/40 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5" />
          <span>Connected Platform Architecture</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          A Connected Network of Platforms, <br className="hidden sm:block" />
          <span className="text-tan-400">Powered by Shared Infrastructure</span>
        </h2>
        <p className="text-xs sm:text-sm text-tan-100/80 font-medium leading-relaxed">
          UHC connects National, State, and Local Club platforms into one unified network — sharing technology, event tools, and databases while preserving each organization's individual identity.
        </p>
      </div>

      {/* 3-Tier Visual Network Hierarchy Diagram */}
      <div className="max-w-4xl mx-auto space-y-3 text-center">
        {/* Tier 1: National */}
        <div className="bg-forest-900/90 border-2 border-tan-400/80 p-4 rounded-2xl shadow-xl flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-tan-500 text-forest-950 font-black flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-[9px] font-black uppercase tracking-widest text-tan-300">Level 1 — Central Hub</span>
            <h3 className="text-base font-black text-white">Ultimate Hound Club — National Platform</h3>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-tan-400 animate-bounce" />
        </div>

        {/* Tier 2: 50 State Platforms */}
        <div className="bg-forest-900/70 border border-forest-700 p-4 rounded-2xl shadow-lg flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest-800 text-tan-300 font-black flex items-center justify-center shrink-0 border border-forest-700">
            <Layers className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-[9px] font-black uppercase tracking-widest text-tan-300">Level 2 — State Governance</span>
            <h3 className="text-base font-black text-white">50 Connected State Platforms (TX, AR, LA, OK, MO, etc.)</h3>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-tan-400 animate-bounce" />
        </div>

        {/* Tier 3: Local Club Platforms */}
        <div className="bg-forest-900/50 border border-forest-800 p-4 rounded-2xl shadow-md flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest-800/80 text-tan-300 font-black flex items-center justify-center shrink-0 border border-forest-700">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-[9px] font-black uppercase tracking-widest text-tan-300">Level 3 — Local Community</span>
            <h3 className="text-base font-black text-white">Hundreds of Connected Local Club Platforms</h3>
          </div>
        </div>
      </div>

      {/* 7 Shared Systems Grid */}
      <div className="space-y-4 pt-4 border-t border-forest-800">
        <div className="text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-tan-400">Shared Network Systems</span>
          <h3 className="text-lg font-black text-white mt-0.5">Common Systems Across All Connected Platforms</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sharedSystems.map((sys, idx) => {
            const IconComponent = sys.icon;
            return (
              <div key={idx} className="bg-forest-900/80 p-4 rounded-2xl border border-forest-800 space-y-2 hover:border-tan-500/50 transition-all">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-tan-500/20 text-tan-300 flex items-center justify-center shrink-0 border border-tan-500/30">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-xs text-white">{sys.name}</h4>
                </div>
                <p className="text-[11px] text-tan-200/80 font-medium leading-tight">{sys.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Individual Identity Guarantee Badge */}
      <div className="p-4 rounded-2xl bg-forest-900/90 border border-tan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-tan-500 text-forest-950 flex items-center justify-center shrink-0 shadow">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-xs text-white">100% Individual Platform Identity Maintained</h4>
            <p className="text-[11px] text-tan-200/80 font-medium">
              Every State Platform and Local Club Platform preserves its distinct logo, officers, local rules, and independent identity.
            </p>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-xl bg-tan-500 text-forest-950 font-black text-[10px] uppercase tracking-wider shrink-0 shadow">
          Identity Preserved
        </span>
      </div>
    </div>
  );
};
