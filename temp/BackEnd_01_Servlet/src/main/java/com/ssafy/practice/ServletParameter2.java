package com.ssafy.practice;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ServletParameter
 */
public class ServletParameter2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    //form_03_input.html 데이터를 받아서 출력
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("GET");
		
		String text = req.getParameter("text");
		
		System.out.println(text);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("POST");
		String text = req.getParameter("text");
		System.out.println(text);
	}
}
