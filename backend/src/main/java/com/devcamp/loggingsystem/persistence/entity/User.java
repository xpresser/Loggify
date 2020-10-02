package com.devcamp.loggingsystem.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "users")
@Validated
@Getter
@Setter
@NoArgsConstructor
public class User extends BaseEntity {

    @NonNull
    @Column(nullable = false)
    @Size(min = 4, max = 40)
    private String fullName;

    @NonNull
    @Column(unique = true, nullable = false)
    @Size(min = 4, max = 40)
    private String username;

    @NonNull
    @Email
    private String email;

    @NonNull
    @Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
            message = "Password must be minimum 8 symbols, and must contain one uppercase symbol and one digit")
    @Column
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<Timesheet> timesheets;
}
