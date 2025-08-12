package com.example.MindfulnessTracker.Modals;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivitySummaryDto {

        private String activityType;
        private int totalActivities;
        private int totalMinutes;
        private int thisWeekMinutes;
        private int lastMonthMinutes;

    }


