package com.example.MindfulnessTracker.Modals;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Register {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      private String name;
      private String email;
      private String userName;
      private String password;


      @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
      @JoinTable(
              name = "user_roles",
              joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),         // refers to Register.id
              inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "roleId")   // refers to Roles.id
      )
      private Set<Roles> role;
//      @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//      @JoinTable(
//              name = "user_activities",
//              joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
//              inverseJoinColumns = @JoinColumn(name = "activity_id", referencedColumnName = "activityid")
//      )
//      private Set<Activitymodal> activities;




}
