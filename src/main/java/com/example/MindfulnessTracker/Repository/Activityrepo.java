package com.example.MindfulnessTracker.Repository;

import com.example.MindfulnessTracker.Modals.Activitymodal;
import com.example.MindfulnessTracker.Modals.Register;
import org.springframework.data.jpa.repository.JpaRepository;



import java.util.List;
import java.util.Optional;

public interface Activityrepo extends JpaRepository<Activitymodal,Long> {

    List<Activitymodal> findByActivityNames(String activityName);


}
