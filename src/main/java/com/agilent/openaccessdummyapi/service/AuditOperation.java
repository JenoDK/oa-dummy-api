package com.agilent.openaccessdummyapi.service;

public enum AuditOperation {
	ADD("#C8E7AE"),
	UPDATE("#FFE399"),
	REMOVE("#FEBAAF");

	private String color;
	AuditOperation(String color) {
		this.color = color;
	}

	public String getColor() {
		return color;
	}
}
