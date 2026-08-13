// Master Mock Data for Nationwide Hunting Club, Membership & Event Management Platform

export const INITIAL_USERS = [
  { id: 'usr-lalit', name: 'Lalit Panchole', email: 'pancholelalit52@gmail.com', role: 'MEMBER', scope: 'Oak Ridge Hunting Club (Tennessee)', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', status: 'Active', lastActive: 'Just now', membershipId: 'TN-ORHC-2026-99012' },
  { id: 'usr-2', name: 'Robert Miller', email: 'robert.miller@oakridgehc.org', role: 'CLUB_ADMIN', scope: 'Oak Ridge Hunting Club', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', status: 'Active', lastActive: '10 mins ago' },
  { id: 'usr-3', name: 'Sarah Tennessee', email: 'sarah.tn@tn-hunting.org', role: 'STATE_ADMIN', scope: 'Tennessee', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', status: 'Active', lastActive: '1 hour ago' },
  { id: 'usr-4', name: 'David Eventmaster', email: 'david@nitehunt2026.com', role: 'EVENT_ADMIN', scope: 'Nite Hunt (Sep 19, 2026)', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', status: 'Active', lastActive: 'Just now' },
  { id: 'usr-5', name: 'National Director James', email: 'james.director@nationalhunting.org', role: 'NATIONAL_ADMIN', scope: 'National Organization', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80', status: 'Active', lastActive: '4 hours ago' },
  { id: 'usr-6', name: 'Super Admin Alex', email: 'alex.super@nationalhunting.org', role: 'SUPER_ADMIN', scope: 'Entire Platform', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', status: 'Active', lastActive: 'Just now' },
];

export const INITIAL_MEMBERS = [
  { id: 'mem-lalit', name: 'Lalit Panchole', membershipId: 'TN-ORHC-2026-99012', club: 'Oak Ridge Hunting Club', state: 'Tennessee', type: 'Individual Membership', status: 'Active', joined: 'Sep 18, 2025', expires: 'Sep 18, 2027', phone: '(865) 555-0192', email: 'pancholelalit52@gmail.com' }
];

export const INITIAL_STATES = [
  { id: 'tx', name: 'Texas', code: 'TX', clubsCount: 54, membersCount: 3920, eventsCount: 18, revenue: 245000, status: 'Active', adminName: 'Austin Sterling', logo: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=120&auto=format&fit=crop&q=80', description: 'Governing body for Texas field trials, coonhound hunts, and state championship trials.' },
  { id: 'ar', name: 'Arkansas', code: 'AR', clubsCount: 36, membersCount: 2240, eventsCount: 12, revenue: 152000, status: 'Active', adminName: 'Caleb Vance', logo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=120&auto=format&fit=crop&q=80', description: 'Arkansas State Hunting Association overseeing Ozark field trials and river water races.' },
  { id: 'la', name: 'Louisiana', code: 'LA', clubsCount: 32, membersCount: 1950, eventsCount: 10, revenue: 138000, status: 'Active', adminName: 'Beau Thibodeaux', logo: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=120&auto=format&fit=crop&q=80', description: 'Bayou state sporting hound charter & championship night hunt association.' },
  { id: 'ok', name: 'Oklahoma', code: 'OK', clubsCount: 40, membersCount: 2580, eventsCount: 14, revenue: 174000, status: 'Active', adminName: 'Wyatt Earp', logo: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=120&auto=format&fit=crop&q=80', description: 'Oklahoma state hunting dog association overseeing prairie trials and treeing contests.' },
  { id: 'mo', name: 'Missouri', code: 'MO', clubsCount: 45, membersCount: 2890, eventsCount: 15, revenue: 192000, status: 'Active', adminName: 'Jesse James', logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=120&auto=format&fit=crop&q=80', description: 'Show-Me state hunting trial association and championship coonhound pack trials.' },
  { id: 'tn', name: 'Tennessee', code: 'TN', clubsCount: 42, membersCount: 2845, eventsCount: 13, revenue: 184250, status: 'Active', adminName: 'Sarah Tennessee', logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80', description: 'Tennessee State Charter overseeing sanctioned trials, affiliated clubs, and state championships.' },
  { id: 'ky', name: 'Kentucky', code: 'KY', clubsCount: 38, membersCount: 2190, eventsCount: 11, revenue: 142100, status: 'Active', adminName: 'Thomas Shelby', logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=120&auto=format&fit=crop&q=80', description: 'Bluegrass state hunting trials and water race championship organization.' },
  { id: 'va', name: 'Virginia', code: 'VA', clubsCount: 29, membersCount: 1850, eventsCount: 8, revenue: 118400, status: 'Active', adminName: 'Rachel Green', logo: 'https://images.unsplash.com/photo-1511497584788-876761c11969?w=120&auto=format&fit=crop&q=80', description: 'Virginia State Beagle & Coonhound Association.' },
  { id: 'nc', name: 'North Carolina', code: 'NC', clubsCount: 35, membersCount: 2410, eventsCount: 14, revenue: 165000, status: 'Active', adminName: 'Lucas Scott', logo: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=120&auto=format&fit=crop&q=80', description: 'North Carolina sporting hound association and trial grounds.' },
  { id: 'oh', name: 'Ohio', code: 'OH', clubsCount: 48, membersCount: 3120, eventsCount: 16, revenue: 205000, status: 'Active', adminName: 'Jack Crawford', logo: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=120&auto=format&fit=crop&q=80', description: 'Midwest championship trials and youth field trial programs.' },
  { id: 'ca', name: 'California', code: 'CA', clubsCount: 31, membersCount: 1980, eventsCount: 9, revenue: 135000, status: 'Active', adminName: 'Elena Rostova', logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80', description: 'Pacific region field trials and big game tracking associations.' },
  { id: 'fl', name: 'Florida', code: 'FL', clubsCount: 27, membersCount: 1760, eventsCount: 8, revenue: 122000, status: 'Active', adminName: 'Carlos Mendez', logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80', description: 'Florida state trial grounds and coonhound water race championship.' },
  { id: 'ny', name: 'New York', code: 'NY', clubsCount: 24, membersCount: 1540, eventsCount: 7, revenue: 110000, status: 'Active', adminName: 'Dominic Rossi', logo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80', description: 'Empire State field trial charter and hunting dog registries.' }
];

export const INITIAL_CLUBS = [
  { id: 'club-1', name: 'Oak Ridge Hunting Club', city: 'Knoxville', state: 'Tennessee', stateCode: 'TN', stateId: 'tn', zip: '37901', membersCount: 84, eventsCount: 6, entriesCount: 217, estYear: 1978, status: 'Active', adminName: 'Robert Miller', revenue: 6790, logo: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=120&auto=format&fit=crop&q=80', description: 'Dedicated to promoting ethical sporting dog trials, night hunts, and youth mentorship.' },
  { id: 'club-2', name: 'Cumberland Mountain Club', city: 'Middlesboro', state: 'Kentucky', stateCode: 'KY', stateId: 'ky', zip: '40965', membersCount: 96, eventsCount: 8, entriesCount: 304, estYear: 1985, status: 'Active', adminName: 'Thomas Shelby', revenue: 8940, logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=120&auto=format&fit=crop&q=80', description: 'Cumberland river water race trials and mountain coonhound pack trials.' },
  { id: 'club-3', name: 'Smokey Ridge Club', city: 'Sevierville', state: 'Tennessee', stateCode: 'TN', stateId: 'tn', zip: '37862', membersCount: 62, eventsCount: 4, entriesCount: 145, estYear: 1999, status: 'Active', adminName: 'Cody Campbell', revenue: 4520, logo: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=120&auto=format&fit=crop&q=80', description: 'Smokey mountain squirrel dog trials and youth hunt championships.' },
  { id: 'club-4', name: 'Blue Ridge Hunt Club', city: 'Bristol', state: 'Virginia', stateCode: 'VA', stateId: 'va', zip: '24201', membersCount: 71, eventsCount: 5, entriesCount: 188, estYear: 1991, status: 'Active', adminName: 'Frank Reynolds', revenue: 5310, logo: 'https://images.unsplash.com/photo-1511497584788-876761c11969?w=120&auto=format&fit=crop&q=80', description: 'Appalachian trail hound trials and treeing walker coonhound meets.' },
  { id: 'club-5', name: 'Lone Star Hound Club', city: 'Austin', state: 'Texas', stateCode: 'TX', stateId: 'tx', zip: '78701', membersCount: 112, eventsCount: 9, entriesCount: 340, estYear: 1982, status: 'Active', adminName: 'Austin Sterling', revenue: 12400, logo: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=120&auto=format&fit=crop&q=80', description: 'Premier Texas coonhound and big game tracking club.' },
  { id: 'club-6', name: 'Golden State Field Trial Club', city: 'Fresno', state: 'California', stateCode: 'CA', stateId: 'ca', zip: '93701', membersCount: 78, eventsCount: 5, entriesCount: 195, estYear: 1995, status: 'Active', adminName: 'Elena Rostova', revenue: 7800, logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80', description: 'California central valley field trial and tracking organization.' },
  { id: 'club-7', name: 'Sunshine State Nite Hunters', city: 'Ocala', state: 'Florida', stateCode: 'FL', stateId: 'fl', zip: '34470', membersCount: 88, eventsCount: 7, entriesCount: 230, estYear: 1988, status: 'Active', adminName: 'Carlos Mendez', revenue: 8900, logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80', description: 'Florida cypress swamp nite hunts and water race events.' },
  { id: 'club-8', name: 'Empire State Beagle Club', city: 'Syracuse', state: 'New York', stateCode: 'NY', stateId: 'ny', zip: '13201', membersCount: 65, eventsCount: 4, entriesCount: 160, estYear: 2002, status: 'Active', adminName: 'Dominic Rossi', revenue: 6100, logo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80', description: 'New York rabbit pack trials and purebred Beagle field trials.' }
];

export const INITIAL_DOGS = [
  { id: 'dog-1', callName: 'Ranger', registeredName: 'Mountain Creek Ranger', breed: 'Treeing Walker Coonhound', gender: 'Male', age: '4 Years', dob: 'May 14, 2022', regNo: 'UKC-204815', owner: 'Lalit Panchole', ownerEmail: 'pancholelalit52@gmail.com', eventsCount: 12, winsCount: 4, photo: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&auto=format&fit=crop&q=80' },
  { id: 'dog-2', callName: 'Belle', registeredName: 'Timberline Bell', breed: 'English Redtick Coonhound', gender: 'Female', age: '3 Years', dob: 'Aug 02, 2023', regNo: 'UKC-219402', owner: 'Lalit Panchole', ownerEmail: 'pancholelalit52@gmail.com', eventsCount: 8, winsCount: 2, photo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&auto=format&fit=crop&q=80' },
];

export const INITIAL_EVENTS = [
  {
    id: 'evt-1',
    name: 'Nite Hunt & Treeing Contest',
    federation: 'UKC (United Kennel Club)',
    sport: 'Coonhounds',
    type: 'Nite Hunt',
    club: 'Oak Ridge Hunting Club',
    clubId: 'club-1',
    state: 'Tennessee',
    stateId: 'tn',
    stateCode: 'TN',
    city: 'Knoxville',
    date: 'September 19, 2026',
    startTime: '7:00 PM',
    deadline: 'Sep 18, 2026',
    fee: 30,
    entries: 43,
    maxCapacity: 50,
    paidEntries: 39,
    pendingEntries: 4,
    checkedIn: 31,
    status: 'Registration Open',
    distance: '18 miles away',
    address: '1420 Hunting Ridge Rd, Knoxville, TN 37901',
    description: 'Annual night coon hunt and treeing championship. UKC rules apply. Trophies for top 5 hounds.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'evt-2',
    name: 'Fall Championship Hunt',
    federation: 'PKC (Professional Kennel Club)',
    sport: 'Coonhounds',
    type: 'Championship Hunt',
    club: 'Oak Ridge Hunting Club',
    clubId: 'club-1',
    state: 'Tennessee',
    stateId: 'tn',
    stateCode: 'TN',
    city: 'Knoxville',
    date: 'October 24, 2026',
    startTime: '6:00 PM',
    deadline: 'Oct 23, 2026',
    fee: 45,
    entries: 28,
    maxCapacity: 60,
    paidEntries: 28,
    pendingEntries: 0,
    checkedIn: 0,
    status: 'Registration Open',
    distance: '18 miles away',
    address: '1420 Hunting Ridge Rd, Knoxville, TN 37901',
    description: 'State qualifier championship hunt for treeing hounds. Grand champion points awarded.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'evt-3',
    name: 'Cumberland Mountain Water Race',
    federation: 'AKC (American Kennel Club)',
    sport: 'Coonhounds',
    type: 'Water Race',
    club: 'Cumberland Mountain Club',
    clubId: 'club-2',
    state: 'Kentucky',
    stateId: 'ky',
    stateCode: 'KY',
    city: 'Middlesboro',
    date: 'November 07, 2026',
    startTime: '10:00 AM',
    deadline: 'Nov 06, 2026',
    fee: 25,
    entries: 19,
    maxCapacity: 40,
    paidEntries: 19,
    pendingEntries: 0,
    checkedIn: 0,
    status: 'Registration Open',
    distance: '64 miles away',
    address: '800 Mountain Pass Rd, Middlesboro, KY 40965',
    description: 'Speed water race and line tree trial across Cumberland river course.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'evt-4',
    name: 'National Beagle Rabbit Pack Trial',
    federation: 'AKC (American Kennel Club)',
    sport: 'Beagles',
    type: 'Championship Hunt',
    club: 'Cumberland Mountain Club',
    clubId: 'club-2',
    state: 'Kentucky',
    stateId: 'ky',
    stateCode: 'KY',
    city: 'Middlesboro',
    date: 'September 28, 2026',
    startTime: '8:00 AM',
    deadline: 'Sep 27, 2026',
    fee: 35,
    entries: 32,
    maxCapacity: 50,
    paidEntries: 32,
    pendingEntries: 0,
    checkedIn: 15,
    status: 'Registration Open',
    distance: '42 miles away',
    address: '800 Mountain Pass Rd, Middlesboro, KY 40965',
    description: 'Sanctioned rabbit pack trial for purebred Beagles. Field judges scoring rabbit tracking accuracy.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'evt-5',
    name: 'Blue Ridge Beagle Field Championship',
    federation: 'UHC (Ultimate Hound Club)',
    sport: 'Beagles',
    type: 'Nite Hunt',
    club: 'Blue Ridge Hunt Club',
    clubId: 'club-4',
    state: 'Virginia',
    stateId: 'va',
    stateCode: 'VA',
    city: 'Bristol',
    date: 'October 18, 2026',
    startTime: '7:30 AM',
    deadline: 'Oct 17, 2026',
    fee: 40,
    entries: 24,
    maxCapacity: 45,
    paidEntries: 24,
    pendingEntries: 0,
    checkedIn: 0,
    status: 'Registration Open',
    distance: '85 miles away',
    address: '450 Ridge Rd, Bristol, VA 24201',
    description: 'Annual Virginia State Beagle Championship pack trial and line pursuit competition.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'evt-8',
    name: 'Texas State Lone Star Championship Hunt',
    federation: 'PKC (Professional Kennel Club)',
    sport: 'Coonhounds',
    type: 'Championship Hunt',
    club: 'Lone Star Hound Club',
    clubId: 'club-5',
    state: 'Texas',
    stateId: 'tx',
    stateCode: 'TX',
    city: 'Austin',
    date: 'October 05, 2026',
    startTime: '6:30 PM',
    deadline: 'Oct 04, 2026',
    fee: 50,
    entries: 38,
    maxCapacity: 60,
    paidEntries: 38,
    pendingEntries: 0,
    checkedIn: 0,
    status: 'Registration Open',
    distance: '120 miles away',
    address: '100 Lone Star Way, Austin, TX 78701',
    description: 'Texas state championship hunt with $5,000 added purse for top scoring hounds.',
    image: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'evt-9',
    name: 'California Pacific Coastal Field Trial',
    federation: 'AKC (American Kennel Club)',
    sport: 'Retrievers & Hounds',
    type: 'Field Trial',
    club: 'Golden State Field Trial Club',
    clubId: 'club-6',
    state: 'California',
    stateId: 'ca',
    stateCode: 'CA',
    city: 'Fresno',
    date: 'November 12, 2026',
    startTime: '8:00 AM',
    deadline: 'Nov 11, 2026',
    fee: 45,
    entries: 22,
    maxCapacity: 40,
    paidEntries: 22,
    pendingEntries: 0,
    checkedIn: 0,
    status: 'Registration Open',
    distance: '210 miles away',
    address: '500 Pacific Way, Fresno, CA 93701',
    description: 'Western regional field trial and tracking championship trial.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_ENTRIES = [
  { id: 'E1045', eventId: 'evt-1', eventName: 'Nite Hunt & Treeing Contest', club: 'Oak Ridge Hunting Club', participant: 'Lalit Panchole', participantEmail: 'pancholelalit52@gmail.com', dog: 'Ranger', date: 'Sep 19, 2026', fee: 30, paymentStatus: 'Paid', entryStatus: 'Confirmed', checkInStatus: 'Checked In', result: '1st Place (375 Pts)' },
  { id: 'E1048', eventId: 'evt-2', eventName: 'Fall Championship Hunt', club: 'Oak Ridge Hunting Club', participant: 'Lalit Panchole', participantEmail: 'pancholelalit52@gmail.com', dog: 'Belle', date: 'Oct 24, 2026', fee: 45, paymentStatus: 'Paid', entryStatus: 'Confirmed', checkInStatus: 'Not Arrived', result: 'Pending' }
];

export const INITIAL_RESULTS = [
  { id: 'res-1', eventName: 'Nite Hunt & Treeing Contest', club: 'Oak Ridge Hunting Club', state: 'Tennessee', date: 'Sep 19, 2026', winnerDog: 'Ranger', winnerDogReg: 'UKC-204815', breed: 'Treeing Walker Coonhound', owner: 'Lalit Panchole', score: '375 Pts', placement: '1st Place' },
  { id: 'res-2', eventName: 'Fall Championship Hunt', club: 'Cumberland Mountain Club', state: 'Kentucky', date: 'Oct 24, 2026', winnerDog: 'Timberline Bell', winnerDogReg: 'UKC-219402', breed: 'English Redtick Coonhound', owner: 'Thomas Shelby', score: '340 Pts', placement: '1st Place' },
  { id: 'res-3', eventName: 'Cumberland River Water Race', club: 'Smokey Ridge Club', state: 'Tennessee', date: 'Nov 07, 2026', winnerDog: 'Dixie Star', winnerDogReg: 'UKC-208912', breed: 'Bluetick Coonhound', owner: 'Cody Campbell', score: '310 Pts', placement: '1st Place' }
];

export const INITIAL_COMMISSION_SETTINGS = {
  clubSharePct: 15,
  stateSharePct: 7,
  nationalSharePct: 8,
  totalCommissionPct: 30,
  vendorSharePct: 70
};

export const INITIAL_VENDORS = [
  { id: 'ven-1', name: 'Garmin Outdoor', logo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&auto=format&fit=crop&q=80', contactEmail: 'support@garmin-outdoor.com', phone: '(800) 800-1020', productsCount: 14, activeOrders: 8, inventoryUnits: 420, shippingPolicy: 'Standard 2-Day Ground FedEx', status: 'Active' },
  { id: 'ven-2', name: 'Drake Waterfowl', logo: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=200&auto=format&fit=crop&q=80', contactEmail: 'fulfillment@drakewaterfowl.com', phone: '(800) 388-7561', productsCount: 28, activeOrders: 12, inventoryUnits: 890, shippingPolicy: 'UPS Ground Drop-ship', status: 'Active' },
  { id: 'ven-3', name: 'Filson Outdoors', logo: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&auto=format&fit=crop&q=80', contactEmail: 'wholesale@filson.com', phone: '(800) 624-0201', productsCount: 19, activeOrders: 5, inventoryUnits: 340, shippingPolicy: 'Direct Heritage Express', status: 'Active' },
  { id: 'ven-4', name: 'Browning Outdoors', logo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&auto=format&fit=crop&q=80', contactEmail: 'orders@browning.com', phone: '(800) 333-3288', productsCount: 31, activeOrders: 15, inventoryUnits: 1200, shippingPolicy: 'Priority Standard Shipping', status: 'Active' }
];

export const INITIAL_ORDERS = [
  {
    id: 'ORD-9012',
    customer: 'Lalit Panchole',
    email: 'pancholelalit52@gmail.com',
    phone: '(865) 555-0199',
    product: 'Official UKC Tracking Collar',
    items: 'Official UKC Tracking Collar (Qty: 1)',
    vendorName: 'Garmin Outdoor',
    sellingPrice: 849.99,
    wholesaleCost: 594.99,
    profitMargin: 255.00,
    profitMarginPct: 30,
    vendorAmount: 594.99,
    nationalShare: 68.00,
    stateShare: 59.50,
    clubShare: 127.50,
    orderSource: 'Oak Ridge Hunting Club Store',
    originType: 'CLUB',
    state: 'Tennessee',
    club: 'Oak Ridge Hunting Club',
    date: 'Aug 04, 2026',
    paymentStatus: 'Paid',
    payoutStatus: 'Approved',
    fulfillmentStatus: 'Delivered',
    trackingNumber: '1Z9999999999999999',
    status: 'Delivered'
  },
  {
    id: 'ORD-9015',
    customer: 'Lalit Panchole',
    email: 'pancholelalit52@gmail.com',
    phone: '(865) 555-0199',
    product: 'Oak Ridge Hunting Club Official Cap',
    items: 'Oak Ridge Hunting Club Official Cap (Qty: 1)',
    vendorName: 'Browning Outdoors',
    sellingPrice: 549.99,
    wholesaleCost: 384.99,
    profitMargin: 165.00,
    profitMarginPct: 30,
    vendorAmount: 384.99,
    nationalShare: 44.00,
    stateShare: 38.50,
    clubShare: 82.50,
    orderSource: 'Oak Ridge Hunting Club Store',
    originType: 'CLUB',
    state: 'Tennessee',
    club: 'Oak Ridge Hunting Club',
    date: 'Aug 06, 2026',
    paymentStatus: 'Paid',
    payoutStatus: 'Pending',
    fulfillmentStatus: 'Shipped',
    trackingNumber: '1Z8888888888888888',
    status: 'Shipped'
  },
  {
    id: 'ORD-9018',
    customer: 'Lalit Panchole',
    email: 'pancholelalit52@gmail.com',
    phone: '(865) 555-0199',
    product: 'Tennessee State Sanctioned LED Hunt Vest',
    items: 'Tennessee State Sanctioned LED Hunt Vest (Qty: 1)',
    vendorName: 'Drake Waterfowl',
    sellingPrice: 729.99,
    wholesaleCost: 510.99,
    profitMargin: 219.00,
    profitMarginPct: 30,
    vendorAmount: 510.99,
    nationalShare: 167.90,
    stateShare: 51.10,
    clubShare: 0.00,
    orderSource: 'Tennessee State Store',
    originType: 'STATE',
    state: 'Tennessee',
    club: 'N/A',
    date: 'Aug 07, 2026',
    paymentStatus: 'Paid',
    payoutStatus: 'Pending',
    fulfillmentStatus: 'Processing',
    trackingNumber: 'Pending Dispatch',
    status: 'Processing'
  },
  {
    id: 'ORD-8820',
    customer: 'Lalit Panchole',
    email: 'pancholelalit52@gmail.com',
    phone: '(865) 555-0199',
    product: 'Field & Forest Water-Resistant Jacket',
    items: 'Field & Forest Water-Resistant Jacket (Qty: 1)',
    vendorName: 'Filson Outdoors',
    sellingPrice: 819.99,
    wholesaleCost: 573.99,
    profitMargin: 246.00,
    profitMarginPct: 30,
    vendorAmount: 573.99,
    nationalShare: 246.00,
    stateShare: 0.00,
    clubShare: 0.00,
    orderSource: 'National HQ Store',
    originType: 'NATIONAL',
    state: 'N/A',
    club: 'N/A',
    date: 'Jul 22, 2026',
    paymentStatus: 'Paid',
    payoutStatus: 'Paid',
    fulfillmentStatus: 'Delivered',
    trackingNumber: '1Z7777777777777777',
    status: 'Delivered'
  }
];

export const INITIAL_MEMBERSHIPS = [
  {
    id: 'ms-1',
    userEmail: 'pancholelalit52@gmail.com',
    tier: 'National Membership',
    scopeName: 'Ultimate Hound Club National HQ',
    membershipId: 'UHC-NAT-2026-8801',
    status: 'Active',
    joinedDate: 'Jan 10, 2025',
    expiryDate: 'Jan 10, 2027',
    fee: 50.00
  },
  {
    id: 'ms-2',
    userEmail: 'pancholelalit52@gmail.com',
    tier: 'State Association Charter',
    scopeName: 'Tennessee State Association',
    membershipId: 'TN-STATE-2026-4412',
    status: 'Active',
    joinedDate: 'Mar 15, 2025',
    expiryDate: 'Mar 15, 2027',
    fee: 35.00
  },
  {
    id: 'ms-3',
    userEmail: 'pancholelalit52@gmail.com',
    tier: 'State Association Charter',
    scopeName: 'Oklahoma State Association',
    membershipId: 'OK-STATE-2026-9011',
    status: 'Active',
    joinedDate: 'May 01, 2025',
    expiryDate: 'May 01, 2027',
    fee: 35.00
  },
  {
    id: 'ms-4',
    userEmail: 'pancholelalit52@gmail.com',
    tier: 'Local Chartered Club',
    scopeName: 'Oak Ridge Hunting Club (TN)',
    membershipId: 'TN-ORHC-2026-99012',
    status: 'Active',
    joinedDate: 'Sep 18, 2025',
    expiryDate: 'Sep 18, 2027',
    fee: 25.00
  },
  {
    id: 'ms-5',
    userEmail: 'pancholelalit52@gmail.com',
    tier: 'Local Chartered Club',
    scopeName: 'Cumberland Mountain Club (KY)',
    membershipId: 'KY-CMC-2026-3391',
    status: 'Active',
    joinedDate: 'Nov 12, 2025',
    expiryDate: 'Nov 12, 2027',
    fee: 25.00
  }
];

export const INITIAL_PRODUCTS = [
  // LOCAL CLUB STORE PRODUCTS
  { id: 'prod-club-1', name: 'Oak Ridge Hunting Club Official Cap', category: 'Caps', price: 549.99, wholesaleCost: 384.99, margin: 165.00, vendorName: 'Browning Outdoors', inStock: 50, scopeChannel: 'LOCAL_CLUB', scopeEntity: 'Oak Ridge Hunting Club', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop&q=80', description: 'Official Oak Ridge Hunting Club embroidered cap. 15% margin ($82.50) directly funds local club field trials.' },
  { id: 'prod-club-2', name: 'Oak Ridge Chapter Field Utility Vest', category: 'Apparel', price: 699.99, wholesaleCost: 489.99, margin: 210.00, vendorName: 'Drake Waterfowl', inStock: 35, scopeChannel: 'LOCAL_CLUB', scopeEntity: 'Oak Ridge Hunting Club', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80', description: 'Rugged water-resistant field vest with custom Oak Ridge Local Chapter emblem.' },
  { id: 'prod-3', name: 'Heritage Coonhound Leash & Lead Set', category: 'Accessories', price: 599.99, wholesaleCost: 419.99, margin: 180.00, vendorName: 'Filson Outdoors', inStock: 35, scopeChannel: 'LOCAL_CLUB', scopeEntity: 'Oak Ridge Hunting Club', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=80', description: 'Braided leather heavy-duty leads built for rugged timber trials.' },
  { id: 'prod-club-3', name: 'Oak Ridge Chapter Member Brass Dog Tag', category: 'Stickers & Patches', price: 499.99, wholesaleCost: 349.99, margin: 150.00, vendorName: 'Filson Outdoors', inStock: 60, scopeChannel: 'LOCAL_CLUB', scopeEntity: 'Oak Ridge Hunting Club', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80', description: 'Custom engraved brass ID tags stamped with Oak Ridge Hunting Club registry.' },

  // STATE ASSOCIATION STORE PRODUCTS
  { id: 'prod-state-1', name: 'Tennessee State Championship Water Race Lead', category: 'Gear', price: 649.99, wholesaleCost: 454.99, margin: 195.00, vendorName: 'Filson Outdoors', inStock: 40, scopeChannel: 'STATE', scopeEntity: 'Tennessee State Association', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=80', description: 'Heavy-duty waterproof floating lead designed for state championship water races.' },
  { id: 'prod-state-2', name: 'Tennessee State Association Softshell Jacket', category: 'Jackets', price: 799.99, wholesaleCost: 559.99, margin: 240.00, vendorName: 'Browning Outdoors', inStock: 25, scopeChannel: 'STATE', scopeEntity: 'Tennessee State Association', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&auto=format&fit=crop&q=80', description: 'Official Tennessee State Association embroidered windproof field jacket.' },
  { id: 'prod-state-3', name: 'State Championship Leather Tracking Belt', category: 'Accessories', price: 589.99, wholesaleCost: 412.99, margin: 177.00, vendorName: 'Filson Outdoors', inStock: 30, scopeChannel: 'STATE', scopeEntity: 'Tennessee State Association', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop&q=80', description: 'Thick brass-buckle leather belt custom stamped for state trial judges.' },
  { id: 'prod-state-4', name: 'Tennessee State Sanctioned LED Hunt Vest', category: 'Apparel', price: 729.99, wholesaleCost: 510.99, margin: 219.00, vendorName: 'Drake Waterfowl', inStock: 45, scopeChannel: 'STATE', scopeEntity: 'Tennessee State Association', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80', description: 'High-visibility state sanctioned safety vest with dual LED light bars.' },

  // MAIN NATIONAL HQ STORE PRODUCTS
  { id: 'prod-1', name: 'Official UKC Tracking Collar', category: 'Gear', price: 849.99, wholesaleCost: 594.99, margin: 255.00, vendorName: 'Garmin Outdoor', inStock: 24, scopeChannel: 'NATIONAL', scopeEntity: 'Ultimate Hound Club (UHC) HQ', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&auto=format&fit=crop&q=80', description: 'High-precision GPS tracking collar with long-range telemetry. Drop-shipped directly by Garmin.' },
  { id: 'prod-4', name: 'Ultimate Hound Club Official Cap', category: 'Caps', price: 529.99, wholesaleCost: 370.99, margin: 159.00, vendorName: 'Browning Outdoors', inStock: 80, scopeChannel: 'NATIONAL', scopeEntity: 'Ultimate Hound Club (UHC) HQ', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop&q=80', description: 'Structured mesh-back embroidered Ultimate Hound Club logo cap.' },
  { id: 'prod-5', name: 'UHC Member Heavyweight Hoodie', category: 'Hoodies', price: 679.99, wholesaleCost: 475.99, margin: 204.00, vendorName: 'Drake Waterfowl', inStock: 40, scopeChannel: 'NATIONAL', scopeEntity: 'Ultimate Hound Club (UHC) HQ', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&auto=format&fit=crop&q=80', description: 'Warm fleece-lined field hoodie with embroidered chest UHC emblem.' },
  { id: 'prod-6', name: 'Field & Forest Water-Resistant Jacket', category: 'Jackets', price: 819.99, wholesaleCost: 573.99, margin: 246.00, vendorName: 'Browning Outdoors', inStock: 20, scopeChannel: 'NATIONAL', scopeEntity: 'Ultimate Hound Club (UHC) HQ', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&auto=format&fit=crop&q=80', description: 'Breathable windproof hunting jacket with multi-pocket storage.' },
  { id: 'prod-7', name: 'UHC Woven Emblem Patch Pack', category: 'Stickers & Patches', price: 499.99, wholesaleCost: 349.99, margin: 150.00, vendorName: 'Filson Outdoors', inStock: 100, scopeChannel: 'NATIONAL', scopeEntity: 'Ultimate Hound Club (UHC) HQ', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80', description: 'Set of 5 woven iron-on national association patches.' }
];

export const INITIAL_CLAIMS = [
  { id: 'CLM-401', clubName: 'Oak Ridge Hunting Club', applicantName: 'Robert Miller', email: 'robert.miller@oakridgehc.org', phone: '(865) 555-0199', date: 'Aug 06, 2026', status: 'Under Review', document: 'Verification_Charter_Document.pdf' },
  { id: 'CLM-402', clubName: 'Cumberland Mountain Club', applicantName: 'Thomas Shelby', email: 'thomas@cumberlandhc.org', phone: '(606) 555-0311', date: 'Aug 02, 2026', status: 'Approved', document: 'Club_Charter_KY_2026.pdf' },
];

export const INITIAL_NEWS = [
  { id: 'news-1', title: '2026 Fall National Championship Registration Open', date: 'August 05, 2026', category: 'National News', author: 'National Headquarters', summary: 'Registration is officially open for the 2026 Fall Championship Hunt in Knoxville, TN. Over $15,000 in cash purses and national points awarded.', image: 'https://images.unsplash.com/photo-1511497584788-876761c11969?w=600&auto=format&fit=crop&q=80' },
  { id: 'news-2', title: 'Tennessee Association Announces New Trial Sanction Rules', date: 'July 28, 2026', category: 'State News', author: 'TN Association Board', summary: 'Updated scoring guidelines for treeing contests and speed water races taking effect September 1st across all chartered state clubs.', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80' },
  { id: 'news-3', title: 'National Canine Registration System Upgrade Completed', date: 'July 15, 2026', category: 'Registry News', author: 'Canine Governance Board', summary: 'Hunters can now verify UKC digital pedigree records instantaneously during event check-ins from mobile devices.', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80' }
];

export const INITIAL_SPONSORS = [
  { id: 'sp-1', name: 'Garmin Outdoor', tier: 'Gold', category: 'Premier GPS & Telemetry Partner', logo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&auto=format&fit=crop&q=80', website: 'https://garmin.com' },
  { id: 'sp-2', name: 'Purina Pro Plan', tier: 'Gold', category: 'Official Canine Nutrition', logo: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&auto=format&fit=crop&q=80', website: 'https://purina.com' },
  { id: 'sp-3', name: 'United Kennel Club (UKC)', tier: 'Gold', category: 'Sanctioning Body & Registry', logo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&auto=format&fit=crop&q=80', website: 'https://ukcdogs.com' },
  { id: 'sp-4', name: 'Browning Outdoors', tier: 'Silver', category: 'Official Field Equipment', logo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&auto=format&fit=crop&q=80', website: 'https://browning.com' },
  { id: 'sp-5', name: 'Drake Waterfowl', tier: 'Silver', category: 'Technical Hunting Apparel', logo: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=200&auto=format&fit=crop&q=80', website: 'https://drakewaterfowl.com' },
  { id: 'sp-6', name: 'Filson Outdoors', tier: 'Silver', category: 'Heritage Canvas & Leather', logo: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&auto=format&fit=crop&q=80', website: 'https://filson.com' },
  { id: 'sp-7', name: 'Mossy Oak', tier: 'Bronze', category: 'Official Concealment Pattern', logo: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=200&auto=format&fit=crop&q=80', website: 'https://mossyoak.com' },
  { id: 'sp-8', name: 'Bass Pro Shops', tier: 'Bronze', category: 'National Retail Network', logo: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop&q=80', website: 'https://basspro.com' }
];

export const INITIAL_ANNOUNCEMENTS = [
  { id: 'anc-1', title: 'Mandatory UKC Bench Inspection Before 6 PM', club: 'Oak Ridge Hunting Club', scope: 'Club', date: 'Aug 08, 2026', priority: 'High', message: 'All participants entering dogs in the Nite Hunt must present digital registration papers by 6:00 PM.' },
  { id: 'anc-2', title: 'Tennessee State Championship Venue Updated', club: 'State Headquarters', scope: 'State', date: 'Aug 05, 2026', priority: 'Medium', message: 'The October trial location has been shifted to Oak Ridge Hunting Grounds due to field upgrades.' },
  { id: 'anc-3', title: 'National Sanctioning Rulebook PDF Published', club: 'National Office', scope: 'National', date: 'Jul 30, 2026', priority: 'Normal', message: 'Download the updated 2026-2027 official contest guidelines from the National Portal.' }
];

export const INITIAL_OFFICERS = [
  { id: 'off-1', name: 'Robert Miller', title: 'Club President', club: 'Oak Ridge Hunting Club', phone: '(865) 555-0199', email: 'robert.miller@oakridgehc.org', term: '2025 - 2027', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { id: 'off-2', name: 'Cody Campbell', title: 'Vice President & Master of Hounds', club: 'Oak Ridge Hunting Club', phone: '(865) 555-0244', email: 'cody@oakridgehc.org', term: '2026 - 2028', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  { id: 'off-3', name: 'Sarah Jenkins', title: 'Treasurer & Secretary', club: 'Oak Ridge Hunting Club', phone: '(865) 555-0812', email: 'sarah@oakridgehc.org', term: '2025 - 2027', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' }
];

export const INITIAL_TRANSACTIONS = [
  { id: 'TXN-99101', description: 'Event Entry Fee - Nite Hunt & Treeing Contest', category: 'Event Revenue', amount: 30.00, type: 'Credit', date: 'Aug 08, 2026', status: 'Completed', reference: 'E1045' },
  { id: 'TXN-99102', description: 'Store Sale - Official UKC Tracking Collar', category: 'Store Revenue', amount: 189.99, type: 'Credit', date: 'Aug 04, 2026', status: 'Completed', reference: 'ORD-9012' },
  { id: 'TXN-99103', description: 'State Association Annual Sanction Dues', category: 'State Dues', amount: 150.00, type: 'Debit', date: 'Aug 01, 2026', status: 'Completed', reference: 'ST-TN-2026' },
  { id: 'TXN-99104', description: 'Membership Dues - Lalit Panchole', category: 'Membership Revenue', amount: 45.00, type: 'Credit', date: 'Sep 18, 2025', status: 'Completed', reference: 'TN-ORHC-2026-99012' }
];

export const INITIAL_COMMISSIONS = [
  { id: 'COM-101', entityName: 'Oak Ridge Hunting Club', entityType: 'Club', salesOrigin: 'LOCAL_CLUB', totalGross: 6790.00, wholesaleCost: 2980.00, platformFee: 0.00, stateShare: 0.00, netPayout: 3810.00, status: 'Settled', desc: '100% Margin payout to Oak Ridge Local Club Treasury' },
  { id: 'COM-102', entityName: 'Cumberland Mountain Club', entityType: 'Club', salesOrigin: 'LOCAL_CLUB', totalGross: 8940.00, wholesaleCost: 3930.00, platformFee: 0.00, stateShare: 0.00, netPayout: 5010.00, status: 'Pending Payout', desc: '100% Margin payout to Cumberland Mountain Club' },
  { id: 'COM-103', entityName: 'Tennessee State Association', entityType: 'State', salesOrigin: 'STATE', totalGross: 184250.00, wholesaleCost: 81060.00, platformFee: 0.00, stateShare: 103190.00, netPayout: 103190.00, status: 'Settled', desc: '100% Margin payout to Tennessee State Treasury' },
  { id: 'COM-104', entityName: 'Ultimate Hound Club National HQ', entityType: 'National', salesOrigin: 'NATIONAL', totalGross: 245900.00, wholesaleCost: 108196.00, platformFee: 137704.00, stateShare: 0.00, netPayout: 137704.00, status: 'Settled', desc: '100% Margin retained by National HQ Treasury' }
];

export const DEFAULT_PERMISSIONS = {
  SUPER_ADMIN: {
    members: { view: true, create: true, edit: true, delete: true },
    events: { view: true, create: true, edit: true, delete: true },
    claims: { view: true, create: true, edit: true, delete: true },
    dogs: { view: true, create: true, edit: true, delete: true },
    products: { view: true, create: true, edit: true, delete: true },
    orders: { view: true, create: true, edit: true, delete: true },
    finance: { view: true, create: true, edit: true, delete: true },
    news: { view: true, create: true, edit: true, delete: true },
    reports: { view: true, create: true, edit: true, delete: true }
  },
  NATIONAL_ADMIN: {
    members: { view: true, create: true, edit: true, delete: false },
    events: { view: true, create: true, edit: true, delete: false },
    claims: { view: true, create: false, edit: true, delete: false },
    dogs: { view: true, create: true, edit: true, delete: false },
    products: { view: true, create: true, edit: true, delete: false },
    orders: { view: true, create: true, edit: true, delete: false },
    finance: { view: true, create: true, edit: true, delete: false },
    news: { view: true, create: true, edit: true, delete: false },
    reports: { view: true, create: true, edit: true, delete: false }
  },
  STATE_ADMIN: {
    members: { view: true, create: true, edit: true, delete: false },
    events: { view: true, create: true, edit: true, delete: false },
    claims: { view: false, create: false, edit: false, delete: false },
    dogs: { view: true, create: true, edit: true, delete: false },
    products: { view: true, create: false, edit: false, delete: false },
    orders: { view: true, create: false, edit: false, delete: false },
    finance: { view: true, create: false, edit: false, delete: false },
    news: { view: true, create: true, edit: true, delete: false },
    reports: { view: true, create: true, edit: true, delete: false }
  },
  CLUB_ADMIN: {
    members: { view: true, create: true, edit: true, delete: false },
    events: { view: true, create: true, edit: true, delete: false },
    claims: { view: false, create: false, edit: false, delete: false },
    dogs: { view: true, create: true, edit: true, delete: false },
    products: { view: true, create: true, edit: true, delete: false },
    orders: { view: true, create: true, edit: true, delete: false },
    finance: { view: true, create: false, edit: false, delete: false },
    news: { view: true, create: true, edit: true, delete: false },
    reports: { view: true, create: true, edit: true, delete: false }
  },
  EVENT_ADMIN: {
    members: { view: true, create: false, edit: false, delete: false },
    events: { view: true, create: false, edit: true, delete: false },
    claims: { view: false, create: false, edit: false, delete: false },
    dogs: { view: true, create: false, edit: false, delete: false },
    products: { view: false, create: false, edit: false, delete: false },
    orders: { view: false, create: false, edit: false, delete: false },
    finance: { view: false, create: false, edit: false, delete: false },
    news: { view: false, create: false, edit: false, delete: false },
    reports: { view: true, create: false, edit: false, delete: false }
  },
  MEMBER: {
    members: { view: true, create: false, edit: false, delete: false },
    events: { view: true, create: false, edit: false, delete: false },
    claims: { view: false, create: false, edit: false, delete: false },
    dogs: { view: true, create: true, edit: true, delete: true },
    products: { view: true, create: false, edit: false, delete: false },
    orders: { view: true, create: false, edit: false, delete: false },
    finance: { view: false, create: false, edit: false, delete: false },
    news: { view: true, create: false, edit: false, delete: false },
    reports: { view: false, create: false, edit: false, delete: false }
  }
};

export const INITIAL_ELECTIONS = [
  {
    id: 'elec-1',
    organization: 'Oak Ridge Hunting Club',
    organizationId: 'club-1',
    organizationType: 'CLUB',
    title: '2026-2028 Local Club Board Election',
    description: 'Vote for Club President, Vice President, and Field Director for the upcoming 2-year term.',
    startDate: 'Aug 01, 2026',
    endDate: 'Aug 30, 2026',
    status: 'Active',
    positions: [
      {
        id: 'pos-1',
        title: 'Club President',
        candidates: [
          { id: 'cand-1', name: 'Robert Miller', bio: 'Current President, 12 years club member' },
          { id: 'cand-2', name: 'James Henderson', bio: 'Master of Hounds, 8 years club member' }
        ]
      },
      {
        id: 'pos-2',
        title: 'Vice President',
        candidates: [
          { id: 'cand-3', name: 'Cody Campbell', bio: 'Experienced field judge and youth mentor' },
          { id: 'cand-4', name: 'Frank Reynolds', bio: 'Senior trial coordinator' }
        ]
      }
    ]
  },
  {
    id: 'elec-2',
    organization: 'Tennessee State Association',
    organizationId: 'tn',
    organizationType: 'STATE',
    title: '2026 Tennessee State Director Election',
    description: 'Annual election for Tennessee State Association Director.',
    startDate: 'Aug 05, 2026',
    endDate: 'Sep 05, 2026',
    status: 'Active',
    positions: [
      {
        id: 'pos-3',
        title: 'State Director',
        candidates: [
          { id: 'cand-5', name: 'Sarah Tennessee', bio: 'Incumbent State Director with 10 years governing experience' },
          { id: 'cand-6', name: 'David Eventmaster', bio: 'Nite hunt committee chair' }
        ]
      }
    ]
  }
];

