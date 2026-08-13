import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../../components/common/StatCard';
import { FileSpreadsheet, TrendingUp, Users, Calendar, DollarSign, Download, BarChart2 } from 'lucide-react';

export const ReportsAnalyticsPage = ({ scopeTitle = 'Platform Analytics & Performance Reports' }) => {
  const { members, events, entries, orders, showToast } = useApp();

  const totalEntries = entries.length;
  const totalPaidEntries = entries.filter((e) => e.paymentStatus === 'Paid').length;
  const totalRevenue = orders.reduce((a, b) => a + Number(b.total || b.amount || 0), 0) + entries.reduce((a, b) => a + Number(b.fee || 0), 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-forest-800 tracking-tight">{scopeTitle}</h1>
          <p className="text-xs text-charcoal-muted mt-0.5">Comprehensive audit stats, event participation trends, and financial breakdown</p>
        </div>
        <button
          onClick={() => showToast('Generated & downloaded full analytics PDF report!', 'success')}
          className="px-4 py-2 bg-tan-500 hover:bg-tan-600 text-forest-900 font-extrabold text-xs rounded-lg shadow flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Download className="w-4 h-4" /> Download PDF Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total Platform Revenue" value={`$${totalRevenue.toFixed(2)}`} subtext="Events & Store Gross" icon={DollarSign} />
        <StatCard title="Total Registered Members" value={members.length.toString()} subtext="Active Roster" icon={Users} />
        <StatCard title="Sanctioned Events" value={events.length.toString()} subtext="Annual Trials & Hunts" icon={Calendar} />
        <StatCard title="Total Event Entries" value={totalEntries.toString()} subtext={`${totalPaidEntries} Paid Registrations`} icon={TrendingUp} />
      </div>

      {/* Visual Analytics Graphic Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Participation Distribution */}
        <div className="bg-surface-lowest p-6 rounded-xl border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-800 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-tan-600" /> Event Participation Breakdown
          </h3>
          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-extrabold text-charcoal mb-1">
                <span>Nite Hunt Trials</span>
                <span>65% (184 Entries)</span>
              </div>
              <div className="w-full h-3 bg-surface-low rounded-full overflow-hidden border">
                <div className="h-full bg-forest-800 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-extrabold text-charcoal mb-1">
                <span>Treeing & Bench Competitions</span>
                <span>22% (62 Entries)</span>
              </div>
              <div className="w-full h-3 bg-surface-low rounded-full overflow-hidden border">
                <div className="h-full bg-tan-500 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-extrabold text-charcoal mb-1">
                <span>Water Races & Speed Trials</span>
                <span>13% (38 Entries)</span>
              </div>
              <div className="w-full h-3 bg-surface-low rounded-full overflow-hidden border">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '13%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Revenue Streams */}
        <div className="bg-surface-lowest p-6 rounded-xl border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-800 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-tan-600" /> Revenue Stream Composition
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-surface-low rounded-lg border flex justify-between items-center">
              <div>
                <div className="font-extrabold text-charcoal">Event Registration Fees</div>
                <div className="text-[10px] text-charcoal-light">Direct entry payments</div>
              </div>
              <span className="font-black text-forest-800 text-sm">$4,850.00</span>
            </div>

            <div className="p-3 bg-surface-low rounded-lg border flex justify-between items-center">
              <div>
                <div className="font-extrabold text-charcoal">Official Store & Gear Merchandise</div>
                <div className="text-[10px] text-charcoal-light">Tracking collars, patches, apparel</div>
              </div>
              <span className="font-black text-forest-800 text-sm">$3,210.00</span>
            </div>

            <div className="p-3 bg-surface-low rounded-lg border flex justify-between items-center">
              <div>
                <div className="font-extrabold text-charcoal">Annual Club & State Membership Dues</div>
                <div className="text-[10px] text-charcoal-light">Renewals and new member passes</div>
              </div>
              <span className="font-black text-forest-800 text-sm">$2,450.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
