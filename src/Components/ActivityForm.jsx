import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ActivityForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    activityNames: []
  });
  const navigate = useNavigate();

  const activityOptions = ['Yoga', 'Meditation', 'Walking', 'Reading','Sleeping'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleActivityChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setFormData((prev) => ({
      ...prev,
      activityNames: selected
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      id: formData.id ? Number(formData.id) : undefined,
      age: Number(formData.age),
    };

    try {
      const res = await axios.post('http://localhost:8080/api/auth/adminmodal', payload);
      alert("Activity submitted successfully!");
      navigate('/activity-details');
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting activity:", error);
      alert("Failed to submit activity.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Activity Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border bg-light rounded shadow-sm">
        
        {/* ID Field */}
        <div className="mb-3">
          <label className="form-label">ID (optional)</label>
          <input
            type="number"
            name="id"
            className="form-control"
            value={formData.id}
            onChange={handleChange}
          />
          <small className="text-muted">Leave blank to auto-generate</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Activities</label>
          <select
            multiple
            className="form-select"
            value={formData.activityNames}
            onChange={handleActivityChange}
            required
          >
            {activityOptions.map((activity, i) => (
              <option key={i} value={activity}>{activity}</option>
            ))}
          </select>
          <small className="text-muted">Use Ctrl/Command to select multiple</small>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ActivityForm;
