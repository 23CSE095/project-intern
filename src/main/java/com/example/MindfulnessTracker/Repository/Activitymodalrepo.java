package com.example.MindfulnessTracker.Repository;

import com.example.MindfulnessTracker.Modals.ActivitySummaryDto;
import com.example.MindfulnessTracker.Modals.Activitymodal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface Activitymodalrepo extends JpaRepository<Activitymodal,Long> {





    List<Activitymodal> findByActivityNames(String activityName);
}
