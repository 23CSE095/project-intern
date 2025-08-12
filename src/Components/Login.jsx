// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8080/api/auth/login", {
//         userName: userName,
//         password: password,
//       });

//       const { token, roles, username } = response.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("role", roles);

//       console.log("Username:", username);
//       console.log("Roles:", roles);
//       console.log("Token:", token);

//       alert("Login Successful");
//       navigate("/activity-cards");
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="container">
//       <br /> <br />
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-header">
//               <h2 className="text-center">Login Form</h2>
//             </div>

//             <div className="card-body">
//               <form onSubmit={handleLogin}>
//                 <div className="mb-3 row">
//                   <label className="col-md-3 col-form-label">Username</label>
//                   <div className="col-md-9">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter username"
//                       value={userName}
//                       onChange={(e) => setUserName(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3 row">
//                   <label className="col-md-3 col-form-label">Password</label>
//                   <div className="col-md-9">
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="text-center">
//                   <button type="submit" className="btn btn-primary">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//               <p className="mt-3 text-center">
//                 Create an account? <Link to="/register">Register</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [userName, setUserName] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       setIsLoggedIn(true);
// //     }
// //   }, []);

// //   const handleLogin = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:8080/api/auth/login", {
// //         userName: userName,
// //         password: password,
// //       });

// //       const { token, roles, username } = response.data;

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", roles);

// //       alert("Login Successful");
// //       navigate("/activity-cards");
// //     } catch (error) {
// //       console.error("Login Error:", error);
// //       alert("Invalid Credentials");
// //     }
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("role");
// //     setIsLoggedIn(false);
// //     alert("Logged out successfully");
// //   };

// //   return (
// //     <div className="container">
// //       <br /> <br />
// //       <div className="row">
// //         <div className="col-md-6 offset-md-3">
// //           <div className="card">
// //             <div className="card-header d-flex justify-content-between align-items-center">
// //               <h2 className="text-center">Login Form</h2>
// //               {isLoggedIn && (
// //                 <button className="btn btn-danger btn-sm" onClick={handleLogout}>
// //                   Logout
// //                 </button>
// //               )}
// //             </div>

// //             <div className="card-body">
// //               {!isLoggedIn ? (
// //                 <form onSubmit={handleLogin}>
// //                   <div className="mb-3 row">
// //                     <label className="col-md-3 col-form-label">Username</label>
// //                     <div className="col-md-9">
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         placeholder="Enter username"
// //                         value={userName}
// //                         onChange={(e) => setUserName(e.target.value)}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="mb-3 row">
// //                     <label className="col-md-3 col-form-label">Password</label>
// //                     <div className="col-md-9">
// //                       <input
// //                         type="password"
// //                         className="form-control"
// //                         placeholder="Enter password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="text-center">
// //                     <button type="submit" className="btn btn-primary">
// //                       Submit
// //                     </button>
// //                   </div>
// //                 </form>
// //               ) : (
// //                 <div className="text-center">
// //                   <p>You are already logged in.</p>
// //                   <button className="btn btn-danger" onClick={handleLogout}>
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}

// //               {!isLoggedIn && (
// //                 <p className="mt-3 text-center">
// //                   Create an account? <Link to="/register">Register</Link>
// //                 </p>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        userName: userName,
        password: password,
      });

      const { token, roles, username } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", roles);
      setIsLoggedIn(true);

      alert("Login Successful");
      navigate("/activity-cards");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    alert("Logged out successfully");
    setUserName("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="text-center w-100">Login Form</h2>
              {isLoggedIn && (
                <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>

            <div className="card-body">
              {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                  <div className="mb-3 row">
                    <label className="col-md-3 col-form-label">Username</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label className="col-md-3 col-form-label">Password</label>
                    <div className="col-md-9">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p>You are already logged in.</p>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}

              {!isLoggedIn && (
                <p className="mt-3 text-center">
                  Create an account? <Link to="/register">Register</Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


