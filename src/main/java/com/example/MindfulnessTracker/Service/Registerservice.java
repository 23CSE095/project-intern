package com.example.MindfulnessTracker.Service;

import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Repository.Registerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Registerservice {
    @Autowired
    Registerrepo regdrepo;

    public String route(){
        return "WELCOME TO SPRING BOOT SECURITY";
    }
    public List<Register> getMethod() {

        return regdrepo.findAll();

    }
    public Register getuserId(Long id) {
        return regdrepo.findById(id).orElse(new Register());
    }



    public String addemployee(Register user) {
       regdrepo.save(user);
       return "user added successfully";
    }


    public String updateuser(Register user,Long id) {
        regdrepo.save(user);
        return " user updated  successfully";
    }

    public String deleteuser(Long id) {
        regdrepo.deleteById(id);
        return "user deleted successfully";
    }
}
