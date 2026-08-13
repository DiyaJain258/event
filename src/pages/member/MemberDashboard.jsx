import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../../components/common/StatCard';
import { Award, Calendar, ClipboardList, ShoppingBag, Dog, User, Plus, ChevronRight, ShieldCheck, Globe, MapPin, Building2, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MemberDashboard = () => {
  const { currentUser, userMemberships = [], events = [], entries = [], orders = [], dogs = [], showToast } = useApp();

  const myMemberships = userMemberships.filter((m) => m.userEmail && m.userEmail.toLowerCase() === currentUser.email.toLowerCase());
  const myEntries = entries.filter((e) => (e.participantEmail && e.participantEmail.toLowerCase() === currentUser.email.toLowerCase()) || e.participant === currentUser.name);
  const myDogs = dogs.filter((d) => (d.ownerEmail && d.ownerEmail.toLowerCase() === currentUser.email.toLowerCase()) || d.owner === currentUser.name);
  const myOrders = orders.filter((o) => (o.email && o.email.toLowerCase() === currentUser.email.toLowerCase()) || o.customer === currentUser.name);

  const handleRenew = (scopeName) => {
    showToast(`Renewed membership for ${scopeName}! Extended for 1 Year.`, 'success');
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Banner */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 lg:p-10 border border-forest-800 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-tan-500/20 text-tan-300 border border-tan-500/30 rounded-full">
            Unified Multi-Tier Member Portal
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Welcome Back, {currentUser.name}!
          </h1>
          <p className="text-xs text-tan-200 font-medium">
            Single Login Account • Email: <strong>{currentUser.email}</strong> • Active Memberships: <strong className="text-emerald-400 font-bold">{myMemberships.length} Associations & Clubs</strong>
          </p>
        </div>

        <div className="relative flex flex-wrap items-center gap-3">
          <Link
            to="/member/dogs"
            className="px-4 py-2.5 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow-md flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Canine
          </Link>
          <Link
            to="/join"
            className="px-4 py-2.5 bg-forest-800 hover:bg-forest-900 text-white font-black text-xs rounded-xl border border-forest-700 shadow-md flex items-center gap-1.5 transition-all"
          >
            <Building2 className="w-4 h-4 text-tan-400" /> Join More Clubs / States
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Memberships" value={myMemberships.length.toString()} subtext="National, States & Local Clubs" icon={Award} />
        <StatCard title="My Registered Canines" value={myDogs.length.toString()} subtext="Digital UKC Pedigree Records" icon={Dog} />
        <StatCard title="Event Registrations" value={myEntries.length.toString()} subtext="Nite Hunts & Bench Trials" icon={ClipboardList} />
        <StatCard title="Merchandise Orders" value={myOrders.length.toString()} subtext="Store Orders & Deliveries" icon={ShoppingBag} />
      </div>

      {/* 1. Multi-Tier Memberships Section */}
      <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-6">
        <div className="flex items-center justify-between border-b border-surface-border pb-4">
          <div>
            <h3 className="font-extrabold text-xl text-forest-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-tan-600" />
              <span>My Active Memberships (Single Login)</span>
            </h3>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Belong to National HQ, multiple State Associations, and multiple Local Clubs simultaneously under one portal.
            </p>
          </div>

          <Link
            to="/join"
            className="px-3.5 py-2 bg-emerald-950/10 text-emerald-900 font-extrabold text-xs rounded-xl border border-emerald-600/30 hover:bg-emerald-950/20"
          >
            + Join Another State or Club
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myMemberships.map((m) => (
            <div
              key={m.id}
              className="bg-surface-low p-5 rounded-2xl border border-surface-border shadow-xs flex flex-col justify-between space-y-4 hover:border-tan-500/50 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded border flex items-center gap-1 ${
                    m.tier.includes('National')
                      ? 'bg-forest-900/10 text-forest-900 border-forest-800/20'
                      : m.tier.includes('State')
                      ? 'bg-amber-500/10 text-amber-800 border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-800 border-emerald-500/30'
                  }`}>
                    {m.tier.includes('National') && <Globe className="w-3 h-3 text-forest-800" />}
                    {m.tier.includes('State') && <MapPin className="w-3 h-3 text-amber-700" />}
                    {m.tier.includes('Club') && <Building2 className="w-3 h-3 text-emerald-700" />}
                    {m.tier}
                  </span>

                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {m.status || 'Active'}
                  </span>
                </div>

                <h4 className="font-extrabold text-sm text-forest-950">{m.scopeName}</h4>
                <div className="text-xs text-charcoal-muted font-mono font-bold">
                  ID: {m.membershipId}
                </div>
              </div>

              <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-charcoal-light block">Expires</span>
                  <strong className="font-bold text-forest-900">{m.expiryDate || 'Sep 18, 2027'}</strong>
                </div>

                <button
                  onClick={() => handleRenew(m.scopeName)}
                  className="px-3 py-1.5 bg-forest-900 hover:bg-forest-950 text-white font-extrabold text-[11px] rounded-lg shadow-xs flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-tan-400" /> Renew Dues
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Registered Dogs & Orders Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Registered Dogs */}
        <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-forest-900 flex items-center gap-2">
              <Dog className="w-5 h-5 text-tan-600" /> My Canines ({myDogs.length})
            </h3>
            <Link to="/member/dogs" className="text-xs font-bold text-forest-800 hover:underline">
              Manage All
            </Link>
          </div>

          {myDogs.length > 0 ? (
            <div className="space-y-3">
              {myDogs.map((d) => (
                <div key={d.id} className="p-3.5 rounded-xl border border-surface-border bg-surface-low flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img src={d.photo} alt={d.callName} className="w-11 h-11 rounded-xl object-cover border border-surface-border" />
                    <div>
                      <div className="font-extrabold text-forest-950">{d.callName} ({d.registeredName})</div>
                      <div className="text-[11px] text-charcoal-muted">{d.breed} • Reg: <strong className="font-mono">{d.regNo}</strong></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-tan-100 text-tan-900">
                    {d.winsCount || 0} Wins
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-charcoal-muted bg-surface-low rounded-xl border">
              No dogs registered under this profile yet.
            </div>
          )}
        </div>

        {/* Recent Merchandise Orders */}
        <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-forest-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-tan-600" /> Purchase History ({myOrders.length})
            </h3>
            <Link to="/store" className="text-xs font-bold text-forest-800 hover:underline">
              Visit Store
            </Link>
          </div>

          {myOrders.length > 0 ? (
            <div className="space-y-3">
              {myOrders.map((o) => (
                <div key={o.id} className="p-4 rounded-xl border border-surface-border bg-surface-low space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-forest-950 text-sm">{o.product || o.items}</div>
                      <div className="text-[11px] text-charcoal-muted mt-0.5">Order ID: <strong className="font-mono">{o.id}</strong> • Date: {o.date || 'Aug 10, 2026'}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-forest-950 text-sm">${(Number(o.sellingPrice || o.total) || 0).toFixed(2)}</div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                        {o.fulfillmentStatus || 'Paid & Dispatched'}
                      </span>
                    </div>
                  </div>

                  {/* Percentage & Dollar Split Transparency Badge */}
                  <div className="p-3 rounded-xl bg-forest-950 text-white space-y-1.5 border border-forest-800 text-[11px]">
                    <div className="font-extrabold text-tan-300 text-xs flex items-center justify-between border-b border-forest-800 pb-1">
                      <span>Revenue Split & Treasury Allocation</span>
                      <span className="text-[10px] px-2 py-0.5 bg-tan-500 text-forest-950 font-black rounded uppercase">
                        Channel: {o.originType || 'CLUB'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[10px]">
                      <div className="bg-emerald-900/60 p-2 rounded border border-emerald-700/50">
                        <div className="text-emerald-300 font-bold">Local Club Share ({o.originType === 'CLUB' ? '15%' : '0%'})</div>
                        <div className="text-white font-black text-xs">${(Number(o.clubShare) || 0).toFixed(2)}</div>
                        <div className="text-[9px] text-emerald-200 truncate">{o.club || o.orderSource}</div>
                      </div>

                      <div className="bg-amber-900/60 p-2 rounded border border-amber-700/50">
                        <div className="text-amber-300 font-bold">State Share ({o.originType === 'CLUB' || o.originType === 'STATE' ? '7%' : '0%'})</div>
                        <div className="text-white font-black text-xs">${(Number(o.stateShare) || 0).toFixed(2)}</div>
                        <div className="text-[9px] text-amber-200 truncate">{o.state || 'Tennessee'}</div>
                      </div>

                      <div className="bg-forest-900 p-2 rounded border border-forest-700">
                        <div className="text-tan-300 font-bold">National HQ ({o.originType === 'NATIONAL' ? '30%' : '8%'})</div>
                        <div className="text-white font-black text-xs">${(Number(o.nationalShare) || 0).toFixed(2)}</div>
                        <div className="text-[9px] text-tan-200">UHC National</div>
                      </div>

                      <div className="bg-surface-border/20 p-2 rounded border border-surface-border/40">
                        <div className="text-charcoal-muted font-bold">Vendor Payout (70%)</div>
                        <div className="text-white font-black text-xs">${(Number(o.vendorAmount) || 0).toFixed(2)}</div>
                        <div className="text-[9px] text-charcoal-muted truncate">{o.vendorName || 'Garmin'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-charcoal-muted bg-surface-low rounded-xl border">
              No store orders recorded yet.
            </div>
          )}
        </div>
      </div>

      {/* Member Officer Voting Section */}
      <VotingBoothSection />
    </div>
  );
};

const VotingBoothSection = () => {
  const { elections = [], votes = [], castVote, currentUser } = useApp();
  const [selectedCandidateMap, setSelectedCandidateMap] = useState({});

  return (
    <div className="bg-surface-lowest p-6 rounded-2xl border border-surface-border shadow-ambient space-y-6">
      <div className="border-b border-surface-border pb-4 flex items-center justify-between">
        <div>
          <h3 className="font-extrabold text-xl text-forest-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-tan-600" />
            <span>Active Officer Elections & Member Voting Booth</span>
          </h3>
          <p className="text-xs text-charcoal-muted mt-0.5">
            Eligible members can vote for State Association and Local Club Officers. Duplicate voting is automatically prevented.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-black bg-tan-100 text-tan-900 border border-tan-300">
          Voter: {currentUser.name}
        </span>
      </div>

      <div className="space-y-6">
        {elections.map((elec) => (
          <div key={elec.id} className="p-6 bg-surface-low rounded-2xl border border-surface-border space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border pb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-forest-900 text-white">
                  {elec.organization} ({elec.organizationType})
                </span>
                <h4 className="font-black text-lg text-forest-950 mt-1">{elec.title}</h4>
                <p className="text-xs text-charcoal-muted">{elec.description}</p>
              </div>
              <div className="text-xs font-bold text-tan-700 bg-surface-lowest px-3 py-1.5 rounded-xl border border-surface-border self-start sm:self-auto">
                Voting Period: {elec.startDate} - {elec.endDate}
              </div>
            </div>

            <div className="space-y-4">
              {elec.positions.map((pos) => {
                const existingVote = votes.find(
                  (v) => v.electionId === elec.id && v.positionId === pos.id && v.userEmail === currentUser.email
                );
                const selectedCandId = selectedCandidateMap[`${elec.id}_${pos.id}`] || pos.candidates[0]?.id;

                return (
                  <div key={pos.id} className="p-4 bg-surface-lowest rounded-xl border border-surface-border space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-xs text-forest-950">Position: {pos.title}</span>
                      {existingVote ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Vote Cast & Confirmed
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          Ballot Open
                        </span>
                      )}
                    </div>

                    {!existingVote ? (
                      <div className="space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {pos.candidates.map((cand) => (
                            <label
                              key={cand.id}
                              className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                                selectedCandId === cand.id
                                  ? 'bg-tan-50 border-tan-500 ring-2 ring-tan-500/20'
                                  : 'bg-surface-low border-surface-border hover:bg-surface-low/80'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name={`pos_${elec.id}_${pos.id}`}
                                  checked={selectedCandId === cand.id}
                                  onChange={() => setSelectedCandidateMap({ ...selectedCandidateMap, [`${elec.id}_${pos.id}`]: cand.id })}
                                  className="text-tan-600 focus:ring-tan-500"
                                />
                                <div>
                                  <div className="font-black text-xs text-forest-950">{cand.name}</div>
                                  <div className="text-[10px] text-charcoal-muted font-medium">{cand.bio}</div>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>

                        <button
                          onClick={() =>
                            castVote({
                              electionId: elec.id,
                              positionId: pos.id,
                              candidateId: selectedCandId,
                              userEmail: currentUser.email
                            })
                          }
                          className="px-4 py-2 bg-tan-500 hover:bg-tan-600 text-forest-950 font-black text-xs rounded-xl shadow cursor-pointer transition-all flex items-center gap-1.5"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>Submit Ballot for {pos.title}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                        Your vote for <strong>{pos.candidates.find((c) => c.id === existingVote.candidateId)?.name || 'Selected Candidate'}</strong> has been registered in the official election ledger.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
