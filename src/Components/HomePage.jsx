// src/Components/HomePage.jsx
import React from "react";
import Header from "../Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Welcome to the Mindfulness Tracker 🌿</h1>
        <p className="lead text-center">
          Track your mindfulness activities, reflect on your progress, and build a healthier lifestyle.
        </p>
        <div className="text-center mt-4">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/28/07/50/mindset-743161_1280.jpg"
            alt="Mindfulness"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
