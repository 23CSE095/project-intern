package com.example.MindfulnessTracker.Controller;

import com.example.MindfulnessTracker.Modals.*;
import com.example.MindfulnessTracker.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class Authcontroller {
    @Autowired
    AuthService authservice;

    @PostMapping("/register")
    public String addNewUser(@RequestBody UserDetailDto registerdetails) {
        return authservice.addNewEmployee(registerdetails);
    }

    @PostMapping("/registration")
    public String addnewactivty(@RequestBody ActivityDto activitiesdetail) {
        return authservice.addNewActivity(activitiesdetail);
    }

    @PostMapping("/login")
    public JwtResponseToken Login(@RequestBody UserDetailDto login) {
        return authservice.authenticate(login);
    }



    @PostMapping("/adminmodal")
    public String getallactivity(@RequestBody UserDTO modal) {
        return authservice.addactivitymodal(modal);
    }




}


