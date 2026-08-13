import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../../components/common/StatCard';
import { Globe, MapPin, Building2, Users, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NationalAdminDashboard = () => {
  const { states, clubs, events, orders = [] } = useApp();

  const clubOrders = orders.filter((o) => o.originType === 'CLUB');
  const stateOrders = orders.filter((o) => o.originType === 'STATE');
  const nationalOrders = orders.filter((o) => o.originType === 'NATIONAL');

  const clubSalesTotal = clubOrders.reduce((a, b) => a + (Number(b.sellingPrice || b.total) || 0), 0);
  const clubCommissionsTotal = clubOrders.reduce((a, b) => a + (Number(b.clubShare) || 0), 0);

  const stateSalesTotal = stateOrders.reduce((a, b) => a + (Number(b.sellingPrice || b.total) || 0), 0);
  const stateCommissionsTotal = stateOrders.reduce((a, b) => a + (Number(b.stateShare) || 0), 0);

  const nationalSalesTotal = nationalOrders.reduce((a, b) => a + (Number(b.sellingPrice || b.total) || 0), 0);
  const nationalCommissionsTotal = orders.reduce((a, b) => a + (Number(b.nationalShare) || 0), 0);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-forest-800 text-white rounded-xl p-6 lg:p-8 shadow-ambient flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-tan-400">Assigned Scope: National Organization</span>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight mt-1">National Operations Dashboard</h1>
          <p className="text-xs text-tan-200 mt-1">Governance and oversight across all 50 State Associations and 635 Local Clubs.</p>
        </div>

        <Link to="/national-admin/states" className="px-4 py-2 bg-tan-500 hover:bg-tan-600 text-forest-900 font-extrabold text-xs rounded-lg shadow">
          Explore All 50 States
        </Link>
      </div>

      {/* National KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total State Charters" value="50" subtext="All US States Active" icon={MapPin} />
        <StatCard title="Total Registered Clubs" value="635" subtext="Local Clubs Nationwide" icon={Building2} />
        <StatCard title="Total Active Members" value="48,526" subtext="Individual & Family" icon={Users} trend="+14% YTD" />
        <StatCard title="National Share Earned" value={`$${nationalCommissionsTotal.toFixed(2)}`} subtext="Merchandise Margin Share" icon={DollarSign} trend="+18% YTD" />
      </div>

      {/* Store Channel Sales Breakdown */}
      <div className="bg-surface-lowest p-6 rounded-xl border border-surface-border shadow-ambient space-y-4">
        <div className="flex items-center justify-between border-b border-surface-border pb-3">
          <div>
            <h3 className="font-extrabold text-base text-forest-950 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-tan-600" /> Store Sales & Margin Payout Breakdown by Channel
            </h3>
            <p className="text-xs text-charcoal-muted mt-0.5">Real-time breakdown of sales originating from Local Clubs, State Associations, and National HQ.</p>
          </div>
          <Link to="/national-admin/analytics" className="px-3 py-1.5 bg-forest-900 text-white font-black text-xs rounded-lg hover:bg-forest-950">
            Full Financial Reports
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Local Club Channel */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-emerald-900 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-700" /> Local Club Site Sales
              </span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-700 text-white">15% Club Margin</span>
            </div>
            <div className="text-xl font-black text-emerald-950">${clubSalesTotal.toFixed(2)}</div>
            <div className="text-[11px] text-emerald-800 font-extrabold">
              Club Payout Owed: <span className="font-black text-emerald-950">${clubCommissionsTotal.toFixed(2)}</span> ({clubOrders.length} Orders)
            </div>
          </div>

          {/* State Association Channel */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-amber-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-700" /> State Association Sales
              </span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-700 text-white">7% State Margin</span>
            </div>
            <div className="text-xl font-black text-amber-950">${stateSalesTotal.toFixed(2)}</div>
            <div className="text-[11px] text-amber-800 font-extrabold">
              State Payout Owed: <span className="font-black text-amber-950">${stateCommissionsTotal.toFixed(2)}</span> ({stateOrders.length} Orders)
            </div>
          </div>

          {/* Main National HQ Channel */}
          <div className="p-4 rounded-xl border border-forest-800/30 bg-forest-950 text-white space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-tan-300 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-tan-400" /> Main National HQ Sales
              </span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-tan-500 text-forest-950">100% National Margin</span>
            </div>
            <div className="text-xl font-black text-white">${nationalSalesTotal.toFixed(2)}</div>
            <div className="text-[11px] text-tan-200 font-extrabold">
              Direct National Revenue: <span className="font-black text-white">${nationalSalesTotal.toFixed(2)}</span> ({nationalOrders.length} Orders)
            </div>
          </div>
        </div>
      </div>

      {/* USA Activity Grid & State Ranks */}
      <div className="bg-surface-lowest p-6 rounded-xl border shadow-ambient space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-base text-forest-800 flex items-center gap-2">
            <Globe className="w-5 h-5 text-tan-500" /> State Association Performance Leaderboard
          </h3>
          <Link to="/national-admin/states" className="text-xs font-bold text-forest-800 hover:underline">
            View All States
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {states.map((st) => (
            <div key={st.id} className="p-4 rounded-xl border bg-surface-low space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-sm text-forest-800">{st.name} ({st.code})</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border">{st.status}</span>
              </div>
              <div className="text-charcoal-muted">{st.clubsCount} Clubs • {st.membersCount} Members • {st.eventsCount} Events</div>
              <div className="pt-2 border-t font-extrabold text-charcoal">Revenue: ${st.revenue.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
