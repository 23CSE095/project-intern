//package com.example.MindfulnessTracker.JWT;
//
//import io.jsonwebtoken.JwtException;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import java.security.Key;
//import java.util.Date;
//
//@Component
//public class JwtTokenProvider {
//
//    @Value("${app.jwt-secret}")
//    private String jwtSecret;
//    @Value("${app.jwt-expiration-milliseconds}")
//    private long jwtExpirationMilliseconds;
//
//    public Key secretKey(){
//        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
//    }
//    public String generateToken(Authentication authenticate){
//
//        UserDetails userPrincipal= (UserDetails)authenticate.getPrincipal();
//        return Jwts.builder()
//                .setSubject(userPrincipal.getUsername())
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis()+jwtExpirationMilliseconds))
//                .signWith(secretKey(), SignatureAlgorithm.HS256)
//                .compact();
//    }
//
//
//    public boolean validateToken(String token) {
//        try{
//            Jwts.parserBuilder()
//                    .setSigningKey(secretKey())
//                    .build()
//                    .parseClaimsJws(token);
//            return true;
//        }
//        catch (JwtException | IllegalArgumentException e){
//            return false;
//        }
//    }
//
//    public String getUserNameFromToken(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(secretKey())
//                .build()
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//}


package com.example.MindfulnessTracker.JWT;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenProvider {

    @Value("${app.jwt-secret}")
    private String jwtSecret;

    @Value("${app.jwt-expiration-milliseconds}")
    private long jwtExpirationMilliseconds;

    // Generate a secret key using the JWT secret string
    private Key getSecretKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    // Generate JWT token using authenticated user details
    public String generateToken(Authentication authentication) {
        UserDetails userPrincipal = (UserDetails) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())  // Make sure username is correct and exists in DB
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMilliseconds))
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Validate the token's signature and expiration
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getSecretKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            System.out.println("Invalid JWT: " + e.getMessage());
            return false;
        }
    }

    // Extract username (subject) from token
    public String getUserNameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSecretKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}

