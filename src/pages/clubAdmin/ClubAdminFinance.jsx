import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../../components/common/StatCard';
import { DollarSign, TrendingUp, ShoppingBag, Award } from 'lucide-react';

export const ClubAdminFinance = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-forest-800 tracking-tight">Club Financial Overview</h1>
        <p className="text-xs text-charcoal-muted mt-0.5">Assigned Scope: Oak Ridge Hunting Club Financials</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Membership Income" value="$2,180" subtext="84 Memberships" icon={Award} />
        <StatCard title="Event Revenue" value="$3,020" subtext="6 Sanctioned Trials" icon={TrendingUp} />
        <StatCard title="Store Merchandise" value="$1,590" subtext="Apparel & Badges" icon={ShoppingBag} />
        <StatCard title="Total Revenue" value="$6,790" subtext="YTD Net Earnings" icon={DollarSign} trend="+12% YTD" />
      </div>

      <div className="bg-surface-lowest p-6 rounded-xl border shadow-ambient space-y-4">
        <h3 className="font-extrabold text-base text-forest-800">Recent Financial Transactions</h3>
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-surface-low rounded border flex justify-between">
            <div><strong>Nite Hunt Entry Fees (39 Paid)</strong><div className="text-[10px] text-charcoal-light">Sep 19, 2026</div></div>
            <strong className="text-emerald-700 font-extrabold">+$1,170.00</strong>
          </div>
          <div className="p-3 bg-surface-low rounded border flex justify-between">
            <div><strong>Individual Membership Renewals (12)</strong><div className="text-[10px] text-charcoal-light">Sep 15, 2026</div></div>
            <strong className="text-emerald-700 font-extrabold">+$540.00</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
