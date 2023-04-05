package com.agilent.openaccessdummyapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.agilent.openaccessdummyapi.controller.payload.Configuration;
import com.agilent.openaccessdummyapi.service.AuditOperation;
import com.agilent.openaccessdummyapi.service.AuditService;

@Controller
@RequestMapping("configuration")
public class OpenAccessConfigController {

	private static Configuration configuration = new Configuration(300, "https://sch-2019a.germany.agilent.com:52088/openlab/olss", 6000);

	@Autowired
	private AuditService auditService;

	@GetMapping
	public ResponseEntity<Configuration> getConfig() {
		return ResponseEntity.ok().body(configuration);
	}

	@PostMapping
	public ResponseEntity<Configuration> setConfig(@RequestBody Configuration newConfig) {
		configuration = newConfig;
		auditService.addAuditEntry("Configuration saved", AuditOperation.UPDATE, newConfig);
		return ResponseEntity.ok().body(configuration);
	}

}
