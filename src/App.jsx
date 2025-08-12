import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDetails from "./Components/userdetails";
import ActivityForm from "./Components/ActivityForm";
import ActivityCards from "./Components/ActivityCards";
import ActivityList from "./Components/ActivityList";
import  Useractivity from "./Components/Useractivity";
import UserActivityManager from "./Components/ActivityManager";
import ActivitySummaryCard from "./Components/ActivitySummaryCard";
import Dashboard from "./Components/Dashboard";
// Uncomment if you want to use Header component
 import HomePage from "./Components/HomePage"; 
 import MindfulnessTrackerPage from "./Page/MindfulnessTrackerPage";  
 // Uncomment if you want to use Home Page component








  


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MindfulnessTrackerPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userdetail" element={<UserDetails />} />
      <Route path="/add-activity" element={<ActivityForm />} />
      <Route path="/activity-cards" element={<ActivityCards />} />
      <Route path="/activity-details" element={<ActivityList />} />
      <Route path="/user-activity" element={<Useractivity />} />
      <Route path="/activity-manager" element={<UserActivityManager />} />
      <Route path="/activity-summary/:activityName" element={<ActivitySummaryCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<HomePage />} /> {/* Uncomment if you want to use HomePage component */}
    



      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
