package com.example.MindfulnessTracker.Modals;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailDto {
    private Long id;
    private String name;
    private String email;
    private String userName;
    private String password;
    private Set<String> roleNames;
//    private Set<String> activityNames;
//    public UserDetailDto(int id, String name, String email) {
//
//            this.id = id;
//            this.name = name;
//            this.email = email;
//
//    }
}
