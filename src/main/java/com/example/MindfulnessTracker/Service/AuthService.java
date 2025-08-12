package com.example.MindfulnessTracker.Service;

import com.example.MindfulnessTracker.JWT.JwtTokenProvider;
import com.example.MindfulnessTracker.Modals.*;
import com.example.MindfulnessTracker.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class AuthService {
    @Autowired
    Rolerepo rolerepo;
    @Autowired
     PasswordEncoder passwordEncoder;
    @Autowired
    Registerrepo  regdrepo;

    @Autowired
    Activityrepo activityrepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserDetailRepository userDetailRepository;

    @Autowired
    Activitymodalrepo activitymodalrepo;

    @Autowired
    Userrepo adminrepo;


    public String addNewEmployee(UserDetailDto registerdetails) {
        Register register = new Register();
        register.setId(registerdetails.getId());
        register.setName(registerdetails.getName());
        register.setEmail(registerdetails.getEmail());
        register.setUserName(registerdetails.getUserName());
        register.setPassword(passwordEncoder.encode(registerdetails.getPassword()));

        // Assign roles
        Set<Roles> roles = new HashSet<>();
        for (String roleName : registerdetails.getRoleNames()) {
            Roles role = rolerepo.findByRoleName(roleName)
                    .orElseThrow(() -> new RuntimeException("Role not found: " + roleName));
            roles.add(role);
        }
        register.setRole(roles); // assuming you have a setRoles method in Register entity

        // Assign activities

        // Save user
        regdrepo.save(register);

        return "User registered successfully";
    }


    public String addNewActivity(ActivityDto activitiesdetail) {
        // Fetch user using ID from ActivityDto

        // Create new activity object
        Activitymodal activity = new Activitymodal();
        activity.setActivityNames(activitiesdetail.getActivityNames());
        activity.setDescription(activitiesdetail.getDescription());
        activity.setDateofactivity(activitiesdetail.getDateofactivity());
        activity.setDurationMinutes(activitiesdetail.getDurationMinutes());

        // Associate activity with user


        // Save the activity
        activityrepo.save(activity);

        return "Activity added successfully";
    }

//    public String addactivitymodal(UserDTO modal) {
//        Usermodal modals = new Usermodal();
//        modals.setId(modal.getId());
//        modals.setName(modal.getName());
//        modals.setAge(modal.getAge());
//
//        Set<Activitymodal> activities = new HashSet<>();
//        for (String activityName : modal.getActivityNames()) {
//           Activitymodal activity = activityrepo.findByActivityNames(activityName)
//                    .orElseThrow(() -> new RuntimeException("Activity not found: " + activityName));
//            activities.add(activity);
//        }
//
//        modals.setActivities(activities);
//        adminrepo.save(modals);
//
//        return "User activity details saved successfully";
//    }

    public String addactivitymodal(UserDTO modal) {
        Usermodal modals = new Usermodal();
        modals.setId(modal.getId());
        modals.setName(modal.getName());
        modals.setAge(modal.getAge());

        Set<Activitymodal> activities = new HashSet<>();
        for (String activityName : modal.getActivityNames()) {
            List<Activitymodal> matchedActivities = activityrepo.findByActivityNames(activityName);

            if (matchedActivities.isEmpty()) {
                throw new RuntimeException("Activity not found: " + activityName);
            }


            activities.add(matchedActivities.get(0));
        }

        modals.setActivities(activities);
        adminrepo.save(modals);

        return "User activity details saved successfully";
    }



    public JwtResponseToken authenticate(UserDetailDto login) {
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                login.getUserName(), login.getPassword()
                        )
                );
        String token = jwtTokenProvider.generateToken(authentication);

        String username = login.getUserName();
        List<String> roles = authentication.getAuthorities().stream()
                .map(role -> role.getAuthority())
                .collect(Collectors.toList());

        String joinedRoles = String.join(",", roles);
        return new JwtResponseToken(token,username,joinedRoles);
    }
    public Optional<Register> getUserByUserName(String username){
        return userDetailRepository.findByUserName(username);
    }






}
