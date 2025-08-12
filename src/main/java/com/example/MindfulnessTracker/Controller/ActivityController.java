package com.example.MindfulnessTracker.Controller;

import com.example.MindfulnessTracker.Modals.Activitymodal;
import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/activity/modal")
public class ActivityController {

    @Autowired
    ActivityService activityservice;

    @GetMapping("/routed")
    public String routed(){
        return "welcome to activity modal";
    }

    @GetMapping("/activities")
    public List<Activitymodal> getallactivities(){
        return  activityservice.getAllActivity();
    }
    @GetMapping("/{activityid}")
    public Activitymodal getActivitybyid(@PathVariable Long activityid){
        return activityservice.getActivityById(activityid);
    }
    @PostMapping("/Adding activity")
    public String addActivity(@RequestBody Activitymodal activities){
        return activityservice.addedActivity(activities);
    }
    @PutMapping("/{activityid}")
    public String putMethod(@RequestBody Activitymodal activities, @PathVariable Long activityid) {

        return activityservice.updateactivity(activities, activityid);
    }
    @DeleteMapping("/{activityid}")
    public String deleteMethod(@PathVariable Long activityid){
        return activityservice.deleteactivity(activityid);
    }

}
