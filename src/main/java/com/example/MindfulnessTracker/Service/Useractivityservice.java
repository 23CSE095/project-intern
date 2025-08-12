package com.example.MindfulnessTracker.Service;

import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Modals.Usermodal;
import com.example.MindfulnessTracker.Repository.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Useractivityservice {

    @Autowired
    Userrepo userrepo;
    public List<Usermodal> getMethod() {
        return userrepo.findAll();
    }

    public String updateuser(Usermodal modal, Long id) {
        userrepo.save(modal);
        return " user activity updated  successfully";
    }

    public String deleteuser(Long id) {
        userrepo.deleteById(id);
        return "user  activity deleted successfully";
    }
}
