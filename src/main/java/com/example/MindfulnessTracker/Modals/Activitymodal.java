package com.example.MindfulnessTracker.Modals;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity // optional, ensures table name
public class Activitymodal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Ensures MySQL auto-generates ID
    private Long activityid;

    @Column(unique = true)
    private String activityNames;

    private String description;

    // ensures date format stored properly
    private Date dateofactivity;

    private int durationMinutes;


}
