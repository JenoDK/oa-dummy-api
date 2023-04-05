package com.agilent.openaccessdummyapi.dto;

import java.util.List;

public record Injection(String sample_name, String vial, Object workflow, Object instrument, boolean single_injection, List<Object> targets, Integer total_injections, Integer current_injection) {
}
