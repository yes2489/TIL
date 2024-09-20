package com.ssafy.practice;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/main")
public class MainServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;characterset=UTF-8");
		doProcess(req, resp);
	}// 구구단
	
	

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}// 등록
	
	private void doProcess(HttpServletRequest req, HttpServletResponse resp) {
		String action = req.getParameter("action");
		switch (action) {
		case "regist" :
			// 등록하는 작업 (메서드로 빼서 사용가능)
			// 인간에 대한 정보가 요청통로 안에 몽땅 들어있음 (dto)
			
			
			break;
		case "gugu":
			// 구구단을 하는 작업 (메서드로 빼서 사용가능)
			break;
		}
		
		
	}
	
}
