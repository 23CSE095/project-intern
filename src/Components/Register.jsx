import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleNames, setRoles] = useState("");

  const navigate = useNavigate();

  async function addNewEmployee(e) {
    e.preventDefault();

    const roleArray = roleNames.split(",").map(role => role.trim());

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        userName,
        password,
        roleNames: roleArray,
      });

      if (response.data) {
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Error during sign up.");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <h2>Sign Up</h2>
            </div>
            <div className="card-body">
              <form onSubmit={addNewEmployee}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Roles (comma separated)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={roleNames}
                    onChange={(e) => setRoles(e.target.value)}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Already a user? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
