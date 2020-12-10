package com.algaworks.localidades;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.mvc.method.annotation.AbstractMappingJacksonResponseBodyAdvice;

@SpringBootApplication
public class LocalidadesApplication {

	public static void main(String[] args) {
		SpringApplication.run(LocalidadesApplication.class, args);
	}
	
	@CrossOrigin
	@ControllerAdvice
    static class JsonpAdvice extends AbstractMappingJacksonResponseBodyAdvice {
        public JsonpAdvice() {
            super();
        }

		@Override
		protected void beforeBodyWriteInternal(MappingJacksonValue bodyContainer, MediaType contentType,
				MethodParameter returnType, ServerHttpRequest request, ServerHttpResponse response) {
			// TODO Auto-generated method stub
			
		}
    }

}
