package com.agilent.openaccessdummyapi.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.agilent.openaccessdummyapi.dto.Injection;
import com.agilent.openaccessdummyapi.service.AuditOperation;
import com.agilent.openaccessdummyapi.service.AuditService;

@Controller
@RequestMapping("v1/sample")
public class OpenAccessInjectionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(OpenAccessInjectionController.class);

	@Autowired
	private AuditService auditService;

	@PostMapping
	public ResponseEntity<Injection> performInjection(@RequestBody Injection injection) {
		if ("wrong".equals(injection.sample_name())) {
			throw new OpenAccessValidationException("Invalid value for sample name!");
		}
		auditService.addAuditEntry("Injection submitted", AuditOperation.ADD, injection);
		LOGGER.info("Injection submitted: {}", injection);
		return ResponseEntity.ok().body(injection);
	}

}
