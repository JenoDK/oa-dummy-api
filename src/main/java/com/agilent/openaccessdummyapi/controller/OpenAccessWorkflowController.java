package com.agilent.openaccessdummyapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.agilent.openaccessdummyapi.dto.Workflow;
import com.agilent.openaccessdummyapi.service.AuditOperation;
import com.agilent.openaccessdummyapi.service.AuditService;

@Controller
@RequestMapping("workflow")
public class OpenAccessWorkflowController {

	private static final Logger LOGGER = LoggerFactory.getLogger(OpenAccessWorkflowController.class);

	public static List<Workflow> workflows = new ArrayList<>();

	private final AuditService auditService;

	public OpenAccessWorkflowController(AuditService auditService) {
		this.auditService = auditService;
	}

	@PostMapping
	public ResponseEntity<Workflow> saveWorkflow(@RequestBody Workflow workflow) {
		return saveOrUpdateWorkflow(workflow);
	}

	@PutMapping
	public ResponseEntity<Workflow> updateWorkflow(@RequestBody Workflow workflow) {
		return saveOrUpdateWorkflow(workflow);
	}

	private ResponseEntity<Workflow> saveOrUpdateWorkflow(Workflow workflow) {
		if ("no".equals(workflow.name())) {
			throw new OpenAccessValidationException("Invalid workflow name!");
		}
		if (workflow.id() == null) {
			Workflow newWorkflow = new Workflow(UUID.randomUUID().toString(), workflow.name(), workflow.project(), workflow.injectionVolume(), workflow.acquisitionMethod(), workflow.processingMethod(), workflow.equilibrationMethod(), workflow.shutdownMethod());
			workflows.add(newWorkflow);
			LOGGER.info("Added new workflow {}", newWorkflow);
			auditService.addAuditEntry("New workflow added", AuditOperation.ADD, newWorkflow);
			return ResponseEntity.ok().body(newWorkflow);
		} else {
			Optional<Workflow> workflowOptional = workflows.stream()
					.filter(w -> w.id().equals(workflow.id()))
					.findFirst();
			if (workflowOptional.isPresent()) {
				int indexToReplace = workflows.indexOf(workflowOptional.get());
				workflows.set(indexToReplace, workflow);
			}
			LOGGER.info("Edited existing workflow {}", workflow);
			auditService.addAuditEntry("Workflow updated", AuditOperation.UPDATE, workflow);
			return ResponseEntity.ok().body(workflow);
		}
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> deteleWorkflow(@PathVariable String id) {
		Optional<Workflow> workflowToDelete = workflows.stream().filter(w -> w.id().equals(id)).findFirst();
		if (workflowToDelete.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		workflows.remove(workflowToDelete.get());
		auditService.addAuditEntry("Workflow removed", AuditOperation.REMOVE, workflowToDelete.get());
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<Workflow>> getAllWorkflows() {
		return ResponseEntity.ok().body(workflows);
	}

}
