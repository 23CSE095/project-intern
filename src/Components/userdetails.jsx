

import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    userName: ""
    // Password is intentionally left out from editing for security
  });

  // Fetch users
  const fetchUsers = () => {
    axios.get("http://localhost:8080/api/register/root")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Handle delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/register/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Delete failed:", error);
      });
  };

  // Handle edit
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditForm({
      name: user.name,
      email: user.email,
      userName: user.userName
    });
  };

  // Handle update
  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/register/${editingUserId}`, editForm)
      .then(() => {
        setEditingUserId(null);
        fetchUsers();
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingUserId(null);
    setEditForm({
      name: "",
      email: "",
      userName: ""
    });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">User List</h3>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            editingUserId === user.id ? (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <input
                    name="name"
                    className="form-control"
                    value={editForm.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="email"
                    className="form-control"
                    value={editForm.email}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="userName"
                    className="form-control"
                    value={editForm.userName}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {user.role.map((r) => (
                    <span key={r.roleId} className="badge bg-secondary me-1">
                      {r.roleName}
                    </span>
                  ))}
                </td>
                <td>
                  <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.userName}</td>
                <td>
                  {user.role.map((r) => (
                    <span key={r.roleId} className="badge bg-secondary me-1">
                      {r.roleName}
                    </span>
                  ))}
                </td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(user)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
