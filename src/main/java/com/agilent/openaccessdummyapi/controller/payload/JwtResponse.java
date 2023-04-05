package com.agilent.openaccessdummyapi.controller.payload;

import java.util.List;

public record JwtResponse(String accessToken, String username, List<String> roles) {
}
