package com.devcamp.loggingsystem.security;

import com.devcamp.loggingsystem.security.filter.JWTAuthenticationFilter;
import com.devcamp.loggingsystem.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * @author Metodi Vladimirov
 */
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final TokenService tokenService;

    @Autowired
    public SecurityConfig(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .mvcMatchers("/v1/auth/register", "/v1/auth/signin", "/swagger-ui.html","webjars/*").permitAll()
                .anyRequest().permitAll()
                .and()
                .addFilterBefore(new JWTAuthenticationFilter(tokenService),
                        UsernamePasswordAuthenticationFilter.class);

    }
}