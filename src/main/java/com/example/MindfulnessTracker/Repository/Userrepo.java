package com.example.MindfulnessTracker.Repository;

import com.example.MindfulnessTracker.Modals.Usermodal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Userrepo extends JpaRepository <Usermodal,Long> {

}
