package com.loggingsystem.service;

import com.loggingsystem.persistence.entity.User;
import com.loggingsystem.security.UserPrincipal;

/**
 * @author Metodi Vladimirov
 */
public interface TokenService {

    /**
     * @param user specified user for which the token is going to be generated
     * @return Bearer JWToken with claims such as
     * user id, username and user roles
     */
    String generateToken(User user);

    /**
     * @param token the given token
     * @return returns the user from token information
     */
    UserPrincipal parseToken(String token);
}
