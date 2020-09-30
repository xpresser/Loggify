package com.devcamp.loggingsystem.persistence.entity;

import com.devcamp.loggingsystem.enumeration.user.UserPositionEnum;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "users")
@Validated
@Data
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
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
            message = "Password must be minimum 8 symbols, and must contain one uppercase symbol and one digit")
    @Column
    private String password;

    @Enumerated(EnumType.STRING)
    private UserPositionEnum userPosition;

    @OneToMany
    @JoinColumn(name = "timesheet_id", referencedColumnName = "id")
    private Set<Timesheet> timesheets;
}