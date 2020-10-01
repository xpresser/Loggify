package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.persistence.entity.User;
import com.devcamp.loggingsystem.security.UserPrincipal;
import com.devcamp.loggingsystem.service.TokenService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

/**
 * @author Metodi Vladimirov
 */
@Slf4j
@Service
public class JWTTokenServiceBean implements TokenService {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.jwtExpirationMs}")
    private int jwtExpirationMs;

    @Override
    public String generateToken(User user) {

        Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes());

        String token = Jwts.builder()
                .claim("id", user.getId())
                .claim("username", user.getUsername())
                .claim("email", user.getEmail())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        return String.format("Bearer %s", token);
    }

    @Override
    public UserPrincipal parseToken(String token) {

        Jws<Claims> claimsJws = Jwts.parserBuilder()
                .setSigningKey(jwtSecret.getBytes())
                .build()
                .parseClaimsJws(token);

        Claims body = claimsJws.getBody();

        String username = body.getSubject();

        String email = body.get("email", String.class);

        Long id = body.get("id", Long.class);

        return new UserPrincipal(id, username, email);
    }
}
