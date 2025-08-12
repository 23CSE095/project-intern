package com.example.MindfulnessTracker.Controller;

import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Modals.Usermodal;
import com.example.MindfulnessTracker.Service.Useractivityservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class Useractivitycontroller {
    @Autowired
    Useractivityservice useractivity;

    @GetMapping("/list")
    public List<Usermodal> getAllUser() {
        return useractivity.getMethod();
    }

    @PutMapping("/{activityid}")
    public String putMethod(@RequestBody Usermodal modal, @PathVariable Long id) {

        return useractivity.updateuser(modal, id);
    }

    @DeleteMapping("/{id}")
    public String deleteMethod(@PathVariable Long id){
        return useractivity.deleteuser(id);
    }
}
