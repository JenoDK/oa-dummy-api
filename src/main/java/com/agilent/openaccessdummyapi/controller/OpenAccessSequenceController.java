package com.agilent.openaccessdummyapi.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.agilent.openaccessdummyapi.dto.Sequence;
import com.agilent.openaccessdummyapi.service.AuditOperation;
import com.agilent.openaccessdummyapi.service.AuditService;

@Controller
@RequestMapping("sequence")
public class OpenAccessSequenceController {

	private static final Logger LOGGER = LoggerFactory.getLogger(OpenAccessSequenceController.class);

	private final AuditService auditService;

	public OpenAccessSequenceController(AuditService auditService) {
		this.auditService = auditService;
	}

	@PostMapping
	public ResponseEntity<Sequence> submitSequence(@RequestBody Sequence sequence) {
		if ("wrong".equals(sequence.sequence_name())) {
			throw new OpenAccessValidationException("Invalid value for sequence name!");
		}
		auditService.addAuditEntry("Sequence was sumitted", AuditOperation.ADD, sequence);
		LOGGER.info("Sequence submitted: {}", sequence);
		return ResponseEntity.ok().body(sequence);
	}

}
