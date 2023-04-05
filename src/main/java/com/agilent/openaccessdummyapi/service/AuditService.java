package com.agilent.openaccessdummyapi.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Component;

import com.agilent.openaccessdummyapi.dto.AuditEntry;

@Component
public class AuditService {

	private List<AuditEntry> auditEntries = new ArrayList<>();

	public void addAuditEntry(String description, AuditOperation operation, Object data) {
		this.auditEntries.add(new AuditEntry(
				UUID.randomUUID().toString(),
				"olssToken",
				"olssUsername",
				"",
				"",
				"",
				"",
				description,
				data,
				operation.getColor(),
				Instant.now().toString()
		));
	}

	public List<AuditEntry> getAuditEntries() {
		return auditEntries;
	}
}
