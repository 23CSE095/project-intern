package com.example.MindfulnessTracker.Service;

import com.example.MindfulnessTracker.Modals.ActivitySummaryDto;
import com.example.MindfulnessTracker.Modals.Activitymodal;
import com.example.MindfulnessTracker.Repository.Activitymodalrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.List;

@Service
public class ActivitySummaryService {

    @Autowired
    Activitymodalrepo activityRepo;

//    public ActivitySummaryDto getSummary(Long activityid) {
//        Optional<Activitymodal> optionalActivity = activityRepo.findByActivityid(activityid);
//
//        if (optionalActivity.isEmpty()) {
//            throw new RuntimeException("Activity with ID " + activityid + " not found.");
//        }
//
//        Activitymodal activity = optionalActivity.get();
//
//        // Current date and derived time periods
//        LocalDate today = LocalDate.now();
//        LocalDate startOfWeek = today.with(DayOfWeek.MONDAY);
//        LocalDate firstDayOfLastMonth = today.minusMonths(1).withDayOfMonth(1);
//        LocalDate lastDayOfLastMonth = today.withDayOfMonth(1).minusDays(1);
//
//        int thisWeekMinutes = 0;
//        int lastMonthMinutes = 0;
//
//        // Convert java.util.Date to java.time.LocalDate
//        LocalDate activityDate = activity.getDateofactivity()
//                .toInstant()
//                .atZone(ZoneId.systemDefault())
//                .toLocalDate();
//
//        // Debugging prints (optional, remove in production)
//        System.out.println("Activity Date: " + activityDate);
//        System.out.println("Start of This Week: " + startOfWeek);
//        System.out.println("First Day of Last Month: " + firstDayOfLastMonth);
//        System.out.println("Last Day of Last Month: " + lastDayOfLastMonth);
//
//        // Check if activity happened this week
//        if (!activityDate.isBefore(startOfWeek) && !activityDate.isAfter(today)) {
//            thisWeekMinutes = activity.getDurationMinutes();
//        }
//
//        // Check if activity happened last month
//        if (!activityDate.isBefore(firstDayOfLastMonth) && !activityDate.isAfter(lastDayOfLastMonth)) {
//            lastMonthMinutes = activity.getDurationMinutes();
//        }
//
//        return new ActivitySummaryDto(
//                activity.getActivityNames(),
//                1, // total activities — only one
//                activity.getDurationMinutes(),
//                thisWeekMinutes,
//                lastMonthMinutes
//        );
//    }

//    public ActivitySummaryDto getSummary() {
//        List<Activitymodal> activities = activityRepo.findAll(); // or filter by user if needed
//
//        LocalDate today = LocalDate.now();
//        LocalDate startOfWeek = today.with(DayOfWeek.MONDAY);
//        LocalDate firstDayOfLastMonth = today.minusMonths(1).withDayOfMonth(1);
//        LocalDate lastDayOfLastMonth = today.withDayOfMonth(1).minusDays(1);
//
//        int totalActivities = 0;
//        int totalMinutes = 0;
//        int thisWeekMinutes = 0;
//        int lastMonthMinutes = 0;
//
//        for (Activitymodal activity : activities) {
//            if (activity.getDateofactivity() == null) continue;
//
//            LocalDate activityDate = activity.getDateofactivity()
//                    .toInstant()
//                    .atZone(ZoneId.systemDefault())
//                    .toLocalDate();
//
//            int minutes = activity.getDurationMinutes();
//            totalActivities++;
//            totalMinutes += minutes;
//
//            if (!activityDate.isBefore(startOfWeek) && !activityDate.isAfter(today)) {
//                thisWeekMinutes += minutes;
//            }
//
//            if (!activityDate.isBefore(firstDayOfLastMonth) && !activityDate.isAfter(lastDayOfLastMonth)) {
//                lastMonthMinutes += minutes;
//            }
//        }
//
//        return new ActivitySummaryDto(
//                "All Activities", // or null or dynamic type
//                totalActivities,
//                totalMinutes,
//                thisWeekMinutes,
//                lastMonthMinutes
//        );
//    }

    public ActivitySummaryDto getSummary(String activityName) {
        List<Activitymodal> activities = activityRepo.findByActivityNames(activityName);

        LocalDate today = LocalDate.now();
        LocalDate startOfWeek = today.with(DayOfWeek.MONDAY);
        LocalDate firstDayOfLastMonth = today.minusMonths(1).withDayOfMonth(1);
        LocalDate lastDayOfLastMonth = today.withDayOfMonth(1).minusDays(1);

        int totalActivities = 0;
        int totalMinutes = 0;
        int thisWeekMinutes = 0;
        int lastMonthMinutes = 0;

        for (Activitymodal activity : activities) {
            if (activity.getDateofactivity() == null) continue;

            LocalDate activityDate = activity.getDateofactivity()
                    .toInstant()
                    .atZone(ZoneId.systemDefault())
                    .toLocalDate();

            int minutes = activity.getDurationMinutes();
            totalActivities++;
            totalMinutes += minutes;

            if (!activityDate.isBefore(startOfWeek) && !activityDate.isAfter(today)) {
                thisWeekMinutes += minutes;
            }

            if (!activityDate.isBefore(firstDayOfLastMonth) && !activityDate.isAfter(lastDayOfLastMonth)) {
                lastMonthMinutes += minutes;
            }
        }

        return new ActivitySummaryDto(
                activityName,
                totalActivities,
                totalMinutes,
                thisWeekMinutes,
                lastMonthMinutes
        );
    }



    public String deletesummary(Long activityid) {
        activityRepo.deleteById(activityid);
        return "Deleted successfully";
    }

    public List<Activitymodal> getAllSummary() {
        return activityRepo.findAll();
    }
}
