package com.example.MindfulnessTracker.Service;

import com.example.MindfulnessTracker.Modals.Activitymodal;
import com.example.MindfulnessTracker.Repository.Activityrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {
    @Autowired
    Activityrepo activityrepo;
    public List<Activitymodal> getAllActivity() {
        return activityrepo.findAll();
    }

    public Activitymodal getActivityById(Long activityid) {
        return activityrepo.findById(activityid).orElse(new Activitymodal());
    }

    public String addedActivity(Activitymodal activities) {
        activityrepo.save(activities);
        return "Activity successfully";
    }

    public String updateactivity(Activitymodal activities, Long activityid) {
        activityrepo.save(activities);
        return "updated successfully";
    }

    public String deleteactivity(Long activityid) {
        activityrepo.deleteById(activityid);
        return "deleted successfully";
    }
}
