package com.agilent.openaccessdummyapi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class OpenAccessExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler({ OpenAccessValidationException.class })
	public ResponseEntity<String> handleValidationException(OpenAccessValidationException ex, WebRequest request) {
		return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex.getMessage());
	}

}
