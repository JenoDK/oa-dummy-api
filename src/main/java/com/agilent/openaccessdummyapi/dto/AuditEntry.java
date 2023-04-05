package com.agilent.openaccessdummyapi.dto;

/**
 * An entry in the audit trail
 * @param id A GUID which is used to uniquely identify the Audit Trail entry in the entire system.
 * @param creatorId A GUID to uniquely identify the creator associated with the Audit Trail entry.
 * @param creatorUsername The username of the user whose actions resulted in the creation of this Audit Trail entry.
 * @param projectId A GUID to uniquely identify the project associated with the Audit Trail entry.
 * @param projectName The non-unique project name in which the context for the Audit Trail exists.
 * @param reason The reason for change that was specified by the user when saving the change.
 * @param category The application-defined category for the Audit Trail entry which describes the kind of action/change being recorded by the entry.
 * @param description The main, descriptive text for the Audit Trail entry.
 * @param customData The data which represents custom information to be stored along side the entry. This can be a subset of the context's data for example. Will be deserialized to JSON in the response
 * @param createdAt The date and time at which the Audit Trail entry was written. This will be returned in UTC.
 */
public record AuditEntry(String id, String creatorId, String creatorUsername, String projectId, String projectName, String reason, String category, String description, Object customData, String rowColor, String createdAt) {
}
