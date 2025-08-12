import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import mindfulImg from "../assets/ult.jpeg"; // Replace with your image path

const MindfulnessTrackerPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="container py-5">
      {/* Header Card */}
      <div className="card shadow-sm mb-4 text-center">
        <div className="card-body">
          <h1 className="display-4 fw-bold">Mindful Tracker</h1>
          <p className="lead text-muted mb-4">
            Cultivate daily mindfulness by tracking your mental well-being practices.
          </p>
          <img
            src={mindfulImg}
            alt="Mindfulness"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="row g-4 text-start">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              
              <p className="card-text">
                The Mindful Tracker is your companion on a journey to a more peaceful, present life. It helps guide your daily mindfulness practices.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
           
              <p className="card-text">
                Mindfulness reduces anxiety, improves focus, and promotes emotional well-being. The tracker helps you stay consistent with daily habits.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
          
              <p className="card-text">
                You can track practices like:
              </p>
              <ul className="card-text">
                <li>🌿 Meditation</li>
                <li>📓 Journaling</li>
                <li>🌬️ Deep Breathing</li>
                <li>🧘 Movement/Yoga</li>
                <li>💡 Reflections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Card */}
      <div className="card shadow-sm mt-5 mb-4">
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0">
            <p>“The present moment is the only time over which we have dominion.”</p>
            <footer className="blockquote-footer">Thích Nhất Hạnh</footer>
          </blockquote>
        </div>
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="btn btn-success btn-lg" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MindfulnessTrackerPage;
