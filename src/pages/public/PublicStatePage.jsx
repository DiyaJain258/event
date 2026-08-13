import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { PreSignUpModal } from '../../components/events/PreSignUpModal';
import {
  MapPin,
  Building2,
  Users,
  Calendar,
  Trophy,
  Newspaper,
  ShoppingBag,
  Mail,
  ArrowRight,
  ShieldCheck,
  Search,
  ChevronRight,
  Award,
  DollarSign
} from 'lucide-react';

export const PublicStatePage = () => {
  const { stateId } = useParams();
  const { states, clubs, events, products, news, results, addToCart, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventForPreSignUp, setSelectedEventForPreSignUp] = useState(null);

  // If stateId is present in URL (e.g. /states/tx or /states/tn)
  const isDedicatedPage = Boolean(stateId);
  const currentState = states.find((s) => s.id === stateId || s.code.toLowerCase() === stateId?.toLowerCase() || s.name.toLowerCase() === stateId?.toLowerCase());

  // Filter states for listing view
  const filteredStates = states.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.adminName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data scoped to selected State
  const stateData = currentState || states[0];
  const stateClubs = clubs.filter((c) => c.state === stateData.name || c.stateCode === stateData.code || c.stateId === stateData.id);
  const stateEvents = events.filter((e) => e.state === stateData.name || e.stateCode === stateData.code || e.stateId === stateData.id);
  const stateProducts = products.filter(
    (p) =>
      (p.scopeChannel === 'STATE' || p.organizationType === 'STATE') &&
      (p.scopeEntity === `${stateData.name} State Association` || p.organizationId === stateData.id || p.organizationId === stateData.code)
  );
  // Fallback state products if specific state has no custom items
  const displayProducts = stateProducts.length > 0 ? stateProducts : products.filter((p) => p.scopeChannel === 'STATE');

  const stateNews = news.filter((n) => n.category?.includes('State') || n.summary?.includes(stateData.name));
  const stateResults = results.filter((r) => r.state === stateData.name || r.stateCode === stateData.code);

  const mockOfficers = [
    { name: stateData.adminName || 'Sarah Tennessee', title: 'State Association Director', term: '2025 - 2027', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
    { name: 'Marcus Vance', title: 'Vice State Director', term: '2026 - 2028', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { name: 'Elena Rostova', title: 'State Secretary & Treasurer', term: '2025 - 2027', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' }
  ];

  // -------------------------------------------------------------
  // VIEW 1: State Associations Directory Listing (/states)
  // -------------------------------------------------------------
  if (!isDedicatedPage) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
        {/* Directory Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl space-y-6">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
            State Governance Directory
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            State Associations
          </h1>
          <p className="text-xs sm:text-sm text-tan-200 max-w-2xl font-medium leading-relaxed">
            Every state features a dedicated public association portal overseeing affiliated local clubs, state championships, officer elections, and custom merchandise.
          </p>

          {/* Search Toolbar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-light" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by state name, code, or director..."
              className="w-full pl-10 pr-4 py-3 text-xs bg-surface-lowest text-charcoal border border-surface-border rounded-xl font-semibold focus:outline-none focus:border-tan-500"
            />
          </div>
        </div>

        {/* State Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStates.map((s) => (
            <div
              key={s.id}
              className="group bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient p-6 flex flex-col justify-between hover:shadow-2xl hover:border-tan-500/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-forest-900/10 text-forest-950 font-black text-lg flex items-center justify-center border border-surface-border overflow-hidden">
                    {s.logo ? <img src={s.logo} alt={s.name} className="w-full h-full object-cover" /> : s.code}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-tan-100 text-tan-900">
                      {s.code} Charter
                    </span>
                    <h3 className="font-black text-lg text-forest-950 group-hover:text-tan-700 transition-colors mt-0.5">
                      {s.name} Association
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-charcoal-muted line-clamp-2 font-medium">
                  {s.description || `Official state association charter for ${s.name}.`}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-surface-border text-center text-xs">
                  <div className="p-2 rounded-xl bg-surface-low border border-surface-border">
                    <strong className="block font-black text-forest-950">{s.clubsCount}</strong>
                    <span className="text-[10px] text-charcoal-muted">Clubs</span>
                  </div>
                  <div className="p-2 rounded-xl bg-surface-low border border-surface-border">
                    <strong className="block font-black text-forest-950">{s.membersCount}</strong>
                    <span className="text-[10px] text-charcoal-muted">Members</span>
                  </div>
                  <div className="p-2 rounded-xl bg-surface-low border border-surface-border">
                    <strong className="block font-black text-forest-800">{s.eventsCount}</strong>
                    <span className="text-[10px] text-charcoal-muted">Events</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to={`/states/${s.id}`}
                  className="w-full py-3 bg-forest-900 hover:bg-forest-950 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>View Dedicated {s.name} Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─── STATE STORE PRODUCTS SECTION ─── */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
                🏛️ State Association Store
              </span>
              <h2 className="text-2xl font-black text-charcoal mt-2">State Association Merchandise</h2>
              <p className="text-xs text-charcoal-muted mt-1">Official gear sold by state associations — all profits fund state championship events.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.filter((p) => p.scopeChannel === 'STATE').slice(0, 4).map((product) => (
              <div key={product.id} className="bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient overflow-hidden group hover:shadow-xl hover:border-tan-500/50 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-40 bg-surface-low">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-forest-950/80 text-tan-300 text-[9px] font-black uppercase backdrop-blur-sm">
                    {product.category}
                  </span>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-tan-500/90 text-forest-950 text-[9px] font-black uppercase">
                    State
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-black text-sm text-charcoal leading-snug line-clamp-2">{product.name}</h3>
                    <p className="text-[10px] text-charcoal-muted mt-1 line-clamp-2">{product.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-surface-border">
                    <span className="text-lg font-black text-forest-800">${product.price.toLocaleString()}</span>
                    <button
                      onClick={() => { addToCart(product, 1); showToast(`${product.name} added to cart!`, 'success'); }}
                      className="px-3 py-1.5 rounded-lg bg-forest-900 hover:bg-forest-950 text-white text-[10px] font-black flex items-center gap-1 transition-all"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: Dedicated State Association Page (/states/:stateId)
  // -------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-12">
      {/* A. State Hero */}
      <div className="relative bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-tan-500/20 border-2 border-tan-400 flex items-center justify-center overflow-hidden shrink-0 shadow-lg">
              {stateData.logo ? (
                <img src={stateData.logo} alt={stateData.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl font-black text-tan-300">{stateData.code}</span>
              )}
            </div>
            <div className="space-y-1">
              <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
                Dedicated State Charter Portal
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white">{stateData.name} State Association</h1>
              <p className="text-xs sm:text-sm text-tan-200 font-medium">
                Governing body for sanctioned trials, affiliated clubs, and state championships in {stateData.name}.
              </p>
            </div>
          </div>

          <Link
            to="/join"
            className="px-6 py-3 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all shrink-0"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Join {stateData.name} Association</span>
          </Link>
        </div>

        {/* Quick Stat Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-forest-800 text-center">
          <div className="bg-forest-900/60 p-3.5 rounded-xl border border-forest-800">
            <strong className="block text-2xl font-black text-tan-300">{stateData.clubsCount}</strong>
            <span className="text-[10px] uppercase font-bold text-tan-200">Affiliated Clubs</span>
          </div>
          <div className="bg-forest-900/60 p-3.5 rounded-xl border border-forest-800">
            <strong className="block text-2xl font-black text-tan-300">{stateData.membersCount}</strong>
            <span className="text-[10px] uppercase font-bold text-tan-200">State Members</span>
          </div>
          <div className="bg-forest-900/60 p-3.5 rounded-xl border border-forest-800">
            <strong className="block text-2xl font-black text-tan-300">{stateEvents.length || stateData.eventsCount}</strong>
            <span className="text-[10px] uppercase font-bold text-tan-200">Sanctioned Events</span>
          </div>
          <div className="bg-forest-900/60 p-3.5 rounded-xl border border-forest-800">
            <strong className="block text-2xl font-black text-emerald-400">${stateData.revenue?.toLocaleString() || '184,250'}</strong>
            <span className="text-[10px] uppercase font-bold text-tan-200">State Treasury Margin</span>
          </div>
        </div>
      </div>

      {/* B & C. About & State Governance Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-lowest p-6 lg:p-8 rounded-2xl border border-surface-border shadow-ambient space-y-4">
          <h2 className="text-xl font-black text-forest-800">About {stateData.name} State Hunting Association</h2>
          <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
            {stateData.description ||
              `The ${stateData.name} State Hunting Association oversees sanctioned competitive field trials, water races, nite hunts, and youth education programs. It manages state championship qualifications and guarantees that member local clubs receive full financial transparency.`}
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-surface-border text-xs font-medium">
            <div className="p-3.5 rounded-xl bg-surface-low border border-surface-border">
              <strong className="block font-black text-forest-950 mb-0.5">Mission</strong>
              <span className="text-charcoal-muted">Promoting ethical sporting hound competition and wildlife conservation across {stateData.name}.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-low border border-surface-border">
              <strong className="block font-black text-forest-950 mb-0.5">State Charter Headquarters</strong>
              <span className="text-charcoal-muted">Official State Office • Admin: {stateData.adminName}</span>
            </div>
          </div>
        </div>

        {/* State Officers (J) */}
        <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-800">State Association Officers</h3>
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

      {/* D. State Affiliated Local Clubs */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-surface-border pb-3">
          <h2 className="text-2xl font-black text-forest-800">{stateData.name} Affiliated Local Clubs ({stateClubs.length})</h2>
          <Link to="/clubs" className="text-xs font-black text-forest-800 hover:text-tan-700 flex items-center gap-1">
            <span>Browse All Clubs</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateClubs.map((c) => (
            <div key={c.id} className="bg-surface-lowest p-5 rounded-2xl border border-surface-border shadow-ambient space-y-3 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <img src={c.logo} alt={c.name} className="w-12 h-12 rounded-xl object-cover border border-surface-border shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm text-forest-950">{c.name}</h4>
                  <div className="text-xs text-charcoal-muted font-medium">{c.city}, {c.stateCode} • {c.membersCount} Members</div>
                </div>
              </div>
              <Link to={`/clubs/${c.id}`} className="w-full py-2 bg-forest-900 hover:bg-forest-950 text-white rounded-xl text-xs font-bold text-center transition-colors">
                View Dedicated Club Page
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* E. State Sanctioned Events */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-surface-border pb-3">
          <h2 className="text-2xl font-black text-forest-800">{stateData.name} Sanctioned Events ({stateEvents.length})</h2>
          <Link to="/find-hunt" className="text-xs font-black text-forest-800 hover:text-tan-700 flex items-center gap-1">
            <span>Full Event Calendar</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stateEvents.map((evt) => (
            <div key={evt.id} className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-tan-100 text-tan-900">
                    {evt.federation || 'UHC Sanctioned'}
                  </span>
                  <span className="text-xs font-black text-forest-800">${evt.fee} Fee</span>
                </div>
                <h3 className="font-black text-lg text-forest-950">{evt.name}</h3>
                <div className="text-xs text-charcoal-muted font-medium space-y-1">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-tan-600" /> {evt.date} @ {evt.startTime}</div>
                  <div className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-tan-600" /> Host: {evt.club}</div>
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
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* F. State Merchandise (BUSINESS RULE: State Margin Earnings) */}
      <div className="space-y-6">
        <div className="border-b border-surface-border pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-forest-800">{stateData.name} State Merchandise</h2>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Purchases made from this State merchandise page directly fund the {stateData.name} State Association Treasury.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
            State Margin Earned: Retail - Wholesale
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((p) => {
            const wholesale = p.wholesaleCost || Number((p.price * 0.7).toFixed(2));
            const stateMargin = Number((p.price - wholesale).toFixed(2));

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
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted font-bold">Retail Price:</span>
                      <span className="font-black text-forest-950">${p.price}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-amber-900 font-bold">State Treasury Margin:</span>
                      <span className="font-black text-amber-900">+${stateMargin}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button
                    onClick={() => {
                      addToCart(p);
                      showToast(`Added ${p.name} to cart. Margin payout recorded for ${stateData.name} State Treasury.`, 'success');
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

      {/* G & H. State News & Hunt Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient">
          <h3 className="font-extrabold text-xl text-forest-800">{stateData.name} State News & Bulletins</h3>
          <div className="space-y-3">
            {stateNews.length > 0 ? (
              stateNews.map((n) => (
                <div key={n.id} className="p-3.5 bg-surface-low rounded-xl border border-surface-border space-y-1">
                  <span className="text-[10px] font-black uppercase text-tan-700">{n.date}</span>
                  <h4 className="font-extrabold text-sm text-forest-950">{n.title}</h4>
                  <p className="text-xs text-charcoal-muted">{n.summary}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-charcoal-muted font-medium">No recent news bulletins posted for this state.</p>
            )}
          </div>
        </div>

        <div className="space-y-4 bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient">
          <h3 className="font-extrabold text-xl text-forest-800">{stateData.name} State Hunt Results</h3>
          <div className="space-y-3">
            {stateResults.length > 0 ? (
              stateResults.map((r) => (
                <div key={r.id} className="p-3.5 bg-surface-low rounded-xl border border-surface-border flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-forest-950">{r.eventName}</h4>
                    <div className="text-[11px] text-charcoal-muted">{r.date} • Winner: {r.winnerDog} ({r.owner})</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-tan-500 text-forest-950 font-black text-xs">{r.placement} ({r.score})</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-charcoal-muted font-medium">No state hunt results archived yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* I. State Membership Information */}
      <div className="bg-forest-950 text-white p-8 rounded-3xl border border-forest-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950">
            State Membership
          </span>
          <h3 className="text-2xl font-black text-white">{stateData.name} State Association Membership</h3>
          <p className="text-xs text-tan-200 font-medium">
            Join the official {stateData.name} State Charter for $35.00/year to qualify for state championship points, voting rights, and state merchandise discounts.
          </p>
        </div>
        <Link
          to="/join"
          className="px-6 py-3 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow-lg flex items-center gap-2 shrink-0 transition-all"
        >
          <span>Join Now ($35.00/yr)</span>
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
