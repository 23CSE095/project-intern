// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const Useractivity = () => {
// //   const [activity, setActivity] = useState({
// //     activityNames: "",
// //     description: "",
// //     dateofactivity: "",
// //     durationMinutes: "",
// //     userId: ""  // required for backend
// //   });

// //   useEffect(() => {
// //     const storedUserId = localStorage.getItem("userId");
// //     if (storedUserId) {
// //       setActivity((prev) => ({ ...prev, userId: storedUserId }));
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     setActivity({
// //       ...activity,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const token = localStorage.getItem("token");

// //       const response = await axios.post(
// //         "http://localhost:8080/api/auth/registration",
// //         activity,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       alert("Activity added successfully!");
// //       setActivity({
// //         activityNames: "",
// //         description: "",
// //         dateofactivity: "",
// //         durationMinutes: "",
// //         userId: activity.userId
// //       });
// //     } catch (error) {
// //       console.error(error);
// //       alert("Error adding activity.");
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <div className="card shadow p-4">
// //         <h3 className="mb-4">Add New Activity</h3>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label className="form-label">Activity Name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="activityNames"
// //               value={activity.activityNames}
// //               onChange={handleChange}
// //               required
// //               placeholder="e.g. Yoga"
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Description</label>
// //             <textarea
// //               className="form-control"
// //               name="description"
// //               value={activity.description}
// //               onChange={handleChange}
// //               required
// //               placeholder="Describe the activity"
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Date of Activity</label>
// //             <input
// //               type="date"
// //               className="form-control"
// //               name="dateofactivity"
// //               value={activity.dateofactivity}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Duration (in minutes)</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               name="durationMinutes"
// //               value={activity.durationMinutes}
// //               onChange={handleChange}
// //               required
// //               min="1"
// //               placeholder="e.g. 30"
// //             />
// //           </div>

// //           <button type="submit" className="btn btn-primary">
// //             Save Activity
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Useractivity;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <-- Added for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const Useractivity = () => {
  const navigate = useNavigate(); // <-- Hook for navigation

  const [activity, setActivity] = useState({
    activityNames: "",
    description: "",
    dateofactivity: "",
    durationMinutes: "",
    userId: ""  // required for backend
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setActivity((prev) => ({ ...prev, userId: storedUserId }));
    }
  }, []);

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8080/api/auth/registration",
        activity,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Activity added successfully!");
      setActivity({
        activityNames: "",
        description: "",
        dateofactivity: "",
        durationMinutes: "",
        userId: activity.userId
      });
    } catch (error) {
      console.error(error);
      alert("Error adding activity.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Add New Activity</h3>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/activity-manager")}
          >
            Go to Activity Manager
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Activity Name</label>
            <input
              type="text"
              className="form-control"
              name="activityNames"
              value={activity.activityNames}
              onChange={handleChange}
              required
              placeholder="e.g. Yoga"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={activity.description}
              onChange={handleChange}
              required
              placeholder="Describe the activity"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Activity</label>
            <input
              type="date"
              className="form-control"
              name="dateofactivity"
              value={activity.dateofactivity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Duration (in minutes)</label>
            <input
              type="number"
              className="form-control"
              name="durationMinutes"
              value={activity.durationMinutes}
              onChange={handleChange}
              required
              min="1"
              placeholder="e.g. 30"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save Activity
          </button>
        </form>
      </div>
    </div>
  );
};

export default Useractivity;


