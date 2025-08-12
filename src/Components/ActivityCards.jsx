import React from "react";
import { useNavigate } from "react-router-dom";

const activities = [
  { name: "Yoga", description: "Morning yoga for flexibility" },
  { name: "Sleeping", description: "Rest and recovery" },
  { name: "Running", description: "Improve endurance" },
];

const ActivityCards = () => {
  const navigate = useNavigate();

  const handleStoreClick = (activityName) => {
    navigate(`/add-activity`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Activities</h2>
      <div className="row">
        {activities.map((activity, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{activity.name}</h5>
                <p className="card-text">{activity.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleStoreClick(activity.name)}
                >
                  Store Activity Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;
