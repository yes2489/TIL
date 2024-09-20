package com.ssafy.myservlet;

import java.io.IOException;

import jakarta.servlet.Servlet;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

public class MyServlet1 implements Servlet{

	@Override
	public void destroy() {
		// servlet 소멸할 때 동작
		
	}

	@Override
	public ServletConfig getServletConfig() {
		// servlet 설정 객체 반환
		return null;
	}

	@Override
	public String getServletInfo() {
		// servlet 정보를 문자열의 형태로 반환
		return null;
	}

	@Override
	public void init(ServletConfig arg0) throws ServletException {
		// servlet 초기화
		
	}

	@Override
	public void service(ServletRequest arg0, ServletResponse arg1) throws ServletException, IOException {
		// 요청과 응답 처리
		
	}

}
