import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../../components/common/StatCard';
import { Users, Calendar, ClipboardList, DollarSign, Plus, Trophy, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClubAdminDashboard = () => {
  const { clubs, members, events, entries, orders = [] } = useApp();
  const myClub = clubs[0] || {}; // Oak Ridge Hunting Club

  // Calculate Club Merchandise Sales & 15% Commissions
  const myClubOrders = orders.filter((o) => (o.club === myClub.name || o.orderSource === myClub.name || o.originType === 'CLUB'));
  const clubMerchSales = myClubOrders.reduce((a, b) => a + (Number(b.sellingPrice || b.total) || 0), 0);
  const clubCommissionsEarned = myClubOrders.reduce((a, b) => a + (Number(b.clubShare) || 0), 0);
  const pendingClubPayouts = myClubOrders.filter((o) => o.payoutStatus === 'Pending').reduce((a, b) => a + (Number(b.clubShare) || 0), 0);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-forest-800 text-white rounded-xl p-6 lg:p-8 shadow-ambient flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-tan-400">Assigned Scope: Local Club</span>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight mt-1">{myClub.name} Administration</h1>
          <p className="text-xs text-tan-200 mt-1">{myClub.city}, {myClub.state} • Established {myClub.estYear}</p>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/club-admin/events" className="px-3.5 py-2 bg-tan-500 hover:bg-tan-600 text-forest-900 font-extrabold text-xs rounded-lg shadow flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Create Event
          </Link>
          <Link to="/club-admin/members" className="px-3.5 py-2 bg-forest-900 hover:bg-forest-950 text-white font-extrabold text-xs rounded-lg border border-forest-700">
            Add Member
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total Club Members" value={myClub.membersCount.toString()} subtext="84 Active" icon={Users} trend="+4 this mo" />
        <StatCard title="Annual Events" value={myClub.eventsCount.toString()} subtext="6 Scheduled" icon={Calendar} />
        <StatCard title="Merchandise Sales" value={`$${clubMerchSales.toFixed(2)}`} subtext={`${myClubOrders.length} Club Store Orders`} icon={ClipboardList} />
        <StatCard title="Club Commission (15%)" value={`$${clubCommissionsEarned.toFixed(2)}`} subtext={`Pending Payout: $${pendingClubPayouts.toFixed(2)}`} icon={DollarSign} trend="+15% Margin Share" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-surface-lowest p-6 rounded-xl border shadow-ambient space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-forest-800 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-tan-500" /> Upcoming Club Events
            </h3>
            <Link to="/club-admin/events" className="text-xs font-bold text-forest-800 hover:underline">
              Manage Events
            </Link>
          </div>

          <div className="space-y-3">
            {events.slice(0, 2).map((e) => (
              <div key={e.id} className="p-3.5 rounded-lg border bg-surface-low flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-charcoal">{e.name}</div>
                  <div className="text-[10px] text-charcoal-light">{e.date} • {e.entries}/{e.maxCapacity} Entries</div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-tan-100 text-tan-900 border border-tan-300">
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Member Registrations */}
        <div className="bg-surface-lowest p-6 rounded-xl border shadow-ambient space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-forest-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-tan-500" /> Recent Club Members
            </h3>
            <Link to="/club-admin/members" className="text-xs font-bold text-forest-800 hover:underline">
              View All 84 Members
            </Link>
          </div>

          <div className="space-y-3">
            {members.slice(0, 3).map((m) => (
              <div key={m.id} className="p-3 rounded-lg border bg-surface-low flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-charcoal">{m.name}</div>
                  <div className="text-[10px] text-charcoal-light">{m.membershipId} • {m.type}</div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800">
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Club Store Orders & 15% Revenue Split Table */}
      <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4">
        <div className="flex items-center justify-between border-b border-surface-border pb-3">
          <div>
            <h3 className="font-extrabold text-base text-forest-950 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-700" />
              <span>Oak Ridge Club Merchandise Orders & 15% Share Ledger</span>
            </h3>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Transparent breakdown showing order value, 15% local club share ($), 7% state share, 8% national share, and vendor payout.
            </p>
          </div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-lg border border-emerald-300">
            Total Club Margin: ${clubCommissionsEarned.toFixed(2)}
          </span>
        </div>

        {myClubOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-low text-charcoal font-black uppercase text-[10px] tracking-wider border-b border-surface-border">
                <tr>
                  <th className="p-3">Order ID & Customer</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3 text-right">Selling Price</th>
                  <th className="p-3 text-right text-emerald-700">Club Share (15%)</th>
                  <th className="p-3 text-right text-amber-700">State Share (7%)</th>
                  <th className="p-3 text-right text-forest-900">National (8%)</th>
                  <th className="p-3 text-center">Payout Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border font-medium">
                {myClubOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-surface-low/60 transition-colors">
                    <td className="p-3 font-bold text-forest-950">
                      <div>{o.customer}</div>
                      <div className="text-[10px] text-charcoal-muted font-mono">{o.id} • {o.date || 'Aug 10'}</div>
                    </td>
                    <td className="p-3 font-semibold text-charcoal">{o.product || o.items}</td>
                    <td className="p-3 text-right font-black text-forest-950">${(Number(o.sellingPrice || o.total) || 0).toFixed(2)}</td>
                    <td className="p-3 text-right font-black text-emerald-800 bg-emerald-50/50">${(Number(o.clubShare) || 0).toFixed(2)}</td>
                    <td className="p-3 text-right font-extrabold text-amber-800">${(Number(o.stateShare) || 0).toFixed(2)}</td>
                    <td className="p-3 text-right font-extrabold text-forest-900">${(Number(o.nationalShare) || 0).toFixed(2)}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                        o.payoutStatus === 'Approved' || o.payoutStatus === 'Paid'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        {o.payoutStatus || 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-charcoal-muted bg-surface-low rounded-xl border">
            No merchandise orders recorded for this club scope yet.
          </div>
        )}
      </div>
    </div>
  );
};
