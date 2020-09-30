package com.devcamp.loggingsystem.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.security.SecurityScheme.Type;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

/**
 * Configures open API Bearer authorization in the swagger ui
 *
 * @author Metodi Vladimirov
 */
public class SecurityOpenApiConfiguration {

    private final String appVersion;

    private final String appDescription;

    public SecurityOpenApiConfiguration(@Value("${app-version}") String appVersion,
                                @Value("${app-description}") String appDescription) {
        this.appVersion = appVersion;
        this.appDescription = appDescription;
    }

    @Bean
    public OpenAPI customOpenAPi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Logging System")
                        .version(appVersion)
                        .description(appDescription)
                        .termsOfService("http://swagger.io/terms/")
                        .license(new License().name("Apache 2.0")
                                .url("http://springdoc.org")))
                .components(new Components()
                        .addSecuritySchemes("bearer-key",
                                new SecurityScheme()
                                        .type(Type.HTTP)
                                        .scheme("bearer").bearerFormat("JWT")));
    }
}
