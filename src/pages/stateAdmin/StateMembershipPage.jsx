import React from 'react';
import { useApp } from '../../context/AppContext';
import { DataTable } from '../../components/common/DataTable';
import { Award, ShieldCheck, RefreshCw } from 'lucide-react';

export const StateMembershipPage = () => {
  const { members = [], showToast } = useApp();

  const columns = [
    {
      header: 'Member ID',
      accessor: 'membershipId',
      render: (r) => <span className="font-mono font-bold text-forest-800">{r.membershipId}</span>
    },
    {
      header: 'Full Name',
      accessor: 'name',
      render: (r) => (
        <div>
          <div className="font-extrabold text-charcoal">{r.name}</div>
          <div className="text-[10px] text-charcoal-light">{r.email}</div>
        </div>
      )
    },
    { header: 'Charter Club', accessor: 'club' },
    { header: 'State', accessor: 'state' },
    { header: 'Membership Type', accessor: 'type' },
    { header: 'Expires', accessor: 'expires' },
    { header: 'Status', accessor: 'status', isStatus: true },
    {
      header: 'Action',
      accessor: 'id',
      render: (r) => (
        <button
          onClick={() => showToast(`Renewed membership for ${r.name}!`, 'success')}
          className="px-2.5 py-1 bg-tan-500 hover:bg-tan-600 text-forest-900 font-extrabold text-xs rounded shadow flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" /> Renew Dues
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-forest-800 tracking-tight">State Membership Roster</h1>
        <p className="text-xs text-charcoal-muted mt-0.5">State-wide registry of individual members, active charters, and renewal expiration dates</p>
      </div>

      <DataTable
        columns={columns}
        data={members}
        searchPlaceholder="Search by member ID, name, club..."
        filterField="status"
        filterOptions={['Active', 'Expired', 'Pending']}
      />
    </div>
  );
};
