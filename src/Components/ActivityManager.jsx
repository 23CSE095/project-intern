// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const ActivityManager = () => {
// //   const [activities, setActivities] = useState([]);
// //   const [editingId, setEditingId] = useState(null);
// //   const [editData, setEditData] = useState({
// //     activityNames: "",
// //     description: "",
// //     dateofactivity: "",
// //     durationMinutes: ""
// //   });

// //   // Fetch all activities on component mount
// //   useEffect(() => {
// //     fetchActivities();
// //   }, []);

// //   const fetchActivities = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:8080/api/activity/modal/activities");
// //       setActivities(res.data);
// //     } catch (err) {
// //       console.error("Error fetching activities:", err);
// //     }
// //   };

// //   // Start editing
// //   const startEditing = (activity) => {
// //     setEditingId(activity.activityid); // ensure your backend sends `activityid`
// //     setEditData({ ...activity });
// //   };

// //   // Cancel editing
// //   const cancelEditing = () => {
// //     setEditingId(null);
// //     setEditData({
// //       activityNames: "",
// //       description: "",
// //       dateofactivity: "",
// //       durationMinutes: ""
// //     });
// //   };

// //   // Handle form changes during edit
// //   const handleEditChange = (e) => {
// //     setEditData({ ...editData, [e.target.name]: e.target.value });
// //   };

// //   // Save the edited activity
// //   const saveEdit = async () => {
// //     try {
// //       await axios.put(`http://localhost:8080/api/activity/modal/${editingId}`, editData);
// //       setEditingId(null);
// //       fetchActivities(); // Refresh the list
// //     } catch (err) {
// //       console.error("Error updating activity:", err);
// //     }
// //   };

// //   // Delete activity
// //   const deleteActivity = async (activityid) => {
// //     if (window.confirm("Are you sure you want to delete this activity?")) {
// //       try {
// //         await axios.delete(`http://localhost:8080/api/activity/modal/${activityid}`);
// //         fetchActivities();
// //       } catch (err) {
// //         console.error("Error deleting activity:", err);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2 className="mb-4">Activity Manager</h2>
// //       <table className="table table-bordered table-hover">
// //         <thead className="table-light">
// //           <tr>
// //             <th>Activity Name</th>
// //             <th>Description</th>
// //             <th>Date</th>
// //             <th>Duration (minutes)</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {activities.map((activity) => (
// //             <tr key={activity.activityid}>
// //               {editingId === activity.activityid ? (
// //                 <>
// //                   <td>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       name="activityNames"
// //                       value={editData.activityNames}
// //                       onChange={handleEditChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       name="description"
// //                       value={editData.description}
// //                       onChange={handleEditChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="date"
// //                       className="form-control"
// //                       name="dateofactivity"
// //                       value={editData.dateofactivity}
// //                       onChange={handleEditChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="number"
// //                       className="form-control"
// //                       name="durationMinutes"
// //                       value={editData.durationMinutes}
// //                       onChange={handleEditChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <button onClick={saveEdit} className="btn btn-success btn-sm me-2">
// //                       Save
// //                     </button>
// //                     <button onClick={cancelEditing} className="btn btn-secondary btn-sm">
// //                       Cancel
// //                     </button>
// //                   </td>
// //                 </>
// //               ) : (
// //                 <>
// //                   <td>{activity.activityNames}</td>
// //                   <td>{activity.description}</td>
// //                   <td>{activity.dateofactivity}</td>
// //                   <td>{activity.durationMinutes}</td>
// //                   <td>
// //                     <button onClick={() => startEditing(activity)} className="btn btn-primary btn-sm me-2">
// //                       Edit
// //                     </button>
// //                     <button onClick={() => deleteActivity(activity.activityid)} className="btn btn-danger btn-sm">
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </>
// //               )}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default ActivityManager;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import navigation

const ActivityManager = () => {
  const [activities, setActivities] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    activityNames: "",
    description: "",
    dateofactivity: "",
    durationMinutes: ""
  });

  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/activity/modal/activities");
      setActivities(res.data);
    } catch (err) {
      console.error("Error fetching activities:", err);
    }
  };

  const startEditing = (activity) => {
    setEditingId(activity.activityid);
    setEditData({ ...activity });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditData({
      activityNames: "",
      description: "",
      dateofactivity: "",
      durationMinutes: ""
    });
    navigate("/dashboard"); // 👈 redirect after cancel
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      await axios.put(`http://localhost:8080/api/activity/modal/${editingId}`, editData);
      setEditingId(null);
      fetchActivities();
      navigate("/dashboard"); // 👈 redirect after save
    } catch (err) {
      console.error("Error updating activity:", err);
    }
  };

  const deleteActivity = async (activityid) => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      try {
        await axios.delete(`http://localhost:8080/api/activity/modal/${activityid}`);
        fetchActivities();
      } catch (err) {
        console.error("Error deleting activity:", err);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Activity Manager</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Activity Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Duration (minutes)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.activityid}>
              {editingId === activity.activityid ? (
                <>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="activityNames"
                      value={editData.activityNames}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      value={editData.description}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      name="dateofactivity"
                      value={editData.dateofactivity}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="durationMinutes"
                      value={editData.durationMinutes}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button onClick={saveEdit} className="btn btn-success btn-sm me-2">
                      Save
                    </button>
                    <button onClick={cancelEditing} className="btn btn-secondary btn-sm">
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{activity.activityNames}</td>
                  <td>{activity.description}</td>
                  <td>{activity.dateofactivity}</td>
                  <td>{activity.durationMinutes}</td>
                  <td>
                    <button onClick={() => startEditing(activity)} className="btn btn-primary btn-sm me-2">
                      Edit
                    </button>
                    <button onClick={() => deleteActivity(activity.activityid)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityManager;



