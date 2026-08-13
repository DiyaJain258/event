import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { PreSignUpModal } from '../../components/events/PreSignUpModal';
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  Trophy,
  Award,
  Mail,
  Phone,
  ShieldCheck,
  UserCheck,
  Search,
  ShoppingBag,
  ChevronRight,
  ArrowRight,
  Filter
} from 'lucide-react';

export const PublicClubPage = () => {
  const { clubId } = useParams();
  const { clubs, events, products, news, results, states, addToCart, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('');
  const [selectedEventForPreSignUp, setSelectedEventForPreSignUp] = useState(null);

  // If clubId is present in URL
  const isDedicatedPage = Boolean(clubId);
  const currentClub = clubs.find((c) => c.id === clubId || c.name.toLowerCase().includes(clubId?.toLowerCase()));

  // Filter clubs for listing view
  const filteredClubs = clubs.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = !selectedStateFilter || c.stateCode === selectedStateFilter || c.state === selectedStateFilter;
    return matchesSearch && matchesState;
  });

  // Data scoped to selected Club
  const club = currentClub || clubs[0];
  const clubEvents = events.filter((e) => e.club === club.name || e.clubId === club.id);
  const clubProducts = products.filter(
    (p) =>
      (p.scopeChannel === 'LOCAL_CLUB' || p.organizationType === 'CLUB') &&
      (p.scopeEntity === club.name || p.organizationId === club.id)
  );
  // Fallback club products if specific club has no custom items
  const displayProducts = clubProducts.length > 0 ? clubProducts : products.filter((p) => p.scopeChannel === 'LOCAL_CLUB');

  const clubNews = news.filter((n) => n.summary?.includes(club.name) || n.author?.includes(club.name));
  const clubResults = results.filter((r) => r.club === club.name);

  const mockOfficers = [
    { name: club.adminName || 'Robert Miller', title: 'Club President', term: '2025 - 2027', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { name: 'Cody Campbell', title: 'Vice President & Master of Hounds', term: '2026 - 2028', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
    { name: 'Sarah Jenkins', title: 'Secretary & Treasurer', term: '2025 - 2027', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' }
  ];

  // -------------------------------------------------------------
  // VIEW 1: Local Clubs Directory Listing (/clubs)
  // -------------------------------------------------------------
  if (!isDedicatedPage) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
        {/* Header Banner */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl space-y-6">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
            Nationwide Club Network
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Local Chartered Clubs
          </h1>
          <p className="text-xs sm:text-sm text-tan-200 max-w-2xl font-medium leading-relaxed">
            Every local club operates its own dedicated digital portal for local hunt entries, member accounting, officer rosters, and customized merchandise stores with profit payouts.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search club name, city, or zip..."
                className="w-full pl-10 pr-4 py-3 text-xs bg-surface-lowest text-charcoal border border-surface-border rounded-xl font-semibold focus:outline-none focus:border-tan-500"
              />
            </div>

            <div className="w-full sm:w-48">
              <select
                value={selectedStateFilter}
                onChange={(e) => setSelectedStateFilter(e.target.value)}
                className="w-full px-3 py-3 text-xs bg-surface-lowest border border-surface-border rounded-xl font-bold text-charcoal focus:border-tan-500 cursor-pointer"
              >
                <option value="">All States</option>
                {states.map((s) => (
                  <option key={s.id} value={s.code}>
                    {s.name} ({s.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Club Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClubs.map((c) => (
            <div
              key={c.id}
              className="group bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient p-6 flex flex-col justify-between hover:shadow-2xl hover:border-tan-500/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-12 h-12 rounded-xl object-cover border border-surface-border group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-tan-100 text-tan-900">
                      {c.stateCode}
                    </span>
                    <h3 className="font-black text-sm text-forest-950 group-hover:text-tan-700 transition-colors mt-0.5">
                      {c.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-charcoal-muted font-medium pt-2 border-t border-surface-border">
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-bold text-charcoal">{c.city}, {c.stateCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Roster:</span>
                    <span className="font-bold text-charcoal">{c.membersCount} Members</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Events Scheduled:</span>
                    <span className="font-bold text-forest-800">{c.eventsCount} Events</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to={`/clubs/${c.id}`}
                  className="w-full py-2.5 bg-forest-900 hover:bg-forest-950 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1 transition-all"
                >
                  <span>View Dedicated Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: Dedicated Local Club Page (/clubs/:clubId)
  // -------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-12">
      {/* A. Club Hero */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img src={club.logo} alt={club.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-tan-400 shadow-lg shrink-0" />
          <div className="space-y-1">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
              Local Chartered Club Portal
            </span>
            <h1 className="text-3xl lg:text-5xl font-black text-white">{club.name}</h1>
            <p className="text-xs sm:text-sm text-tan-200 font-medium">
              {club.city}, {club.state} • Chartered {club.estYear} under Ultimate Hound Club (UHC)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/join"
            className="px-5 py-3 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Join {club.name}</span>
          </Link>
        </div>
      </div>

      {/* C. Club Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface-lowest p-5 rounded-2xl border border-surface-border text-center shadow-ambient">
          <div className="text-3xl font-black text-forest-800">{club.membersCount}</div>
          <div className="text-xs text-charcoal-muted uppercase font-bold mt-1">Active Roster Members</div>
        </div>
        <div className="bg-surface-lowest p-5 rounded-2xl border border-surface-border text-center shadow-ambient">
          <div className="text-3xl font-black text-forest-800">{clubEvents.length || club.eventsCount}</div>
          <div className="text-xs text-charcoal-muted uppercase font-bold mt-1">Upcoming Events</div>
        </div>
        <div className="bg-surface-lowest p-5 rounded-2xl border border-surface-border text-center shadow-ambient">
          <div className="text-3xl font-black text-forest-800">{club.entriesCount || 217}</div>
          <div className="text-xs text-charcoal-muted uppercase font-bold mt-1">Total Entries</div>
        </div>
        <div className="bg-surface-lowest p-5 rounded-2xl border border-surface-border text-center shadow-ambient">
          <div className="text-3xl font-black text-emerald-700">${club.revenue ? club.revenue.toLocaleString() : '6,790'}</div>
          <div className="text-xs text-charcoal-muted uppercase font-bold mt-1">Club Margin Earnings</div>
        </div>
      </div>

      {/* B & I. About & Club Officers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-lowest p-6 lg:p-8 rounded-2xl border border-surface-border shadow-ambient space-y-4">
          <h2 className="text-xl font-black text-forest-800">About {club.name}</h2>
          <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
            {club.description ||
              `Located in ${club.city}, ${club.state}, ${club.name} is dedicated to promoting ethical sporting dog trials, nite hunts, treeing contests, and youth mentorship programs.`}
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-surface-border text-xs font-medium">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-low border border-surface-border">
              <MapPin className="w-4 h-4 text-tan-600" />
              <span>Location: {club.city}, {club.state} ({club.zip || '37901'})</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-low border border-surface-border">
              <UserCheck className="w-4 h-4 text-forest-800" />
              <span>Club President: {club.adminName}</span>
            </div>
          </div>
        </div>

        {/* Officers list (I) */}
        <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-800">Club Officers</h3>
          <div className="space-y-3">
            {mockOfficers.map((off, idx) => (
              <div key={idx} className="p-3 bg-surface-low rounded-xl border border-surface-border flex items-center gap-3">
                <img src={off.photo} alt={off.name} className="w-10 h-10 rounded-full object-cover border border-tan-400 shrink-0" />
                <div className="min-w-0">
                  <div className="font-black text-xs text-forest-950 truncate">{off.name}</div>
                  <div className="text-[11px] text-charcoal-muted truncate">{off.title}</div>
                  <div className="text-[9px] text-tan-700 font-bold">Term: {off.term}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* D. Club Events */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-surface-border pb-3">
          <h2 className="text-2xl font-black text-forest-800">Upcoming Club Events ({clubEvents.length})</h2>
          <Link to="/find-hunt" className="text-xs font-black text-forest-800 hover:text-tan-700 flex items-center gap-1">
            <span>Find More Hunts</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubEvents.map((evt) => (
            <div key={evt.id} className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-tan-100 text-tan-900">
                    {evt.type}
                  </span>
                  <span className="text-xs font-black text-forest-800">${evt.fee} Entry Fee</span>
                </div>
                <h3 className="font-black text-lg text-forest-950">{evt.name}</h3>
                <div className="text-xs text-charcoal-muted font-medium space-y-1">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-tan-600" /> {evt.date} @ {evt.startTime}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-tan-600" /> Location: {evt.address || `${club.city}, ${club.state}`}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-surface-border flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedEventForPreSignUp(evt)}
                  className="px-4 py-2 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow transition-all cursor-pointer"
                >
                  Pre-Sign Up
                </button>
                <Link to={`/find-hunt?event=${evt.id}`} className="text-xs font-extrabold text-forest-800 hover:text-tan-700">
                  Event Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* E. Club Customized Merchandise (BUSINESS RULE: Club Profit Recorded) */}
      <div className="space-y-6">
        <div className="border-b border-surface-border pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-forest-800">{club.name} Customized Gear Store</h2>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Purchases made from this Club page automatically credit the retail profit margin to {club.name}'s Treasury.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
            Club Profit Margin = Retail - Wholesale
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((p) => {
            const wholesale = p.wholesaleCost || Number((p.price * 0.7).toFixed(2));
            const clubProfit = Number((p.price - wholesale).toFixed(2));

            return (
              <div key={p.id} className="bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient overflow-hidden flex flex-col justify-between">
                <div className="relative h-48 bg-surface-low">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-forest-950/90 text-tan-300 backdrop-blur-md">
                    {p.category}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <h4 className="font-black text-sm text-forest-950 line-clamp-1">{p.name}</h4>
                  <p className="text-xs text-charcoal-muted line-clamp-2">{p.description}</p>
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted font-bold">Retail Price:</span>
                      <span className="font-black text-forest-950">${p.price}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-emerald-900 font-bold">Club Treasury Profit:</span>
                      <span className="font-black text-emerald-900">+${clubProfit}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button
                    onClick={() => {
                      addToCart(p);
                      showToast(`Added ${p.name} to cart. $${clubProfit} profit recorded for ${club.name}!`, 'success');
                    }}
                    className="w-full py-2.5 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow cursor-pointer transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* G & H. Club News & Hunt Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient">
          <h3 className="font-extrabold text-xl text-forest-800">{club.name} News & Announcements</h3>
          <div className="space-y-3">
            {clubNews.length > 0 ? (
              clubNews.map((n) => (
                <div key={n.id} className="p-3.5 bg-surface-low rounded-xl border border-surface-border space-y-1">
                  <span className="text-[10px] font-black uppercase text-tan-700">{n.date}</span>
                  <h4 className="font-extrabold text-sm text-forest-950">{n.title}</h4>
                  <p className="text-xs text-charcoal-muted">{n.summary}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-charcoal-muted font-medium">Monthly club meeting scheduled for first Tuesday at 7 PM.</p>
            )}
          </div>
        </div>

        <div className="space-y-4 bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient">
          <h3 className="font-extrabold text-xl text-forest-800">{club.name} Recent Hunt Results</h3>
          <div className="space-y-3">
            {clubResults.length > 0 ? (
              clubResults.map((r) => (
                <div key={r.id} className="p-3.5 bg-surface-low rounded-xl border border-surface-border flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-forest-950">{r.eventName}</h4>
                    <div className="text-[11px] text-charcoal-muted">{r.date} • Winner: {r.winnerDog} ({r.owner})</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-tan-500 text-forest-950 font-black text-xs">{r.placement} ({r.score})</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-charcoal-muted font-medium">No recent hunt results archived yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* F. Club Membership Information */}
      <div className="bg-forest-950 text-white p-8 rounded-3xl border border-forest-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950">
            Local Club Membership
          </span>
          <h3 className="text-2xl font-black text-white">Join {club.name}</h3>
          <p className="text-xs text-tan-200 font-medium">
            Get official local membership for $25.00/year to compete in club trials, vote in club officer elections, and support local trial grounds.
          </p>
        </div>
        <Link
          to="/join"
          className="px-6 py-3 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow-lg flex items-center gap-2 shrink-0 transition-all"
        >
          <span>Join Local Club ($25.00/yr)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Pre-Sign Up Modal rendering */}
      {selectedEventForPreSignUp && (
        <PreSignUpModal
          event={selectedEventForPreSignUp}
          onClose={() => setSelectedEventForPreSignUp(null)}
        />
      )}
    </div>
  );
};
