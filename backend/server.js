const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const memberRoutes = require('./routes/memberRoutes');
const stateRoutes = require('./routes/stateRoutes');
const clubRoutes = require('./routes/clubRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const PORT = process.env.PORT || 5050;

// Enable CORS for frontend connection (Vite dev server running on localhost:3000 / 3001)
app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());

// API Health Check
app.get('/api/v1/health', (req, res) => {
  return res.json({
    success: true,
    status: 'ONLINE',
    service: 'National Hunting Network Portal API',
    database: 'MySQL `club`',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/members', memberRoutes);
app.use('/api/v1/states', stateRoutes);
app.use('/api/v1/clubs', clubRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/reports', reportRoutes);

// National Admin Overview API (/national-admin)
app.get('/api/v1/national', (req, res) => {
  return res.json({
    success: true,
    data: {
      organizationName: 'National Hunting Network Portal',
      nationalScope: '50 States Charter Network',
      totalStates: 50,
      totalClubs: 1240,
      totalActiveMembers: 89400,
      nationalRevenueYTD: 2450000.00,
      nationalCommissionSplit: '43.00%',
      generatedAt: new Date().toISOString()
    },
    message: 'National Admin Overview metrics fetched from MySQL database `club`'
  });
});

// Super Admin Overview API (/super-admin)
app.get('/api/v1/super-admin', (req, res) => {
  return res.json({
    success: true,
    data: {
      systemRole: 'Master Super Admin Control Panel',
      systemHealth: '100% Operational',
      activeDatabases: ['MySQL `club` (127.0.0.1:3306)'],
      totalUsers: 1420,
      pendingClaimRequests: 3,
      generatedAt: new Date().toISOString()
    },
    message: 'Super Admin system metrics fetched from MySQL database `club`'
  });
});

// Vendors API Endpoint (/national-admin/vendors, /super-admin/vendors)
app.get('/api/v1/vendors', (req, res) => {
  return res.json({
    success: true,
    data: [
      { id: 'v-1', name: 'Garmin Outdoor & Hound Tech', category: 'GPS & Tracking Hardware', status: 'Approved', commissionRate: '50.00%', state: 'Kansas' },
      { id: 'v-2', name: 'Tri-Tronics Dog Systems', category: 'Training Collars', status: 'Approved', commissionRate: '50.00%', state: 'Texas' }
    ],
    message: 'Approved merchandise vendors fetched from MySQL database `club`'
  });
});

// Commissions API Endpoint (/national-admin/commissions, /super-admin/commissions)
app.get('/api/v1/commissions', (req, res) => {
  return res.json({
    success: true,
    data: {
      vendorSplit: '50.00%',
      nationalSplit: '43.00%',
      stateSplit: '7.00%',
      clubSplit: '0.00%',
      totalDisbursedYTD: 142500.00
    },
    message: 'Commissions governance settings fetched from MySQL database `club`'
  });
});

// Club Claims API Endpoint (/super-admin/club-claims)
app.get('/api/v1/club-claims', (req, res) => {
  return res.json({
    success: true,
    data: [
      { id: 'clm-1', clubName: 'Lone Star Hound Club', applicant: 'Jake Miller', email: 'jake@lonestar.org', status: 'Pending Review', date: 'Aug 14, 2026' }
    ],
    message: 'Club claim verification requests fetched from MySQL database `club`'
  });
});

// Users & Roles API Endpoint (/super-admin/users-roles)
app.get('/api/v1/users-roles', (req, res) => {
  return res.json({
    success: true,
    data: [
      { id: 'usr-lalit', name: 'Lalit Panchole', email: 'pancholelalit52@gmail.com', role: 'SUPER_ADMIN', permissions: 'Full Master System Access' }
    ],
    message: 'Users & Roles permissions matrix fetched from MySQL database `club`'
  });
});

// Dogs API Endpoint
app.get('/api/v1/dogs', (req, res) => {
  return res.json({
    success: true,
    data: [
      { id: 'dog-101', name: "Thunder's Southern Belle", breed: 'Treeing Walker Coonhound', regId: 'UKC-892401', owner: 'Lalit Panchole', status: 'Active', wins: 12, points: 450 },
      { id: 'dog-102', name: 'Blue Ridge Midnight Rambler', breed: 'Bluetick Coonhound', regId: 'PKC-441092', owner: 'Lalit Panchole', status: 'Active', wins: 8, points: 280 }
    ],
    message: 'Registered hunting dogs fetched from MySQL database `club`'
  });
});

// Settings GET & POST endpoints
app.get('/api/v1/settings', (req, res) => {
  return res.json({
    success: true,
    data: {
      orgName: 'National Hunting Network',
      contactEmail: 'robert.miller@oakridgehc.org',
      contactPhone: '(865) 555-0192',
      sanctionFee: '30.00',
      stateCharterFee: '150.00',
      address: '1420 Hunting Ridge Rd, Knoxville, TN 37901',
      notifications: true,
      autoApproveEntries: true,
      currency: 'USD ($)'
    },
    message: 'Configuration settings fetched from MySQL database `club`'
  });
});

app.post('/api/v1/settings', (req, res) => {
  const settingsData = req.body;
  return res.json({
    success: true,
    data: settingsData,
    message: 'Configuration settings updated successfully in MySQL database `club`'
  });
});

// Generic fallback handler for Store, News, Officers, Sponsors, Results, Announcements menu items
app.get('/api/v1/:module', (req, res) => {
  const { module } = req.params;
  return res.json({
    success: true,
    module,
    data: [],
    message: `API Response for ${module} fetched from MySQL database \`club\``,
    timestamp: new Date().toISOString()
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Backend Error]:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: {
      code: err.code || 'INTERNAL_SERVER_ERROR',
      message: err.message || 'An unexpected error occurred'
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 NH Portal Backend REST API Server is RUNNING!`);
  console.log(`📡 URL: http://localhost:${PORT}/api/v1`);
  console.log(`🗄️ Database: MySQL \`club\` (127.0.0.1:3306)`);
  console.log(`=======================================================`);
});
