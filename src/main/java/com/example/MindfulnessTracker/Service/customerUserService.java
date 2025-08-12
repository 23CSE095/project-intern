//package com.example.MindfulnessTracker.Service;
//
//import com.example.MindfulnessTracker.Modals.Register;
//import com.example.MindfulnessTracker.Repository.Registerrepo;
//import jakarta.servlet.ServletException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Set;
//import java.util.stream.Collectors;
//
//@Service
//public class customerUserService implements UserDetailsService {
//
//    @Autowired
//    Registerrepo regdrepo;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Register user = regdrepo.findByUserName(username)
//                .orElseThrow(() -> {
//                    return new RuntimeException("User Not Found");
//                });
//
//        // Map roles to authorities
//        Set<GrantedAuthority> authorities = user.getRole().stream()
//                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
//                .collect(Collectors.toSet());
//
//        System.out.println("username: " + username + ", password: " + user.getPassword() + ", authorities: " + authorities);
//
//        return new User(user.getUserName(), user.getPassword(), authorities);
//    }
//}


package com.example.MindfulnessTracker.Service;

import com.example.MindfulnessTracker.Modals.Register;
import com.example.MindfulnessTracker.Repository.Registerrepo;
import jakarta.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class customerUserService implements UserDetailsService {

    @Autowired
     Registerrepo regdrepo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Register user = regdrepo.findByUserName(userName)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found with username: " + userName));

        Set<GrantedAuthority> authorities = user.getRole().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
                .collect(Collectors.toSet());

        // Debug only; do not print passwords in production
        System.out.println("username: " + userName + ", authorities: " + authorities);

        return new User(user.getUserName(), user.getPassword(), authorities);
    }
}

