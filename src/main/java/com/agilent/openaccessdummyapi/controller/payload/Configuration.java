package com.agilent.openaccessdummyapi.controller.payload;

public record Configuration(Integer token_expiry_seconds, String olss_api_url, Integer olss_api_connectionTimeout_millis) {
}
