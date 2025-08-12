// src/components/ActivitySummary.jsx
import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const ActivitySummaryCard = () => {
  const [activityName, setActivityName] = useState("");
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  const fetchSummary = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/activity/activity/${activityName}`);
      setSummary(response.data);
      setError("");
    } catch (err) {
      setError("Activity not found or server error.");
      setSummary(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Activity Summary</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter activity name"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchSummary}>
          Get Summary
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {summary && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{summary.activityType}</h5>
            <p className="card-text">
              <strong>Total Activities:</strong> {summary.totalActivities}
            </p>
            <p className="card-text">
              <strong>Total Minutes:</strong> {summary.totalMinutes}
            </p>
            <p className="card-text">
              <strong>This Week Minutes:</strong> {summary.thisWeekMinutes}
            </p>
            <p className="card-text">
              <strong>Last Month Minutes:</strong> {summary.lastMonthMinutes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitySummaryCard;
