package com.agilent.openaccessdummyapi.dto;

import java.util.List;

public record Workflow(String id, String name, Object project, Measurement injectionVolume, Object acquisitionMethod, Object processingMethod, Object equilibrationMethod, Object shutdownMethod) {
}
