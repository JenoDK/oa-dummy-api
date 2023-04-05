package com.agilent.openaccessdummyapi.controller;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.agilent.openaccessdummyapi.dto.AuditEntry;
import com.agilent.openaccessdummyapi.service.AuditService;

@Controller
@RequestMapping("audit")
public class OpenAccessAuditController {

	private static final Logger LOGGER = LoggerFactory.getLogger(OpenAccessAuditController.class);

	private final AuditService auditService;

	public OpenAccessAuditController(AuditService auditService) {
		this.auditService = auditService;
	}

	@GetMapping
	public ResponseEntity<List<AuditEntry>> getAll() {
		return ResponseEntity.ok().body(auditService.getAuditEntries());
	}

}
