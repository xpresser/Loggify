package com.loggingsystem.service.dto.user;

import lombok.Data;

/**
 * @author Mikael Parsekyan
 */
@Data
public class UserFullDTO {

    private Long id;

    private String fullname;

    private String username;

    private String email;
}
