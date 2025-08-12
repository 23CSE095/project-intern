package com.example.MindfulnessTracker.Repository;

import com.example.MindfulnessTracker.Modals.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface Rolerepo extends JpaRepository<Roles,Long> {
    Optional<Roles> findByRoleName(String roleName);
}
