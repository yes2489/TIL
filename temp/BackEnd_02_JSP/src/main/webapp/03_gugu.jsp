<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>구구단 출력</title>
</head>
<body>
	<h2>구구단1</h2>
	<% 
		for (int i = 2; i < 10; i++){
			for (int j = 1; j < 10; j++){
				out.print(i+"*"+j+"="+(i*j));
				/* out.print("<br/>"); */
				
				%>
				
				<br>
				
				<%
			}
		}
	
	
	%>
	
	<a href="index.html">홈으로</a>
</body>
</html>