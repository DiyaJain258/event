import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_USERS,
  INITIAL_MEMBERS,
  INITIAL_STATES,
  INITIAL_CLUBS,
  INITIAL_DOGS,
  INITIAL_EVENTS,
  INITIAL_ENTRIES,
  INITIAL_RESULTS,
  INITIAL_ORDERS,
  INITIAL_PRODUCTS,
  INITIAL_CLAIMS,
  INITIAL_NEWS,
  INITIAL_SPONSORS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_OFFICERS,
  INITIAL_TRANSACTIONS,
  INITIAL_COMMISSIONS,
  INITIAL_COMMISSION_SETTINGS,
  INITIAL_VENDORS,
  INITIAL_MEMBERSHIPS,
  INITIAL_ELECTIONS,
  DEFAULT_PERMISSIONS
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Current user & role state
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('nh_currentUser');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.name === 'John Walker') {
        return INITIAL_USERS[0];
      }
      return parsed;
    }
    return INITIAL_USERS[0];
  });

  // Clean state - remove old dummy entries/members
  const dummyNames = ['John Walker', 'Marcus Vance', 'Sarah Jenkins', 'Cody Campbell', 'Frank Reynolds'];

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('nh_users');
    if (saved) {
      const parsed = JSON.parse(saved);
      const cleaned = parsed.filter((u) => !dummyNames.includes(u.name) && u.id !== 'usr-1');
      const lalitExists = cleaned.some((u) => u.email && u.email.toLowerCase() === 'pancholelalit52@gmail.com');
      if (!lalitExists) {
        return [INITIAL_USERS[0], ...cleaned];
      }
      return cleaned.length > 0 ? cleaned : INITIAL_USERS;
    }
    return INITIAL_USERS;
  });

  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('nh_members');
    if (saved) {
      const parsed = JSON.parse(saved);
      const cleaned = parsed.filter((m) => !dummyNames.includes(m.name) && !['mem-1', 'mem-2', 'mem-3', 'mem-4', 'mem-5'].includes(m.id));
      const lalitExists = cleaned.some((m) => m.email && m.email.toLowerCase() === 'pancholelalit52@gmail.com');
      if (!lalitExists) {
        return [INITIAL_MEMBERS[0], ...cleaned];
      }
      return cleaned.length > 0 ? cleaned : INITIAL_MEMBERS;
    }
    return INITIAL_MEMBERS;
  });

  const [states] = useState(INITIAL_STATES);
  const [clubs, setClubs] = useState(() => {
    const saved = localStorage.getItem('nh_clubs');
    return saved ? JSON.parse(saved) : INITIAL_CLUBS;
  });

  const [dogs, setDogs] = useState(() => {
    const saved = localStorage.getItem('nh_dogs');
    if (saved) {
      const parsed = JSON.parse(saved);
      const cleaned = parsed.filter((d) => !dummyNames.includes(d.owner) || d.owner === 'Lalit Panchole');
      return cleaned.length > 0 ? cleaned : INITIAL_DOGS;
    }
    return INITIAL_DOGS;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('nh_events');
    if (saved) {
      const parsed = JSON.parse(saved);
      const existingIds = new Set(parsed.map((e) => e.id));
      const missingInitial = INITIAL_EVENTS.filter((e) => !existingIds.has(e.id));
      if (missingInitial.length > 0) {
        return [...parsed, ...missingInitial];
      }
      return parsed;
    }
    return INITIAL_EVENTS;
  });

  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('nh_entries');
    if (saved) {
      const parsed = JSON.parse(saved);
      const cleaned = parsed.filter((e) => !dummyNames.includes(e.participant) || e.participant === 'Lalit Panchole');
      return cleaned.length > 0 ? cleaned : INITIAL_ENTRIES;
    }
    return INITIAL_ENTRIES;
  });

  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('nh_results');
    return saved ? JSON.parse(saved) : INITIAL_RESULTS;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('nh_orders_v2');
    const raw = saved ? JSON.parse(saved) : INITIAL_ORDERS;
    return raw.map((o) => ({
      ...o,
      items: o.items || o.item || 'Official Product',
      item: o.item || o.items || 'Official Product',
      total: typeof o.total === 'number' ? o.total : (typeof o.amount === 'number' ? o.amount : 0),
      amount: typeof o.amount === 'number' ? o.amount : (typeof o.total === 'number' ? o.total : 0),
      paymentStatus: o.paymentStatus || 'Paid',
      fulfillmentStatus: o.fulfillmentStatus || o.status || 'Delivered',
      status: o.status || o.fulfillmentStatus || 'Delivered'
    }));
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('nh_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('nh_products_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.some((p) => p.price >= 400)) {
        return parsed;
      }
    }
    return INITIAL_PRODUCTS;
  });
  
  const [claims, setClaims] = useState(() => {
    const saved = localStorage.getItem('nh_claims');
    return saved ? JSON.parse(saved) : INITIAL_CLAIMS;
  });

  const [news, setNews] = useState(() => {
    const saved = localStorage.getItem('nh_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem('nh_announcements');
    return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
  });

  const [officers, setOfficers] = useState(() => {
    const saved = localStorage.getItem('nh_officers');
    return saved ? JSON.parse(saved) : INITIAL_OFFICERS;
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('nh_transactions');
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
  });

  const [commissions, setCommissions] = useState(() => {
    const saved = localStorage.getItem('nh_commissions');
    return saved ? JSON.parse(saved) : INITIAL_COMMISSIONS;
  });

  const [elections, setElections] = useState(() => {
    const saved = localStorage.getItem('nh_elections');
    return saved ? JSON.parse(saved) : INITIAL_ELECTIONS;
  });

  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem('nh_votes');
    return saved ? JSON.parse(saved) : [];
  });

  const castVote = ({ electionId, positionId, candidateId, userEmail }) => {
    const existing = votes.find(
      (v) => v.electionId === electionId && v.positionId === positionId && v.userEmail === userEmail
    );
    if (existing) {
      showToast('You have already cast a vote for this position.', 'error');
      return false;
    }
    const newVote = { id: `vote-${Date.now()}`, electionId, positionId, candidateId, userEmail, date: new Date().toLocaleDateString() };
    const updated = [...votes, newVote];
    setVotes(updated);
    localStorage.setItem('nh_votes', JSON.stringify(updated));
    showToast('Vote cast successfully!', 'success');
    return true;
  };

  const [commissionSettings, setCommissionSettings] = useState(() => {
    const saved = localStorage.getItem('nh_commission_settings');
    return saved ? JSON.parse(saved) : INITIAL_COMMISSION_SETTINGS;
  });

  const [vendors, setVendors] = useState(() => {
    const saved = localStorage.getItem('nh_vendors');
    return saved ? JSON.parse(saved) : INITIAL_VENDORS;
  });

  const [userMemberships, setUserMemberships] = useState(() => {
    const saved = localStorage.getItem('nh_user_memberships');
    return saved ? JSON.parse(saved) : INITIAL_MEMBERSHIPS;
  });

  const [sponsors] = useState(INITIAL_SPONSORS);
  const [permissions, setPermissions] = useState(DEFAULT_PERMISSIONS);

  // Toast system
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Sync state to localstorage
  useEffect(() => {
    localStorage.setItem('nh_currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('nh_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('nh_products_v2', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('nh_entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('nh_dogs', JSON.stringify(dogs));
  }, [dogs]);

  useEffect(() => {
    localStorage.setItem('nh_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('nh_claims', JSON.stringify(claims));
  }, [claims]);

  useEffect(() => {
    localStorage.setItem('nh_members', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('nh_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('nh_orders_v2', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('nh_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('nh_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('nh_officers', JSON.stringify(officers));
  }, [officers]);

  useEffect(() => {
    localStorage.setItem('nh_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('nh_commissions', JSON.stringify(commissions));
  }, [commissions]);

  useEffect(() => {
    localStorage.setItem('nh_commission_settings', JSON.stringify(commissionSettings));
  }, [commissionSettings]);

  useEffect(() => {
    localStorage.setItem('nh_vendors', JSON.stringify(vendors));
  }, [vendors]);

  useEffect(() => {
    localStorage.setItem('nh_user_memberships', JSON.stringify(userMemberships));
  }, [userMemberships]);

  const updateCommissionSettings = (newSettings) => {
    setCommissionSettings((prev) => ({ ...prev, ...newSettings }));
    showToast('Commission percentages updated successfully!', 'success');
  };

  const calculateOrderSplit = (priceAmount, originType = 'NATIONAL') => {
    const price = Number(priceAmount) || 0;
    const vendorSharePct = Number(commissionSettings.vendorSharePct) || 70;
    const clubSharePct = Number(commissionSettings.clubSharePct) || 15;
    const stateSharePct = Number(commissionSettings.stateSharePct) || 7;
    const nationalSharePct = Number(commissionSettings.nationalSharePct) || 8;
    const totalCommissionPct = Number(commissionSettings.totalCommissionPct) || 30;

    const vendorAmount = Number((price * (vendorSharePct / 100)).toFixed(2));
    let clubShare = 0;
    let stateShare = 0;
    let nationalShare = 0;

    if (originType === 'CLUB') {
      clubShare = Number((price * (clubSharePct / 100)).toFixed(2));
      stateShare = Number((price * (stateSharePct / 100)).toFixed(2));
      nationalShare = Number((price - vendorAmount - clubShare - stateShare).toFixed(2));
    } else if (originType === 'STATE') {
      clubShare = 0;
      stateShare = Number((price * (stateSharePct / 100)).toFixed(2));
      nationalShare = Number((price - vendorAmount - stateShare).toFixed(2));
    } else {
      // NATIONAL
      clubShare = 0;
      stateShare = 0;
      nationalShare = Number((price - vendorAmount).toFixed(2));
    }

    return { vendorAmount, clubShare, stateShare, nationalShare };
  };

  const updateFulfillmentStatus = (orderId, fulfillmentStatus, trackingNumber) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? { ...o, fulfillmentStatus, status: fulfillmentStatus, trackingNumber: trackingNumber || o.trackingNumber }
          : o
      )
    );
    showToast(`Order #${orderId} set to: ${fulfillmentStatus}`, 'success');
  };

  const updatePayoutStatus = (orderId, payoutStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, payoutStatus } : o))
    );
    showToast(`Order #${orderId} payout status set to: ${payoutStatus}`, 'success');
  };

  const addMembership = (membershipData) => {
    const newRecord = {
      id: `ms-${Date.now()}`,
      userEmail: membershipData.email || currentUser.email,
      tier: membershipData.tier || 'Local Chartered Club',
      scopeName: membershipData.scopeName || 'Oak Ridge Hunting Club (TN)',
      membershipId: membershipData.membershipId || `MEM-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'Active',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      expiryDate: membershipData.expiryDate || 'Sep 18, 2027',
      fee: Number(membershipData.fee) || 25.00
    };
    setUserMemberships((prev) => [newRecord, ...prev]);
    showToast(`Activated ${newRecord.tier}: ${newRecord.scopeName}`, 'success');
  };

  // Role Switcher
  const switchRole = (roleKey) => {
    const foundUser = users.find((u) => u.role === roleKey);
    if (foundUser) {
      setCurrentUser(foundUser);
      showToast(`Switched role to ${foundUser.role.replace('_', ' ')} (${foundUser.scope})`, 'info');
    }
  };

  // REAL AUTH LOGIN ACTION FOR SPECIFIC USERS (e.g. pancholelalit52@gmail.com)
  const loginUser = (email, password) => {
    const cleanEmail = String(email || '').trim().toLowerCase();
    
    // Find existing user in state
    let found = users.find((u) => u.email && u.email.toLowerCase() === cleanEmail);

    if (!found) {
      // Find in members list
      const member = members.find((m) => m.email && m.email.toLowerCase() === cleanEmail);

      let displayName = 'Lalit Panchole';
      if (cleanEmail.includes('lalit') || cleanEmail.includes('panchole')) {
        displayName = 'Lalit Panchole';
      } else if (cleanEmail.includes('@')) {
        const parts = cleanEmail.split('@')[0].split('.');
        displayName = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
      }

      found = {
        id: member ? member.id : `usr-${Date.now()}`,
        name: member ? member.name : displayName,
        email: cleanEmail,
        role: 'MEMBER',
        scope: member ? `${member.club} (${member.state})` : 'Oak Ridge Hunting Club (Tennessee)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        membershipId: member ? member.membershipId : `TN-ORHC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        club: member ? member.club : 'Oak Ridge Hunting Club',
        state: member ? member.state : 'Tennessee'
      };

      setUsers((prev) => [found, ...prev]);

      // If member record doesn't exist yet, create one for this user!
      if (!member) {
        const newMemberRecord = {
          id: found.id,
          name: found.name,
          membershipId: found.membershipId,
          club: found.club,
          state: found.state,
          type: 'Individual Membership',
          status: 'Active',
          joined: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
          expires: 'Sep 18, 2027',
          phone: '(865) 555-0192',
          email: cleanEmail
        };
        setMembers((prev) => [newMemberRecord, ...prev]);
      }
    }

    setCurrentUser(found);
    showToast(`Welcome back, ${found.name}! Logged in successfully.`, 'success');
    return found;
  };

  // 1. Membership Join Flow Action
  const registerMembership = (formData) => {
    const newId = `TN-ORHC-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const fullName = `${formData.firstName} ${formData.lastName}`;
    const cleanEmail = String(formData.email || '').trim().toLowerCase();

    const newMember = {
      id: `mem-${Date.now()}`,
      name: fullName,
      membershipId: newId,
      club: formData.selectedClub || formData.clubName || 'Oak Ridge Hunting Club',
      state: formData.selectedState || formData.stateName || 'Tennessee',
      type: formData.membershipType || 'Individual Membership',
      status: 'Active',
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      expires: 'Sep 18, 2027',
      phone: formData.phone || '(865) 555-0192',
      email: cleanEmail
    };

    const newUser = {
      id: newMember.id,
      name: fullName,
      email: cleanEmail,
      role: 'MEMBER',
      scope: `${newMember.club} (${newMember.state})`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      membershipId: newId,
      club: newMember.club,
      state: newMember.state
    };

    setMembers((prev) => [newMember, ...prev]);
    setUsers((prev) => [newUser, ...prev]);

    // Automatically set logged in user to this newly created member account
    setCurrentUser(newUser);
    showToast(`Membership activated for ${fullName}! ID: ${newId}`, 'success');
    return newMember;
  };

  // State Membership Sign-Up Flow Action
  const registerStateMembership = (formData) => {
    const stateName = formData.state || 'Texas';
    const stateCode = stateName.substring(0, 2).toUpperCase();
    const newId = `${stateCode}-HOUND-${Math.floor(10000 + Math.random() * 90000)}`;
    const cleanEmail = String(formData.email || '').trim().toLowerCase();
    const amountPaid = Number(formData.amount || 35.00);

    const newMember = {
      id: `mem-${Date.now()}`,
      name: formData.name,
      address: formData.address || '',
      city: formData.city || '',
      state: stateName,
      phone: formData.phone || '',
      email: cleanEmail,
      membershipId: newId,
      club: formData.clubAffiliation || 'Lone Star Hound Club',
      type: formData.membershipType || 'Individual Membership',
      dogSportInterests: Array.isArray(formData.dogSportInterests)
        ? formData.dogSportInterests
        : [formData.dogSportInterests || 'Coonhound Nite Hunts'],
      status: 'Active',
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      paymentRecorded: true,
      amountPaid: amountPaid,
      paymentDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };

    const newUser = {
      id: newMember.id,
      name: formData.name,
      email: cleanEmail,
      role: 'MEMBER',
      scope: `${newMember.club} (${newMember.state})`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      membershipId: newId,
      club: newMember.club,
      state: newMember.state
    };

    // Automatically record payment in transactions ledger
    const newTransaction = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      description: `State Membership Sign-Up - ${formData.name} (${stateName})`,
      category: 'State Membership Dues',
      amount: amountPaid,
      type: 'Credit',
      status: 'Completed',
      state: stateName,
      memberId: newId,
      reference: `PAY-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };

    setMembers((prev) => [newMember, ...prev]);
    setUsers((prev) => [newUser, ...prev]);
    setTransactions((prev) => [newTransaction, ...prev]);
    setCurrentUser(newUser);

    showToast(`State Membership successfully activated for ${formData.name}! Recorded payment of $${amountPaid.toFixed(2)}.`, 'success');
    return newMember;
  };

  // 2. Event Registration Flow Action
  const enterEvent = (eventId, dogId, participantName) => {
    const targetEvent = events.find((e) => e.id === eventId);
    const targetDog = dogs.find((d) => d.id === dogId) || dogs.find((d) => d.owner === currentUser.name) || dogs[0];

    if (!targetEvent) return;

    const newEntryId = `E${Math.floor(1000 + Math.random() * 9000)}`;
    const newEntry = {
      id: newEntryId,
      eventId: targetEvent.id,
      eventName: targetEvent.name,
      club: targetEvent.club,
      participant: participantName || currentUser.name,
      participantEmail: currentUser.email,
      dog: targetDog ? targetDog.callName : 'Registered Canine',
      date: targetEvent.date,
      fee: targetEvent.fee,
      paymentStatus: 'Paid',
      entryStatus: 'Confirmed',
      checkInStatus: 'Not Arrived',
      result: 'Pending'
    };

    setEntries((prev) => [newEntry, ...prev]);

    // Update event stats
    setEvents((prev) =>
      prev.map((e) =>
        e.id === eventId
          ? { ...e, entries: e.entries + 1, paidEntries: e.paidEntries + 1 }
          : e
      )
    );

    showToast(`Registered ${targetDog?.callName || 'dog'} for ${targetEvent.name}! Entry #${newEntryId}`, 'success');
  };

  // 3. Mobile Event Check-in Action
  const toggleCheckIn = (entryId) => {
    setEntries((prev) =>
      prev.map((item) => {
        if (item.id === entryId) {
          const newStatus = item.checkInStatus === 'Checked In' ? 'Not Arrived' : 'Checked In';
          showToast(`Entry #${entryId} ${item.participant} status set to: ${newStatus}`, newStatus === 'Checked In' ? 'success' : 'info');
          return { ...item, checkInStatus: newStatus };
        }
        return item;
      })
    );
  };

  // 4. Create Event Action
  const createEvent = (newEventData) => {
    const created = {
      id: `evt-${Date.now()}`,
      name: newEventData.name,
      sport: newEventData.sport || 'Coonhounds',
      type: newEventData.type || 'Nite Hunt',
      club: newEventData.club || 'Oak Ridge Hunting Club',
      state: newEventData.state || 'Tennessee',
      city: newEventData.city || 'Knoxville',
      date: newEventData.date || 'October 15, 2026',
      startTime: newEventData.startTime || '7:00 PM',
      deadline: newEventData.deadline || 'Oct 14, 2026',
      fee: Number(newEventData.fee) || 30,
      entries: 0,
      maxCapacity: Number(newEventData.maxCapacity) || 50,
      paidEntries: 0,
      pendingEntries: 0,
      checkedIn: 0,
      status: 'Registration Open',
      distance: '18 miles away',
      address: newEventData.address || '1420 Hunting Ridge Rd, Knoxville, TN',
      description: newEventData.description || 'New hunt event created by administrator.'
    };

    setEvents((prev) => [created, ...prev]);
    showToast(`Event "${created.name}" published successfully!`, 'success');
  };

  // 5. Add / Edit Dog Action
  const saveDog = (dogData) => {
    if (dogData.id) {
      setDogs((prev) => prev.map((d) => (d.id === dogData.id ? { ...d, ...dogData } : d)));
      showToast(`Updated dog ${dogData.callName} profile`, 'success');
    } else {
      const newDog = {
        id: `dog-${Date.now()}`,
        callName: dogData.callName,
        registeredName: dogData.registeredName,
        breed: dogData.breed || 'Treeing Walker Coonhound',
        gender: dogData.gender || 'Male',
        age: dogData.age || '2 Years',
        dob: dogData.dob || 'Jan 2024',
        regNo: dogData.regNo || `UKC-${Math.floor(100000 + Math.random() * 900000)}`,
        owner: currentUser.name,
        ownerEmail: currentUser.email,
        eventsCount: 0,
        winsCount: 0,
        photo: dogData.photo || 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&auto=format&fit=crop&q=80'
      };
      setDogs((prev) => [newDog, ...prev]);
      showToast(`Added new dog: ${newDog.callName} for ${currentUser.name}`, 'success');
    }
  };

  const deleteDog = (id) => {
    setDogs((prev) => prev.filter((d) => d.id !== id));
    showToast('Dog profile removed', 'info');
  };

  const updateClaimStatus = (claimId, newStatus) => {
    setClaims((prev) =>
      prev.map((c) => (c.id === claimId ? { ...c, status: newStatus } : c))
    );
    showToast(`Claim #${claimId} status updated to: ${newStatus}`, 'success');
  };

  const addResult = (resultData) => {
    const newRes = {
      id: `res-${Date.now()}`,
      ...resultData,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };
    setResults((prev) => [newRes, ...prev]);
    showToast(`Published competition result for ${resultData.eventName}!`, 'success');
  };

  const updatePermission = (role, module, action, value) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [module]: {
          ...prev[role][module],
          [action]: value
        }
      }
    }));
    showToast(`Updated ${role} permission for ${module}:${action}`, 'info');
  };

  const addNews = (newsData) => {
    const newItem = {
      id: `news-${Date.now()}`,
      title: newsData.title,
      category: newsData.category || 'State Hunt announcements',
      level: newsData.level || 'STATE',
      state: newsData.state || 'Texas',
      stateId: newsData.stateId || 'texas',
      stateCode: newsData.stateCode || 'TX',
      author: newsData.author || currentUser.name,
      summary: newsData.summary || 'Official article published to state news feed.',
      isPromotedToNational: Boolean(newsData.isPromotedToNational),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      image: newsData.image || 'https://images.unsplash.com/photo-1511497584788-876761c11969?w=600&auto=format&fit=crop&q=80'
    };
    setNews((prev) => [newItem, ...prev]);
    showToast(`Published article: "${newItem.title}"`, 'success');
  };

  const promoteNewsToNational = (newsId) => {
    setNews((prev) =>
      prev.map((n) => {
        if (n.id === newsId) {
          const updatedStatus = !n.isPromotedToNational;
          showToast(
            updatedStatus
              ? `Promoted "${n.title}" to National UHC News Feed!`
              : `Removed "${n.title}" promotion from National Feed.`,
            updatedStatus ? 'success' : 'info'
          );
          return { ...n, isPromotedToNational: updatedStatus };
        }
        return n;
      })
    );
  };

  const addAnnouncement = (annData) => {
    const newItem = {
      id: `anc-${Date.now()}`,
      title: annData.title,
      message: annData.message,
      priority: annData.priority || 'Normal',
      scope: annData.scope || 'Club',
      club: annData.club || currentUser.club || 'Oak Ridge Hunting Club',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };
    setAnnouncements((prev) => [newItem, ...prev]);
    showToast(`Broadcasted announcement: "${newItem.title}"`, 'success');
  };

  const addOfficer = (offData) => {
    const newItem = {
      id: `off-${Date.now()}`,
      name: offData.name,
      title: offData.title,
      club: offData.club || currentUser.club || 'Oak Ridge Hunting Club',
      phone: offData.phone || '(865) 555-0199',
      email: offData.email || 'officer@huntingclub.org',
      term: offData.term || '2026 - 2028',
      photo: offData.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    };
    setOfficers((prev) => [newItem, ...prev]);
    showToast(`Added official officer: ${newItem.name} (${newItem.title})`, 'success');
  };

  const addTransaction = (txnData) => {
    const newItem = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      description: txnData.description,
      category: txnData.category || 'General Ledger',
      amount: Number(txnData.amount) || 0,
      type: txnData.type || 'Credit',
      status: 'Completed',
      reference: txnData.reference || `REF-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };
    setTransactions((prev) => [newItem, ...prev]);
    showToast(`Recorded transaction: $${newItem.amount.toFixed(2)}`, 'success');
  };

  const updateUserRole = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
    showToast(`User role updated to ${newRole}`, 'info');
  };

  // Cart Actions & Calculated Values
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartShipping = cartSubtotal > 100 || cartSubtotal === 0 ? 0 : 15.00;
  const cartTax = cartSubtotal * 0.08;
  const cartTotal = cartSubtotal + cartShipping + cartTax;

  const addToCart = (product, quantityToAdd = 1, originDetails = null) => {
    if (!product) return;
    const currentStock = product.inStock || 0;
    if (currentStock <= 0) {
      showToast(`Sorry, ${product.name} is currently out of stock.`, 'error');
      return;
    }

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);

      const itemOrigin = originDetails || {
        originType: 'CLUB',
        orderSource: 'Oak Ridge Hunting Club',
        clubName: 'Oak Ridge Hunting Club',
        stateName: 'Tennessee'
      };

      if (existingIndex > -1) {
        const existingItem = prevCart[existingIndex];
        const newQty = Math.min(currentStock, existingItem.quantity + quantityToAdd);
        if (newQty === existingItem.quantity) {
          showToast(`Cannot add more. Stock limit of ${currentStock} reached for ${product.name}.`, 'warning');
          return prevCart;
        }
        const updated = [...prevCart];
        updated[existingIndex] = { ...existingItem, quantity: newQty, originDetails: itemOrigin };
        showToast('Added to cart with active revenue origin channel.', 'success');
        return updated;
      } else {
        const initialQty = Math.min(currentStock, quantityToAdd);
        showToast('Added to cart with active revenue origin channel.', 'success');
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            category: product.category || 'Gear',
            price: product.price,
            wholesaleCost: product.wholesaleCost,
            vendorName: product.vendorName,
            inStock: product.inStock,
            image: product.image,
            description: product.description,
            quantity: initialQty,
            originDetails: itemOrigin
          }
        ];
      }
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const maxStock = item.inStock || 99;
          const targetQty = Math.min(maxStock, newQuantity);
          if (targetQty < newQuantity) {
            showToast(`Maximum stock available: ${maxStock}`, 'info');
          }
          return { ...item, quantity: targetQty };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const clearCart = () => {
    setCart([]);
    showToast('Cart cleared.', 'info');
  };

  const placeOrder = (checkoutData) => {
    if (cart.length === 0) {
      showToast('Your cart is empty!', 'error');
      return null;
    }

    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const fullName = `${checkoutData.firstName} ${checkoutData.lastName}`;
    const cleanEmail = String(checkoutData.email || '').trim().toLowerCase();

    const firstCartOrigin = cart[0]?.originDetails;
    const originType = checkoutData.originType || firstCartOrigin?.originType || 'CLUB'; // CLUB | STATE | NATIONAL
    const orderSource = checkoutData.orderSource || firstCartOrigin?.orderSource || checkoutData.clubName || 'Oak Ridge Hunting Club';
    const stateName = checkoutData.stateName || firstCartOrigin?.stateName || checkoutData.state || 'Tennessee';
    const clubName = checkoutData.clubName || firstCartOrigin?.clubName || 'Oak Ridge Hunting Club';
    const firstVendor = cart[0]?.vendorName || 'Garmin Outdoor';

    const splits = calculateOrderSplit(cartSubtotal, originType);

    const createdOrder = {
      id: orderId,
      customer: fullName,
      email: cleanEmail,
      phone: checkoutData.phone || '(865) 555-0199',
      shippingAddress: {
        address1: checkoutData.address1,
        address2: checkoutData.address2 || '',
        city: checkoutData.city,
        state: checkoutData.state,
        zip: checkoutData.zip,
        country: checkoutData.country || 'United States'
      },
      product: cart.map((i) => i.name).join(', '),
      items: cart.map((i) => `${i.name} (Qty: ${i.quantity})`).join(', '),
      item: cart.map((i) => `${i.name} (Qty: ${i.quantity})`).join(', '),
      vendorName: firstVendor,
      sellingPrice: cartSubtotal,
      wholesaleCost: splits.vendorAmount,
      profitMargin: Number((cartSubtotal - splits.vendorAmount).toFixed(2)),
      profitMarginPct: 30,
      vendorAmount: splits.vendorAmount,
      nationalShare: splits.nationalShare,
      stateShare: splits.stateShare,
      clubShare: splits.clubShare,
      orderSource,
      originType,
      state: stateName,
      club: clubName,
      orderItems: cart.map((i) => ({
        id: i.id,
        name: i.name,
        category: i.category,
        price: i.price,
        quantity: i.quantity,
        subtotal: i.price * i.quantity,
        image: i.image
      })),
      subtotal: cartSubtotal,
      shipping: cartShipping,
      tax: cartTax,
      total: cartTotal,
      amount: cartTotal,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      paymentStatus: 'Paid',
      payoutStatus: 'Pending',
      fulfillmentStatus: 'Processing',
      status: 'Processing',
      trackingNumber: 'Pending Dispatch',
      paymentMethod: checkoutData.paymentMethod || 'Credit / Debit Card',
      estimatedDelivery: '3-5 Business Days'
    };

    // 1. Save new order
    setOrders((prev) => [createdOrder, ...prev]);

    // 2. Reduce product stock ONLY after successful order placement
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        const itemInCart = cart.find((ci) => ci.id === p.id);
        if (itemInCart) {
          const newStock = Math.max(0, p.inStock - itemInCart.quantity);
          return { ...p, inStock: newStock };
        }
        return p;
      })
    );

    // 3. Clear Shopping Cart
    setCart([]);

    showToast(`Order placed successfully! Order ID: ${orderId}`, 'success');
    return createdOrder;
  };

  const addProduct = (newProd) => {
    const productWithId = {
      id: newProd.id || `prod-${Date.now()}`,
      inStock: Number(newProd.inStock) || 50,
      price: Number(newProd.price) || 0,
      wholesaleCost: Number(newProd.wholesaleCost) || Number((newProd.price * 0.7).toFixed(2)),
      margin: Number(newProd.margin) || Number((newProd.price * 0.3).toFixed(2)),
      image: newProd.image || 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop&q=80',
      ...newProd
    };
    const updated = [productWithId, ...products];
    setProducts(updated);
    localStorage.setItem('nh_products_v2', JSON.stringify(updated));
    showToast(`Product "${productWithId.name}" added successfully!`, 'success');
    return productWithId;
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        members,
        setMembers,
        states,
        clubs,
        setClubs,
        dogs,
        setDogs,
        events,
        setEvents,
        entries,
        setEntries,
        results,
        setResults,
        orders,
        setOrders,
        products,
        setProducts,
        addProduct,
        cart,
        setCart,
        cartCount,
        cartSubtotal,
        cartShipping,
        cartTax,
        cartTotal,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        placeOrder,
        vendors,
        setVendors,
        commissionSettings,
        setCommissionSettings,
        updateCommissionSettings,
        calculateOrderSplit,
        updateFulfillmentStatus,
        updatePayoutStatus,
        userMemberships,
        setUserMemberships,
        addMembership,
        claims,
        setClaims,
        news,
        setNews,
        addNews,
        promoteNewsToNational,
        announcements,
        setAnnouncements,
        addAnnouncement,
        officers,
        setOfficers,
        addOfficer,
        transactions,
        setTransactions,
        addTransaction,
        commissions,
        setCommissions,
        elections,
        setElections,
        votes,
        setVotes,
        castVote,
        sponsors,
        permissions,
        toasts,
        showToast,
        switchRole,
        loginUser,
        registerMembership,
        registerStateMembership,
        enterEvent,
        toggleCheckIn,
        createEvent,
        saveDog,
        deleteDog,
        updateClaimStatus,
        addResult,
        updatePermission,
        updateUserRole
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
