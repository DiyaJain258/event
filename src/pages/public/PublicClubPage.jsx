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
  Filter,
  Image as ImageIcon,
  DollarSign,
  Gavel,
  History,
  Info,
  Clock,
  HeartHandshake
} from 'lucide-react';

export const PublicClubPage = () => {
  const { clubId } = useParams();
  const { clubs, events, products, news, results, states, addToCart, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('');
  const [selectedEventForPreSignUp, setSelectedEventForPreSignUp] = useState(null);
  const [activeTab, setActiveTab] = useState('HOME');

  // Find club by ID or default to Houston County Coon Hunters Association (or Lone Star)
  const isDedicatedPage = Boolean(clubId);
  const currentClub = clubs.find(
    (c) => c.id === clubId || c.name.toLowerCase().includes(clubId?.toLowerCase())
  );

  // Fallback to Houston County Coon Hunters Association if requested or first club
  const club = currentClub || clubs.find((c) => c.id === 'club-tx-houston') || clubs[0];

  // Scoped Data for this specific local club
  const clubEvents = events.filter((e) => e.club === club.name || e.clubId === club.id);
  const clubProducts = products.filter(
    (p) =>
      (p.scopeChannel === 'LOCAL_CLUB' || p.organizationType === 'CLUB') &&
      (p.scopeEntity === club.name || p.organizationId === club.id)
  );
  const displayProducts = clubProducts.length > 0 ? clubProducts : products.filter((p) => p.scopeChannel === 'LOCAL_CLUB');

  const clubNews = news.filter((n) => n.summary?.includes(club.name) || n.author?.includes(club.name) || n.state === club.state);
  const clubResults = results.filter((r) => r.club === club.name || r.state === club.state);

  // 1. Club Logo & Basic Identifiers
  const clubLogo = club.logo || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=120&auto=format&fit=crop&q=80';

  // 2. Club History
  const clubHistory = club.history || `Founded in ${club.estYear || 1985}, the ${club.name} was established by local houndsmen in ${club.city}, ${club.state} to preserve night hunting traditions, ethical field trials, and youth sporting dog mentorship. Over the past four decades, the association has grown into a premier chartered chapter hosting state-sanctioned night hunts and water races.`;

  // 3. Club Location
  const clubLocation = {
    address: club.address || `450 Piney Woods Club Rd`,
    city: club.city || 'Crockett',
    county: club.county || 'Houston County',
    state: club.state || 'Texas',
    zip: club.zip || '75835',
    mapCoordinates: '31.3188° N, 95.4566° W'
  };

  // 4. Officers
  const clubOfficers = [
    { name: club.adminName || 'Marcus Vance', title: 'Club President', term: '2025 - 2027', phone: '(936) 555-0182', email: `president@${club.id || 'houston'}hc.org`, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { name: 'Cody Campbell', title: 'Vice President & Master of Hounds', term: '2026 - 2028', phone: '(936) 555-0193', email: `vpresident@${club.id || 'houston'}hc.org`, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
    { name: 'Sarah Jenkins', title: 'Secretary & Treasurer', term: '2025 - 2027', phone: '(936) 555-0194', email: `treasurer@${club.id || 'houston'}hc.org`, photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' }
  ];

  // 5. Contact Information
  const contactInfo = {
    phone: '(936) 555-0182',
    email: `contact@${club.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.org`,
    physicalAddress: `${clubLocation.address}, ${clubLocation.city}, ${clubLocation.state} ${clubLocation.zip}`,
    officeHours: 'Monday - Friday: 8:00 AM - 5:00 PM (CT)'
  };

  // 6. Affiliated Federations
  const affiliatedFederations = [
    { name: 'UKC (United Kennel Club)', status: 'Officially Chartered', code: 'UKC' },
    { name: 'PKC (Professional Kennel Club)', status: 'Sanctioned Partner', code: 'PKC' },
    { name: 'AKC (American Kennel Club)', status: 'Affiliated Chapter', code: 'AKC' },
    { name: 'UHC (Ultimate Hound Club)', status: 'National Charter Chapter', code: 'UHC' }
  ];

  // 11. Sponsors
  const clubSponsors = [
    { name: 'East Texas Feed & Grain', category: 'Official Feed Supplier', logo: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=150&auto=format&fit=crop&q=80' },
    { name: 'Crockett Hardware & Supply', category: 'Clubhouse Maintenance Partner', logo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=150&auto=format&fit=crop&q=80' },
    { name: 'Garmin Outdoor Telemetry', category: 'GPS Tracking Equipment', logo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&auto=format&fit=crop&q=80' },
    { name: 'Filson Heritage Outdoors', category: 'Trial Apparel Partner', logo: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=150&auto=format&fit=crop&q=80' }
  ];

  // 12. Photos Gallery
  const clubPhotos = [
    { title: 'Piney Woods Trial Grounds', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=80', caption: 'Official night hunt course' },
    { title: 'State Championship Winners', url: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=500&auto=format&fit=crop&q=80', caption: 'Bench show champion handlers' },
    { title: 'Youth Handling Workshop', url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80', caption: 'Junior handlers clinic' },
    { title: 'Creek Water Race Event', url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=500&auto=format&fit=crop&q=80', caption: 'Speed water race line trial' }
  ];

  // 14. Fundraisers
  const clubFundraisers = [
    { title: 'Piney Woods Clubhouse & Kennel Repair Fund', goal: 5000, raised: 3850, desc: 'Raising funds to upgrade outdoor judge stands and night lighting along the trial course.' },
    { title: 'Youth Handler Scholarship & Free Registration Drive', goal: 2500, raised: 2100, desc: 'Covering event entry fees and travel expenses for junior handlers under 18.' }
  ];

  // 15. Auctions
  const clubAuctions = [
    { title: 'Handcrafted Engraved Leather Tracking Belt', currentBid: 185, topBidder: 'Austin Sterling', endsIn: '2 days', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&auto=format&fit=crop&q=80' },
    { title: 'Vintage Brass Nite Lite Hunting Lantern (1974 Edition)', currentBid: 240, topBidder: 'Robert Miller', endsIn: '5 days', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&auto=format&fit=crop&q=80' }
  ];

  // -------------------------------------------------------------
  // VIEW 1: Local Clubs Directory Listing (/clubs)
  // -------------------------------------------------------------
  if (!isDedicatedPage) {
    const filteredClubs = clubs.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.state.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesState = !selectedStateFilter || c.stateCode === selectedStateFilter || c.state === selectedStateFilter;
      return matchesSearch && matchesState;
    });

    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
        <div className="bg-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl space-y-6">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
            Local Club Directory
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Local Chartered Clubs
          </h1>
          <p className="text-xs sm:text-sm text-tan-200 max-w-2xl font-medium leading-relaxed">
            Every local club operates its own small club website inside UHC with history, officers, contact info, affiliated federations, upcoming hunts, results, news, membership signup, sponsors, photos, merchandise, fundraisers, and auctions.
          </p>

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
                  <option key={s.id} value={s.code}>{s.name} ({s.code})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((c) => (
            <div key={c.id} className="group bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient p-6 flex flex-col justify-between hover:shadow-2xl hover:border-tan-500/60 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src={c.logo} alt={c.name} className="w-14 h-14 rounded-2xl object-cover border border-surface-border shrink-0 shadow" />
                  <div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-tan-100 text-tan-900">
                      {c.stateCode} Chartered
                    </span>
                    <h3 className="font-black text-base text-forest-950 group-hover:text-tan-700 transition-colors mt-0.5">
                      {c.name}
                    </h3>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-charcoal-muted font-medium pt-2 border-t border-surface-border">
                  <div className="flex justify-between"><span>Location:</span><span className="font-bold text-charcoal">{c.city}, {c.stateCode}</span></div>
                  <div className="flex justify-between"><span>Active Roster:</span><span className="font-bold text-charcoal">{c.membersCount} Members</span></div>
                </div>
              </div>
              <div className="pt-6">
                <Link to={`/clubs/${c.id}`} className="w-full py-2.5 bg-forest-900 hover:bg-forest-950 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1 transition-all">
                  <span>Open Club's Own UHC Page</span>
                  <ChevronRight className="w-4 h-4 text-tan-400" />
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
  // Operates like a small club website with ALL 15 CLIENT REQUIREMENTS
  // -------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-10">
      {/* Hierarchy Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-bold text-charcoal-muted">
        <Link to="/" className="hover:text-forest-950 transition-colors">National</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/states/${club.stateId || 'tx'}`} className="hover:text-forest-950 transition-colors">{club.state} State Association</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-forest-950 font-black">{club.name}</span>
      </div>

      {/* 1. CLUB LOGO & HEADER BANNER */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-6 sm:p-10 border-2 border-tan-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            {/* 1. Club Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-tan-500/20 border-2 border-tan-400 overflow-hidden shrink-0 shadow-xl flex items-center justify-center">
              <img src={clubLogo} alt={club.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
                  Official Local Club Web Portal
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-forest-900 text-tan-300 border border-forest-700">
                  {club.stateCode} Charter
                </span>
              </div>

              {/* Club Identity Name */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {club.name}
              </h1>

              {/* 3. Club Location Summary */}
              <p className="text-xs sm:text-sm text-tan-200 font-medium flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-tan-400" />
                <span>{clubLocation.address}, {clubLocation.city}, {clubLocation.state} ({clubLocation.zip})</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* 10. Membership Signup Button */}
            <a
              href="#membership-signup"
              className="px-5 py-3 bg-tan-500 hover:bg-tan-400 text-forest-950 font-black text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Join {club.name} ($25/yr)</span>
            </a>
          </div>
        </div>

        {/* Small Club Website Quick Navigation Bar */}
        <div className="pt-4 border-t border-forest-800 flex flex-wrap items-center gap-2 text-xs">
          <a href="#history" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">1. History & Location</a>
          <a href="#officers" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">2. Officers & Contact</a>
          <a href="#federations" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">3. Federations</a>
          <a href="#hunts" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">4. Hunts & Results</a>
          <a href="#news" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">5. News & Signup</a>
          <a href="#sponsors" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">6. Sponsors & Photos</a>
          <a href="#merchandise" className="px-3 py-1.5 rounded-xl bg-forest-900 text-tan-200 hover:text-white font-bold transition-colors">7. Store & Auctions</a>
        </div>
      </div>

      {/* 2 & 3. CLUB HISTORY & LOCATION SECTION */}
      <section id="history" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase bg-tan-100 text-tan-900">
              Founding Heritage
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-forest-950 flex items-center gap-2">
            <History className="w-5 h-5 text-tan-600" />
            <span>2. Club History & Mission</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
            {clubHistory}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-surface-border text-center text-xs">
            <div className="p-3 rounded-xl bg-surface-low border border-surface-border">
              <strong className="block font-black text-forest-950 text-base">{club.estYear || 1985}</strong>
              <span className="text-[10px] text-charcoal-muted uppercase">Chartered Year</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-low border border-surface-border">
              <strong className="block font-black text-forest-950 text-base">{club.membersCount || 88}</strong>
              <span className="text-[10px] text-charcoal-muted uppercase">Active Members</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-low border border-surface-border">
              <strong className="block font-black text-forest-800 text-base">{clubEvents.length || 6}</strong>
              <span className="text-[10px] text-charcoal-muted uppercase">Annual Hunts</span>
            </div>
          </div>
        </div>

        {/* 3. Club Location Details Card */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-950 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-tan-600" />
            <span>3. Club Location</span>
          </h3>

          <div className="space-y-3 text-xs font-medium">
            <div className="p-3.5 rounded-xl bg-surface-low border border-surface-border space-y-1">
              <span className="text-[10px] font-black uppercase text-tan-800">Trial Grounds Clubhouse</span>
              <div className="font-extrabold text-forest-950">{clubLocation.address}</div>
              <div className="text-charcoal-muted">{clubLocation.city}, {clubLocation.state} {clubLocation.zip}</div>
              <div className="text-[10px] text-forest-800 font-mono pt-1">County: {clubLocation.county}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-low border border-surface-border space-y-1">
              <span className="text-[10px] font-black uppercase text-tan-800">GPS Map Coordinates</span>
              <div className="font-mono text-forest-950 font-bold">{clubLocation.mapCoordinates}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. OFFICERS & CONTACT INFORMATION SECTION */}
      <section id="officers" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 4. Officers List */}
        <div className="lg:col-span-2 bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-tan-600" />
            <span>4. Executive Officers</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {clubOfficers.map((off, idx) => (
              <div key={idx} className="p-4 bg-surface-low rounded-2xl border border-surface-border space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <img src={off.photo} alt={off.name} className="w-14 h-14 rounded-full object-cover border-2 border-tan-400 shadow shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-sm text-forest-950">{off.name}</h4>
                    <div className="text-xs font-bold text-tan-800">{off.title}</div>
                    <div className="text-[10px] text-charcoal-muted mt-0.5">Term: {off.term}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-surface-border text-[10px] text-charcoal space-y-1 font-mono">
                  <div>{off.phone}</div>
                  <div className="truncate text-forest-800">{off.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Contact Information Card */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-950 flex items-center gap-2">
            <Mail className="w-5 h-5 text-tan-600" />
            <span>5. Contact Information</span>
          </h3>

          <div className="space-y-3 text-xs font-medium">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-low border border-surface-border">
              <Phone className="w-4 h-4 text-tan-600 shrink-0" />
              <div>
                <span className="text-[10px] text-charcoal-muted uppercase block">Phone Number</span>
                <strong className="text-forest-950">{contactInfo.phone}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-low border border-surface-border">
              <Mail className="w-4 h-4 text-tan-600 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-charcoal-muted uppercase block">Official Email</span>
                <strong className="text-forest-950 text-[11px] truncate block">{contactInfo.email}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-low border border-surface-border">
              <Clock className="w-4 h-4 text-tan-600 shrink-0" />
              <div>
                <span className="text-[10px] text-charcoal-muted uppercase block">Office Hours</span>
                <span className="text-charcoal font-bold">{contactInfo.officeHours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEDERATIONS AFFILIATED WITH THE CLUB */}
      <section id="federations" className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
        <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
          <Award className="w-5 h-5 text-tan-600" />
          <span>6. Federations Affiliated with the Club</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {affiliatedFederations.map((fed) => (
            <div key={fed.code} className="p-4 bg-surface-low rounded-2xl border border-surface-border space-y-2 flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-forest-900 text-tan-300">
                  {fed.code} Sanctioned
                </span>
                <h4 className="font-extrabold text-sm text-forest-950 mt-1">{fed.name}</h4>
                <div className="text-[10px] text-charcoal-muted font-bold">{fed.status}</div>
              </div>
              <ShieldCheck className="w-6 h-6 text-tan-600 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* 7 & 8. UPCOMING HUNTS & PAST RESULTS SECTION */}
      <section id="hunts" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 7. Upcoming Hunts */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-tan-600" />
              <span>7. Upcoming Hunts ({clubEvents.length})</span>
            </h2>
            <Link to="/find-hunt" className="text-xs font-bold text-forest-800 hover:underline">View All</Link>
          </div>

          <div className="space-y-4">
            {clubEvents.map((evt) => (
              <div key={evt.id} className="p-4 bg-surface-low rounded-2xl border border-surface-border space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-tan-500 text-forest-950">
                      {evt.type}
                    </span>
                    <span className="text-xs font-black text-forest-950">${evt.fee} Fee</span>
                  </div>
                  <h4 className="font-extrabold text-base text-forest-950">{evt.name}</h4>
                  <div className="text-xs text-charcoal-muted font-medium">
                    {evt.date} @ {evt.startTime} • {evt.city}, {evt.state}
                  </div>
                </div>

                <div className="pt-2 border-t border-surface-border flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEventForPreSignUp(evt)}
                    className="px-3.5 py-1.5 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow cursor-pointer transition-all"
                  >
                    Pre-Sign Up
                  </button>
                  <Link to={`/find-hunt?event=${evt.id}`} className="text-xs font-extrabold text-forest-800 hover:text-tan-700">
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Past Results */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-tan-600" />
              <span>8. Past Hunt Results</span>
            </h2>
            <Link to="/results" className="text-xs font-bold text-forest-800 hover:underline">All Results</Link>
          </div>

          <div className="space-y-3">
            {(clubResults.length > 0 ? clubResults : [
              { id: 'res-h1', eventName: 'Houston County Autumn Night Hunt', date: 'Aug 05, 2026', winnerDog: 'Lone Star Rebel', owner: 'Austin Sterling', score: '375+ Circle', placement: '1st Place' },
              { id: 'res-h2', eventName: 'Houston County Speed Water Race', date: 'Jul 22, 2026', winnerDog: 'Timberline Bell', owner: 'Lalit Panchole', score: 'Line & Tree First', placement: '1st Place' }
            ]).map((r) => (
              <div key={r.id} className="p-4 bg-surface-low rounded-2xl border border-surface-border flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-extrabold text-xs text-forest-950">{r.eventName}</h4>
                  <div className="text-[11px] text-charcoal-muted mt-0.5">{r.date} • Winner: {r.winnerDog} ({r.owner})</div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-tan-500 text-forest-950 font-black text-xs shrink-0">
                  {r.placement} ({r.score})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 & 10. CLUB NEWS & MEMBERSHIP SIGNUP SECTION */}
      <section id="news" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 9. Club News */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-tan-600" />
            <span>9. Club News & Announcements</span>
          </h2>

          <div className="space-y-3">
            {(clubNews.length > 0 ? clubNews : [
              { id: 'cn-1', title: 'Monthly Club Meeting Scheduled for First Tuesday', date: 'Aug 10, 2026', summary: 'All Houston County members invited to discuss fall trial grounds preparation and youth scholarships.' },
              { id: 'cn-2', title: 'Piney Woods Trial Grounds Lighting Upgrade Completed', date: 'Aug 02, 2026', summary: 'Dual LED light bars installed along the cast release grounds for safety during night hunts.' }
            ]).map((n) => (
              <div key={n.id} className="p-4 bg-surface-low rounded-2xl border border-surface-border space-y-1">
                <span className="text-[10px] font-black uppercase text-tan-700 bg-tan-100 px-2 py-0.5 rounded">{n.date}</span>
                <h4 className="font-extrabold text-xs sm:text-sm text-forest-950">{n.title}</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">{n.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Membership Signup */}
        <div id="membership-signup" className="bg-forest-950 text-white p-6 sm:p-8 rounded-3xl border-2 border-tan-500/40 shadow-2xl space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950">
              10. Local Club Membership Signup
            </span>
            <h2 className="text-2xl font-black text-white">Join {club.name}</h2>
            <p className="text-xs text-tan-200 font-medium leading-relaxed">
              Become an official chartered member of {club.name} for $25.00/year to qualify for local hunt entries, voting rights in club officer elections, and access to local trial grounds.
            </p>

            <div className="p-3 rounded-xl bg-forest-900 border border-forest-800 text-xs space-y-1 font-medium">
              <div className="flex justify-between"><span>Annual Dues:</span><strong className="text-tan-400">$25.00/year</strong></div>
              <div className="flex justify-between"><span>Assigned Club:</span><strong className="text-white">{club.name}</strong></div>
              <div className="flex justify-between"><span>Parent State Charter:</span><strong className="text-white">{club.state} Association</strong></div>
            </div>
          </div>

          <Link
            to="/join"
            className="w-full py-3 bg-tan-500 hover:bg-tan-400 text-forest-950 font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Complete {club.name} Membership Signup ($25/yr)</span>
          </Link>
        </div>
      </section>

      {/* 11 & 12. SPONSORS & PHOTOS GALLERY SECTION */}
      <section id="sponsors" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 11. Sponsors */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-950 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-tan-600" />
            <span>11. Local Club Sponsors</span>
          </h3>

          <div className="space-y-3">
            {clubSponsors.map((sp, idx) => (
              <div key={idx} className="p-3 bg-surface-low rounded-2xl border border-surface-border flex items-center gap-3">
                <img src={sp.logo} alt={sp.name} className="w-10 h-10 rounded-xl object-cover border border-surface-border shrink-0" />
                <div>
                  <div className="font-extrabold text-xs text-forest-950">{sp.name}</div>
                  <div className="text-[10px] text-tan-800 font-bold">{sp.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12. Photos Gallery */}
        <div className="lg:col-span-2 bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h3 className="font-extrabold text-base text-forest-950 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-tan-600" />
            <span>12. Club Photos Gallery</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {clubPhotos.map((photo, idx) => (
              <div key={idx} className="space-y-1.5 group cursor-pointer">
                <div className="h-28 rounded-2xl overflow-hidden bg-forest-950 border border-surface-border">
                  <img src={photo.url} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="text-[10px] font-extrabold text-forest-950 truncate">{photo.title}</div>
                <div className="text-[9px] text-charcoal-muted truncate">{photo.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. MERCHANDISE SECTION */}
      <section id="merchandise" className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-6">
        <div className="border-b border-surface-border pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-forest-950 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-tan-600" />
              <span>13. Official Club Merchandise Store</span>
            </h2>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Gear purchases automatically credit retail profit margins to {club.name}'s Treasury.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300 self-start sm:self-auto">
            100% Profits Credited to {club.name}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayProducts.map((p) => {
            const wholesale = p.wholesaleCost || Number((p.price * 0.7).toFixed(2));
            const clubProfit = Number((p.price - wholesale).toFixed(2));

            return (
              <div key={p.id} className="bg-surface-low rounded-2xl border border-surface-border overflow-hidden flex flex-col justify-between">
                <div className="relative h-44 bg-surface-lowest">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-forest-950/90 text-tan-300">
                    {p.category}
                  </span>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-black text-sm text-forest-950 line-clamp-1">{p.name}</h4>
                    <p className="text-xs text-charcoal-muted line-clamp-2 mt-1">{p.description}</p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-surface-border">
                    <span className="text-base font-black text-forest-950">${p.price}</span>
                    <button
                      onClick={() => {
                        addToCart(p);
                        showToast(`Added ${p.name} to cart. $${clubProfit} profit recorded for ${club.name}!`, 'success');
                      }}
                      className="px-3 py-1.5 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-lg shadow transition-all flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 14 & 15. FUNDRAISERS & AUCTIONS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 14. Fundraisers */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <span>14. Club Fundraisers</span>
          </h2>

          <div className="space-y-4">
            {clubFundraisers.map((f, idx) => {
              const pct = Math.min(100, Math.round((f.raised / f.goal) * 100));
              return (
                <div key={idx} className="p-4 bg-surface-low rounded-2xl border border-surface-border space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-xs sm:text-sm text-forest-950">{f.title}</h4>
                    <span className="text-xs font-black text-emerald-700">${f.raised} / ${f.goal}</span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">{f.desc}</p>

                  <div className="w-full bg-surface-lowest rounded-full h-2 overflow-hidden border border-surface-border">
                    <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }}></div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-extrabold pt-1">
                    <span className="text-emerald-800">{pct}% Funded</span>
                    <button
                      onClick={() => showToast(`Thank you for donating to ${f.title}!`, 'success')}
                      className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg shadow"
                    >
                      Donate to Campaign
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 15. Auctions */}
        <div className="bg-surface-lowest p-6 sm:p-8 rounded-3xl border border-surface-border shadow-ambient space-y-4">
          <h2 className="text-xl font-black text-forest-950 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-tan-600" />
            <span>15. Benefit Auctions</span>
          </h2>

          <div className="space-y-4">
            {clubAuctions.map((auc, idx) => (
              <div key={idx} className="p-4 bg-surface-low rounded-2xl border border-surface-border flex flex-col sm:flex-row items-center gap-4">
                <img src={auc.image} alt={auc.title} className="w-20 h-20 rounded-xl object-cover border border-surface-border shrink-0 shadow" />
                <div className="space-y-1 flex-1 min-w-0">
                  <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-300">
                    Ends in {auc.endsIn}
                  </span>
                  <h4 className="font-extrabold text-xs sm:text-sm text-forest-950 truncate">{auc.title}</h4>
                  <div className="text-xs text-charcoal font-medium">
                    Current Bid: <strong className="text-forest-950 font-black">${auc.currentBid}.00</strong> (by {auc.topBidder})
                  </div>
                  <button
                    onClick={() => showToast(`Placed bid of $${auc.currentBid + 10} on ${auc.title}!`, 'success')}
                    className="mt-2 px-3.5 py-1.5 bg-tan-500 hover:bg-tan-400 text-forest-950 font-black text-xs rounded-xl shadow transition-all"
                  >
                    Place Bid (${auc.currentBid + 10})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
