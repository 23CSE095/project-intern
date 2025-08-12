package com.example.MindfulnessTracker.Controller;

import com.example.MindfulnessTracker.Modals.ActivitySummaryDto;
import com.example.MindfulnessTracker.Modals.Activitymodal;
import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Service.ActivitySummaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/activity")
public class AcvtivitySummarycontroller {


        @Autowired
        ActivitySummaryService summaryService;

        // Generate and return summary for a specific user
        @GetMapping("/activity/{name}")
        public ActivitySummaryDto getSummaryForUser(@PathVariable ("name") String activityName) {
            return  summaryService.getSummary(activityName);
        }
    @GetMapping("/summary/all")
    public List<Activitymodal>getallSummary() {
        return  summaryService.getAllSummary();
    }




    @DeleteMapping("/{activityid}")
    public String deleteMethod(@PathVariable Long  activityid){
        return summaryService.deletesummary(activityid);
    }

}


