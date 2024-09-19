package com.gallery.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class DomainWebConfig {
    @Value("${domainWeb.domainName}")
    private String domainName;
}
