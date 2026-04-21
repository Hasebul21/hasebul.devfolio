package com.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContactRequestDto {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 200, message = "Name must be 2–200 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email address")
    @Size(max = 320)
    private String email;

    @NotBlank(message = "Subject is required")
    @Size(min = 5, max = 300, message = "Subject must be 5–300 characters")
    private String subject;

    @NotBlank(message = "Message is required")
    @Size(min = 20, max = 5000, message = "Message must be 20–5000 characters")
    private String message;
}
