## JSP (Java Server Pages)

### JSP

- Servlet 표준을 기반으로 작성된 웹 어플리케이션 개발 언어
- HTML 내에 Java를 작성하여 동적으로 웹페이지를 생성하여 브라우저에게 돌려주는 페이지
- 실행 시 Servlet으로 변환된 후 실행

### JSP 구성 요소

- 지시자 (Directive)
    - JSP 페이지에 대한 설정 정보를 지정하기 위해 사용
- 스크립트 요소 : 스크립트릿(Scriptlet), 표현식 (Expression), 선언부 (Declaration)
    - JSP에서 문서의 내용을 동적으로 생성하기 위해서 사용
- JSP 기본객체
    - 요청 및 응답 관련 정보를 얻거나, 응답 결과를 만들기 위해서 사용
- 표현 언어(Expression Language)
    - JSP를 좀 더 간결하게 작성하기 위해 사용
- Action  Tag와 JSTL
    - 자주 사용하는 기능을 모아 미리 정의하여 Tag형태로 작성
    - JSP에서 자바코드를 쉽게 작성할 수 있도록 사용

## JSP 기본 태그

### JSP 태그 종류

| 종류 | 사용 용도 | 형식 |
| --- | --- | --- |
| 스크립트릿(scriptlet) | 자바코드 작성 | <% %> |
| 선언 (declaration) | 변수와 메소드를 선언 | <%! %> |
| 표현식 (expression) | 계산식이나 함수를 호출한 **결과**를 **문자열 형태**로 출력 | <%= %> |
| 주석 (comment) | JSP 페이지 설명 작성 | <%-- --%> |
| 지시자 (directive) | JSP 페이지 속성 지정 | <%@ %> |

### 스크립트릿 (Scriptlet) `<% %>`

- 스크립팅 언어(java)로 작성된 코드 조각을 포함하는데 사용
- Servlet으로 변환될 때 service  메서드 안에 선언되는 부분

```java
<%
	// 자바코드 작성
	int A = 10;
	int B = 20;
	
	int sum = A + B;
	
	out.print(A+" + "+B+" = "+sum);
%> 

=> <text> 10 + 20 = 30</text>
```

### 선언부 (Declaration) `<%! %>`

- 멤버변수 선언이나 메서드를 선언하는 영역
- 선언부는 Servlet으로 변환될 때 클래스 영역에 들어감

```java
<%!
	// 변수 선언
	// 메서드 선언
%>
```

### 주석문 (Comment) `<%-- --%>`

- 작성한 코드에 대한 설명을 기술할 경우 사용
- HTML 주석문과 동일한 기능을 하지만 HTML 주석문은 클라이언트에게 보여지고, JSP 주석문은 보여지지 않음

```java
<!-- HTML 주석은 클라이언트에게 보여짐 -->
<%-- JSP 주석은 Servlet으로 변환 시에 사라짐 --%>
// java 주석도 사용 가능 -> Servlet으로 변환 시, 그대로 java 주석으로 남아있음
```

### 지시자 (Directive) `<%@ 지시자 속성 = "값" %>`

- 웹 컨테이너(Tomcat)가 JSP 번역하고 실행하는 방법을 서술
- page : 해당 JSP 페이지 전반적으로 환경을 설정할 내용 지정
- include : 현재 페이지에 다른 파일의 내용을 삽입할 때 사용
- taglib : 태그 라이브러리에서 태그를 사용할 수 있는 기능 제공

**page**

- JSP 페이지 실행 매개변수를 제어
- 출력처리, 오류처리 등의 내용을 포함
    
    ```java
    <%@ page language="java" contentType="text/html; charset=UTF-8" 
    	pageEncoding="UTF-8"%>
    ```
    
    - errorPage - JSP 실행 중 에러 발생 시 출력할 페이지 지정
    - isErrorPage - 에러가 발생했을 때 보여줄 페이지인지 지정

**include**

- JSP 내에 다른 HTML 문서나 JSP 페이지의 내용을 삽입할 때 사용
- 반복적으로 사용되는 부분 (header, footer 등) 별도로 작성하여 페이지 내에 삽입하면 반복되는 코드의 재작성을 줄일 수 있음
    
    ```java
    <%@ include file="/template/header.jsp" %>
    ```
    

**taglib**

- JSTL 또는 사용자가 작성한 커스텀 태그를 사용할 때 작성
- 불필요한 자바코드를 줄일 수 있음
    
    ```java
    <%@ taglib prefix="c" uri="jakarta.tags.core" %>
    ```
    

## 페이지 이동

### 포워드 방식

- 요청이 들어오면 요청을 받은 JSP 또는 Servlet이 직접 응답을 작성하지 않고, 요청을 서버 내부에서 전달하여 해당 요청을 처리하게 하는 방식
- 동작 방식
    1. 클라이언트 → 서버에 요청 전송
    2. 서버 → 클라이언트에 응답을 보내지 않고, 내부적으로 다른 JSP나 Servlet으로 요청을 전달
    3. 서버 내부에서 전달받은 JSP나 Servlet이 요청을 처리하고 응답을 준비
    4. 서버 → 클라이언트에 최종 응답 전송 (이때 클라이언트는 내부적으로 다른 페이지로 포워드된 것을 알 수 없음)
    - HTTP 상태코드 200 OK 응답 전송
    
    ```java
    RequestDispatcher disp = request.getRequestDispatcher("이동할 페이지");
    disp.forward(request, response);
    ```
    

### 리다이렉트 방식 (HTTP 상태 코드 302)

- 요청이 들어오면 내부 로직 실행 후, **브라우저의 URL을 변경**하도록 하여 **새로운 요청**을 생성함으로써 페이지를 이동
- 동작 방식
    1. 클라이언트 → 서버에 요청 전송
    2. 서버 → 클라이언트에 302 상태 코드와 함께 새로운 URL로 재요청 보내라는 응답 전송
    3. 클라이언트 → 서버로 받은 새로운 URL로 다시 요청 전송
    4. 서버 → 새로운 URL에 해당하는 페이지를 처리하여 클라이언트에 응답 전송
    
    ```java
    response.sendRedirection("location");
    ```