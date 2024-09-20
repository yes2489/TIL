<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!
	// 선언부는 Servlet으로 변환될 때 클래스 영역에 들어감
	
	// 변수 선언
	int A = 10;
	int B = -20;
	
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
<title>표현식</title>
</head>
<body>
	<%-- '<%= %>' : 변수, 수식, 메서드 호출 시 사용 --%>
	<%= name %><br> <%-- out.print(name)과 동일 --%>
	<%= A+B %><br>
	<%= abs(B) %><br>
	<a href="index.html">홈으로</a>
</body>
</html>