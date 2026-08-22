import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Compass, Map, Calendar, DollarSign, Settings, Plus } from 'lucide-react';

function Dashboard() {
  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <h1>Welcome to GlobeTrotter</h1>
        <p>Your upcoming trips and inspirations.</p>
        <Link to="/create" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'auto' }}>
          <Plus size={18} /> Plan New Trip
        </Link>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <Map className="stat-icon" />
          <div className="stat-info">
            <h3>3</h3>
            <p>Upcoming Trips</p>
          </div>
        </div>
        <div className="stat-card">
          <Compass className="stat-icon" />
          <div className="stat-info">
            <h3>12</h3>
            <p>Cities Visited</p>
          </div>
        </div>
        <div className="stat-card">
          <DollarSign className="stat-icon" />
          <div className="stat-info">
            <h3>$4,200</h3>
            <p>Total Budget</p>
          </div>
        </div>
      </div>

      <h2 className="section-title">Your Trips</h2>
      <div className="trips-grid">
        <div className="trip-card">
          <div className="trip-image" style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' }}></div>
          <div className="trip-details">
            <h3>Europe Backpacking</h3>
            <p>Aug 15 - Sep 12</p>
            <span className="badge">5 Cities</span>
          </div>
        </div>
        <div className="trip-card">
          <div className="trip-image" style={{ background: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)' }}></div>
          <div className="trip-details">
            <h3>Japan Cultural Tour</h3>
            <p>Oct 1 - Oct 15</p>
            <span className="badge">3 Cities</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateTrip() {
  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <h1>Create a New Trip</h1>
        <p>Start planning your next adventure.</p>
      </header>
      <div className="form-container glass-card">
        <form>
          <div className="form-group">
            <label>Trip Name</label>
            <input type="text" className="form-control" placeholder="e.g. Summer in Italy" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="4" placeholder="What's this trip about?"></textarea>
          </div>
          <button type="button" className="btn-primary">Save Trip</button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <div className="sidebar-logo">GlobeTrotter</div>
          <nav className="sidebar-nav">
            <Link to="/" className="nav-item"><Map size={20} /> Dashboard</Link>
            <Link to="/trips" className="nav-item"><Calendar size={20} /> My Trips</Link>
            <Link to="/budget" className="nav-item"><DollarSign size={20} /> Budget</Link>
            <Link to="/settings" className="nav-item"><Settings size={20} /> Settings</Link>
            <a href="http://localhost:8000/accounts/logout/" className="nav-item nav-item-logout">Logout</a>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateTrip />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
