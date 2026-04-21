package com.portfolio.controller;

import com.portfolio.dto.ApiResponse;
import com.portfolio.dto.ContactRequestDto;
import com.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    /** POST /api/contact */
    @PostMapping
    public ResponseEntity<ApiResponse<Void>> submit(@Valid @RequestBody ContactRequestDto dto) {
        contactService.submit(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(new ApiResponse<>(true, "Your message was sent successfully!", null));
    }
}
