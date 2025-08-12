package com.example.MindfulnessTracker.Repository;

import com.example.MindfulnessTracker.Modals.Register;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface Registerrepo extends JpaRepository<Register,Long> {

   Optional <Register> findByEmail(String email);

   Optional<Register> findByUserName(String userName);
}
