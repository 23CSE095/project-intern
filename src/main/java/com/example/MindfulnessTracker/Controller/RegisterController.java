package com.example.MindfulnessTracker.Controller;

import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Service.Registerservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/register")
public class RegisterController {
    @Autowired
    Registerservice registerservice;
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/")
    public String route(){
        return registerservice.route();
    }
//    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/root")
    public List<Register> getAllUser() {
        return registerservice.getMethod();
    }
//    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    @GetMapping("/{id}")
    public Register getuserid(@PathVariable Long id){
        return registerservice.getuserId(id);
    }


//    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("/add")
    public String adduser(@RequestBody Register user) {
        return registerservice.addemployee(user);
    }
    //@PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PutMapping("/{id}")
    public String putMethod(@RequestBody Register user,@PathVariable Long id) {

        return registerservice.updateuser(user, id);
    }
   // @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @DeleteMapping("/{id}")
    public String deleteMethod(@PathVariable Long id){
        return registerservice.deleteuser(id);
    }
}
