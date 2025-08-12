// src/components/Dashboard.jsx

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [activityName, setActivityName] = useState('');
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');

  const fetchSummary = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/activity/activity/${activityName}`
      );
      setSummary(response.data);
      setError('');
    } catch (err) {
      setError('Activity not found or server error.');
      setSummary(null);
    }
  };

  const getChartData = () => {
    if (!summary) return null;

    const labels = ['Total Minutes', 'This Week', 'Last Month'];
    const data = [
      summary.totalMinutes || 0,
      summary.thisWeekMinutes || 0,
      summary.lastMonthMinutes || 0,
    ];

    return {
      labels,
      datasets: [
        {
          label: 'Activity Minutes',
          data,
          backgroundColor: ['#007bff', '#28a745', '#ffc107'],
          borderColor: '#333',
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = getChartData();

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Activity Summary Dashboard</h2>

      {/* Search Bar */}
      <div className="input-group mb-4">
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

      {/* Error Display */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Summary Box */}
      {summary && (
        <>
          <div className="card p-3 mb-4">
            <h5 className="card-title">{summary.activityType}</h5>
            <p><strong>Total Activities:</strong> {summary.totalActivities}</p>
            <p><strong>Total Minutes:</strong> {summary.totalMinutes}</p>
            <p><strong>This Week Minutes:</strong> {summary.thisWeekMinutes}</p>
            <p><strong>Last Month Minutes:</strong> {summary.lastMonthMinutes}</p>
          </div>

          {/* Charts */}
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h5>Bar Chart</h5>
                {chartData && <Bar data={chartData} />}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h5>Pie Chart</h5>
                {chartData && <Pie data={chartData} />}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h5>Line Chart</h5>
                {chartData && <Line data={chartData} />}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
