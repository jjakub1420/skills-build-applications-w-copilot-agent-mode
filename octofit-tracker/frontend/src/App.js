
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container py-4">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#">OctoFit Tracker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bootstrap Heading */}
      <h1 className="display-4 mb-4 text-center">Welcome to OctoFit Tracker</h1>

      {/* Bootstrap Card */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Track Your Fitness</h5>
              <p className="card-text">Log your activities, join teams, and compete on the leaderboard!</p>
              <a href="#" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Table */}
      <div className="mb-4">
        <h2 className="h4 mb-3">Sample Activity Log</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Duration (min)</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-05-08</td>
              <td>Running</td>
              <td>30</td>
              <td>300</td>
            </tr>
            <tr>
              <td>2026-05-07</td>
              <td>Cycling</td>
              <td>45</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bootstrap Form */}
      <div className="mb-4">
        <h2 className="h4 mb-3">Log New Activity</h2>
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="activity" className="form-label">Activity</label>
            <input type="text" className="form-control" id="activity" placeholder="e.g. Swimming" />
          </div>
          <div className="col-md-4">
            <label htmlFor="duration" className="form-label">Duration (min)</label>
            <input type="number" className="form-control" id="duration" placeholder="e.g. 60" />
          </div>
          <div className="col-md-4">
            <label htmlFor="calories" className="form-label">Calories</label>
            <input type="number" className="form-control" id="calories" placeholder="e.g. 500" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success mt-3">Add Activity</button>
          </div>
        </form>
      </div>

      {/* Bootstrap Modal */}
      <button className="btn btn-info" onClick={handleShow}>
        Show Info Modal
      </button>
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">About OctoFit Tracker</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <p>This is a demo modal using Bootstrap styles. You can use modals for notifications, confirmations, and more.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
