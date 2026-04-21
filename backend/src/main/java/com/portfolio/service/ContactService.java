package com.portfolio.service;

import com.portfolio.dto.ContactRequestDto;
import com.portfolio.model.Contact;
import com.portfolio.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;

    @Transactional
    public void submit(ContactRequestDto dto) {
        Contact contact = Contact.builder()
            .name(dto.getName())
            .email(dto.getEmail())
            .subject(dto.getSubject())
            .message(dto.getMessage())
            .read(false)
            .build();

        contactRepository.save(contact);
        log.info("New contact form submission from: {} <{}>", dto.getName(), dto.getEmail());
    }
}
