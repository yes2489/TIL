<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%! int count1 = 0; %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>호출</title>
</head>
<body>
<% 
	int count2 = 0;

	out.print("count1: "+(count1++)+"<br>"); // Servlet의 Life-Cycle을 생각해보면 답이 나옴!
	out.print("count2: "+(count2++)+"<br>");
%>
	<a href="index.html">홈으로</a>
</body>
</html>