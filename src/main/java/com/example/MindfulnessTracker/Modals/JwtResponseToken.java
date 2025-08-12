package com.example.MindfulnessTracker.Modals;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponseToken {

    private String token;
    private String username;
    private String Role;


}
