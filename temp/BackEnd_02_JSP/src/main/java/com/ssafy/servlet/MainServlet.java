package com.ssafy.servlet;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.ssafy.dto.Person;
import com.ssafy.manager.PersonManager;

@WebServlet("/main")
public class MainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String act = req.getParameter("act");
		
		switch (act) {
		case "regist": {
			doRegist(req, resp);
			break;
			}
		}
	}

	private void doRegist(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String name = req.getParameter("name");
		int age = Integer.valueOf(req.getParameter("age"));
		String gender = req.getParameter("gender");
		String[] hobbies = req.getParameterValues("hobby");
		
		Person p = new Person(name, age, gender, hobbies);
		
		PersonManager.getInstance().regist(p); // PersonManager에 p를 넣어버림
		
		req.setAttribute("person", p); // Key, Value의 형태로 속성을 삽입할 수 있음
		
		// 포워드 방식으로 요청이랑 응답 보내버림
		RequestDispatcher disp = req.getRequestDispatcher("/12_result.jsp");
		disp.forward(req, resp);
		
//		resp.sendRedirect("/12_result.jsp"); // 포워드방식, 리다이렉트 방식에서 '/' 처리 방식 확인
		
	}
	
}
