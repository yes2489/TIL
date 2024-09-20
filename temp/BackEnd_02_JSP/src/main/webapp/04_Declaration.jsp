<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%!
	// 선언부는 Servlet으로 변환될 때 클래스 영역에 들어감
	
	// 변수 선언
	int A = 10;
	int B = 20;
	
	String name = "SSAFY";
	
	// 메서드 선언
	
	public int add(int A, int B){
		return A+B;
	}
	
	public int abs(int A){
		return A > 0? A : -A;
	}

%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>선언부</title>
</head>
<body>
	<%
		int C = -10;
		
		// 이 곳에 메서드를 정의? 불가 -> 왜냐? service 메서드 안에 선언되기 때문
		// 메서드 안의 메서드? 불가.
	
		out.print(add(A, B)); // 나옴~~!
		out.print("<br/>");
		
		out.print(abs(C));
		out.print("<br/>");
		
	%>
	<a href="index.html">홈으로</a>
</body>
</html>