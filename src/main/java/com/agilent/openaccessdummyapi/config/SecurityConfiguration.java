package com.agilent.openaccessdummyapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import com.agilent.openaccessdummyapi.jwt.JwtAuthTokenFilter;
import com.agilent.openaccessdummyapi.jwt.JwtExceptionEntryPoint;

@Configuration
public class SecurityConfiguration {

	@Bean
	public JwtAuthTokenFilter authenticationJwtTokenFilter() {
		return new JwtAuthTokenFilter();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(users());
		return authProvider;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http, JwtExceptionEntryPoint jwtExceptionEntryPoint) throws Exception {
		http.cors().and().csrf().disable()
				.exceptionHandling().authenticationEntryPoint(jwtExceptionEntryPoint).and()
//				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authorizeHttpRequests()
//				.requestMatchers("/auth/**").permitAll()
//				.requestMatchers("/test/**").permitAll()
				.requestMatchers("/**").permitAll()
				.anyRequest().authenticated();
		return http.build();
	}

	@Bean
	public UserDetailsService users() {
		User.UserBuilder users = User.withDefaultPasswordEncoder();
		UserDetails user = users
				.username("user")
				.password("user")
				.roles("USER")
				.build();
		UserDetails admin = users
				.username("admin")
				.password("admin")
				.roles("USER", "ADMIN")
				.build();
		return new InMemoryUserDetailsManager(user, admin);
	}
}
