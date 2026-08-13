import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../../components/common/StatCard';
import { DataTable } from '../../components/common/DataTable';
import {
  Users,
  CheckCircle2,
  XCircle,
  UserPlus,
  Clock,
  DollarSign,
  Award,
  Sparkles,
  HeartHandshake,
  RefreshCw,
  Search,
  Filter
} from 'lucide-react';

export const StateMembershipPage = () => {
  const { members = [], states, showToast } = useApp();
  const myState = states[0] || { name: 'Tennessee', code: 'TN', membersCount: 2845 };

  const [selectedFilterCategory, setSelectedFilterCategory] = useState('ALL');

  // Filter members for state scope or calculate realistic metrics scaled for state association
  const stateMembersList = members;

  // Exact 9 Client Required Membership Metrics
  const totalMembers = 3920;
  const activeMembers = 3450;
  const expiredMembers = 210;
  const newMembers = 145; // Joined this month
  const renewalsDue = 115; // Expiring within 30 days
  const membershipRevenue = 137200; // Total Dues Collected ($35.00/yr avg)
  const lifetimeMembers = 180;
  const youthMembers = 320;
  const familyMemberships = 480;

  // Filtered members list based on category selection
  const displayMembers = stateMembersList.filter((m) => {
    if (selectedFilterCategory === 'ALL') return true;
    if (selectedFilterCategory === 'ACTIVE') return m.status === 'Active';
    if (selectedFilterCategory === 'EXPIRED') return m.status === 'Expired';
    if (selectedFilterCategory === 'NEW') return m.isNew;
    if (selectedFilterCategory === 'RENEWALS_DUE') return m.status === 'Renewals Due' || m.isRenewalDue;
    if (selectedFilterCategory === 'LIFETIME') return m.type?.includes('Lifetime') || m.isLifetime;
    if (selectedFilterCategory === 'YOUTH') return m.type?.includes('Youth') || m.isYouth;
    if (selectedFilterCategory === 'FAMILY') return m.type?.includes('Family') || m.isFamily;
    return true;
  });

  const columns = [
    {
      header: 'Member ID & Name',
      accessor: 'name',
      render: (r) => (
        <div>
          <div className="font-extrabold text-forest-950 text-xs sm:text-sm">{r.name}</div>
          <div className="text-[10px] text-charcoal-muted font-mono">{r.membershipId} • {r.email}</div>
        </div>
      )
    },
    {
      header: 'Affiliated Local Club',
      accessor: 'club',
      render: (r) => <span className="font-bold text-xs text-charcoal">{r.club || 'Lone Star Hound Club'}</span>
    },
    {
      header: 'Membership Tier',
      accessor: 'type',
      render: (r) => (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
          r.type?.includes('Lifetime')
            ? 'bg-amber-100 text-amber-900 border border-amber-300'
            : r.type?.includes('Youth')
            ? 'bg-purple-100 text-purple-900 border border-purple-300'
            : r.type?.includes('Family')
            ? 'bg-blue-100 text-blue-900 border border-blue-300'
            : 'bg-tan-100 text-tan-900 border border-tan-300'
        }`}>
          {r.type || 'Individual Membership'}
        </span>
      )
    },
    {
      header: 'Joined Date',
      accessor: 'joined',
      render: (r) => <span className="text-xs text-charcoal-muted font-medium">{r.joined || 'Aug 01, 2026'}</span>
    },
    {
      header: 'Expiration Date',
      accessor: 'expires',
      render: (r) => <span className="text-xs font-bold text-charcoal">{r.expires || 'Aug 01, 2027'}</span>
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (r) => (
        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase ${
          r.status === 'Active'
            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
            : r.status === 'Renewals Due'
            ? 'bg-amber-100 text-amber-900 border border-amber-300'
            : 'bg-rose-100 text-rose-900 border border-rose-300'
        }`}>
          {r.status || 'Active'}
        </span>
      )
    },
    {
      header: 'Action',
      accessor: 'id',
      render: (r) => (
        <button
          onClick={() => showToast(`Successfully processed membership renewal for ${r.name}!`, 'success')}
          className="px-3 py-1.5 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-lg shadow flex items-center gap-1 transition-all"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Renew</span>
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* State Header Banner */}
      <div className="bg-forest-950 text-white rounded-2xl p-6 sm:p-8 border border-forest-800 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-0.5 rounded-full bg-tan-500 text-forest-950 text-[10px] font-black uppercase tracking-wider">
            State Association Governance
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
            State Membership Management System
          </h1>
          <p className="text-xs text-tan-200 mt-1">
            Real-time membership dashboard, active charter rosters, expiration tracking, and dues revenue for state officers.
          </p>
        </div>

        <button
          onClick={() => showToast('Exporting State Membership Roster PDF...', 'info')}
          className="px-4 py-2.5 bg-tan-500 hover:bg-tan-400 text-forest-950 font-black text-xs rounded-xl shadow transition-all self-start sm:self-auto shrink-0"
        >
          Export Official Roster
        </button>
      </div>

      {/* 📊 REQUIREMENT 2: THE 9 EXACT STATE MEMBERSHIP METRICS */}
      {/* 1. Total Members, 2. Active Members, 3. Expired Members, 4. New Members, 5. Renewals Due, 6. Membership Revenue, 7. Lifetime Members, 8. Youth Members, 9. Family Memberships */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-wider text-forest-950 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-tan-600" />
            <span>State Membership Analytics & Key Metrics</span>
          </h2>
          <span className="text-xs font-bold text-charcoal-muted">Click any metric card below to filter roster</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. Total Members */}
          <div
            onClick={() => setSelectedFilterCategory('ALL')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'ALL'
                ? 'bg-forest-950 text-white border-tan-500 shadow-lg ring-2 ring-tan-500/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider opacity-80">1. Total Members</span>
              <Users className="w-5 h-5 text-tan-500" />
            </div>
            <div className="text-2xl font-black mt-2">{totalMembers.toLocaleString()}</div>
            <div className="text-[10px] opacity-75 mt-0.5">Across all state chartered local clubs</div>
          </div>

          {/* 2. Active Members */}
          <div
            onClick={() => setSelectedFilterCategory('ACTIVE')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'ACTIVE'
                ? 'bg-emerald-950 text-white border-emerald-400 shadow-lg ring-2 ring-emerald-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">2. Active Members</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-emerald-900">{activeMembers.toLocaleString()}</div>
            <div className="text-[10px] text-emerald-700 font-bold mt-0.5">Current in good standing (88%)</div>
          </div>

          {/* 3. Expired Members */}
          <div
            onClick={() => setSelectedFilterCategory('EXPIRED')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'EXPIRED'
                ? 'bg-rose-950 text-white border-rose-400 shadow-lg ring-2 ring-rose-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700">3. Expired Members</span>
              <XCircle className="w-5 h-5 text-rose-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-rose-900">{expiredMembers.toLocaleString()}</div>
            <div className="text-[10px] text-rose-700 font-bold mt-0.5">Dues past expiration date</div>
          </div>

          {/* 4. New Members */}
          <div
            onClick={() => setSelectedFilterCategory('NEW')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'NEW'
                ? 'bg-blue-950 text-white border-blue-400 shadow-lg ring-2 ring-blue-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">4. New Members</span>
              <UserPlus className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-blue-900">+{newMembers.toLocaleString()}</div>
            <div className="text-[10px] text-blue-700 font-bold mt-0.5">Joined within last 30 days</div>
          </div>

          {/* 5. Renewals Due */}
          <div
            onClick={() => setSelectedFilterCategory('RENEWALS_DUE')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'RENEWALS_DUE'
                ? 'bg-amber-950 text-white border-amber-400 shadow-lg ring-2 ring-amber-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">5. Renewals Due</span>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-amber-900">{renewalsDue.toLocaleString()}</div>
            <div className="text-[10px] text-amber-800 font-bold mt-0.5">Expiring within 30 days</div>
          </div>

          {/* 6. Membership Revenue */}
          <div className="p-4 rounded-2xl border bg-surface-lowest border-surface-border text-charcoal shadow-ambient">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">6. Membership Revenue</span>
              <DollarSign className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-emerald-950">${membershipRevenue.toLocaleString()}.00</div>
            <div className="text-[10px] text-emerald-800 font-bold mt-0.5">Annual State Dues ($35.00/yr)</div>
          </div>

          {/* 7. Lifetime Members */}
          <div
            onClick={() => setSelectedFilterCategory('LIFETIME')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'LIFETIME'
                ? 'bg-purple-950 text-white border-purple-400 shadow-lg ring-2 ring-purple-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800">7. Lifetime Members</span>
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-purple-950">{lifetimeMembers.toLocaleString()}</div>
            <div className="text-[10px] text-purple-800 font-bold mt-0.5">Permanent state charter holders</div>
          </div>

          {/* 8. Youth Members */}
          <div
            onClick={() => setSelectedFilterCategory('YOUTH')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'YOUTH'
                ? 'bg-indigo-950 text-white border-indigo-400 shadow-lg ring-2 ring-indigo-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-800">8. Youth Members</span>
              <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-indigo-950">{youthMembers.toLocaleString()}</div>
            <div className="text-[10px] text-indigo-800 font-bold mt-0.5">Junior handlers (Under 18)</div>
          </div>

          {/* 9. Family Memberships */}
          <div
            onClick={() => setSelectedFilterCategory('FAMILY')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedFilterCategory === 'FAMILY'
                ? 'bg-teal-950 text-white border-teal-400 shadow-lg ring-2 ring-teal-400/50'
                : 'bg-surface-lowest hover:bg-surface-low border-surface-border text-charcoal shadow-ambient'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800">9. Family Memberships</span>
              <HeartHandshake className="w-5 h-5 text-teal-600" />
            </div>
            <div className="text-2xl font-black mt-2 text-teal-950">{familyMemberships.toLocaleString()}</div>
            <div className="text-[10px] text-teal-800 font-bold mt-0.5">Multi-member household charters</div>
          </div>
        </div>
      </div>

      {/* State Membership Roster Table */}
      <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-surface-border pb-3 gap-3">
          <div>
            <h3 className="font-extrabold text-base text-forest-950">
              State Membership Roster ({displayMembers.length} Displayed)
            </h3>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Active state charter members, tier breakdown, and expiration dates.
            </p>
          </div>

          {selectedFilterCategory !== 'ALL' && (
            <button
              onClick={() => setSelectedFilterCategory('ALL')}
              className="px-3 py-1 bg-tan-100 text-tan-900 font-bold text-xs rounded-lg border border-tan-300 self-start sm:self-auto"
            >
              Clear Category Filter
            </button>
          )}
        </div>

        <DataTable
          columns={columns}
          data={displayMembers}
          searchPlaceholder="Search member ID, name, club..."
          filterField="status"
          filterOptions={['Active', 'Renewals Due', 'Expired']}
        />
      </div>
    </div>
  );
};
