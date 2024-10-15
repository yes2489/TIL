## Servlet

### Servlet

- Server  + Applet의 합성어
- Java 언어로 작성된 WAS의 서버 측 프로그램
- **웹페이지를 동적으로 생성**하기 위한 Java 기반의 프로그램 컴포넌트
    
    → 반복되는 공통 작업을(HTTP Request & Response) 수행하는 컴포넌트
    
- Servlet은 Java 코드 안에 HTML을 포함

### Servlet 등록방법 (web.xml)

1. web.xml에 직접 등록

```java
  <servlet>
  	<servlet-name>MyServlet4</servlet-name> //변수명
  	<servlet-class>com.ssafy.myservlet.MyServlet4</servlet-class> // 풀 패키지 명을 적어야 함
  </servlet>
  
  <servlet-mapping>
  	<servlet-name>MyServlet4</servlet-name>
  	<url-pattern>/MyServlet</url-pattern> // 경로지정 (but, 하나의 경로에는 하나의 서블릿. 하나의 서블릿은 여러개의 경로를 가질 수 있음)
  </servlet-mapping>
```

1. @로 등록

```java
@WebServlet("URL")
```

### Servlet 생명주기 (Life-Cycle)

- Servlet 인스턴스는 **웹 컨테이너**에 의해 제어
- Servelet 인스턴스가 존재하지 않으면 아래의 작업을 수행
    1. Servlet 클래스 로드
    2. Servlet 클래스 인스턴스 생성
    3. Servlet 인스턴스 초기화
    4. 웹 컨테이너에 의한 서비스 메서드 호출
    5. destroy 메서드를 호출하여 Servlet 종료
    - 서비스 메서드는 요청이 들어올 때 마다 호출
    - Servlet은 **싱글턴**으로 만들어짐
- Life-Cycle 메서드
    - `doGet`, `doPost`, `init`, `destroy` 등이 있음

### URI, URL, URN

- URI (Uniform Resource Identifier)
    - **통합 자원 식별자**
    - 인터넷 상의 자원을 고유하게 식별하는데 사용
    - URL과 URN을 포함하는 상위 개념
- URL (Uniform Resource Locator)
    - **통합 자원 위치** (≒ 도로명 주소)
    - 자원의 위치를 나타내는데 사용
- URN (Uniform Resource Name)
    - **통합 자원 이름**
    - 자원에 대한 고유한 이름을 제공 (≒ ISBN)

### URL 구성 요소

https://www.google.com/search?q=test   

<table>
    <tr>
        <th>구성 요소</th>
        <th>설명</th>
    </tr>
    <tr>
        <td>프로토콜</td>
        <td>절차를 포함한 통신규약</td>
    </tr>
    <tr>
        <td>서버</td>
        <td>웹 페이지를 요청할 서버의 주소, 실제 IP 주소나 도메인을 입력할 수 있음</td>
    </tr>
    <tr>
        <td>경로</td>
        <td>서버 내의 상세 경로</td>
    </tr>
    <tr>
        <td>쿼리 스트링</td>
        <td>추가로 서버로 데이터를 전송하기 위해 사용<br>
        ‘?’ 마크를 적어 시작을 표시함. Parameter Name = value 형태로 작성하며,<br>
        파라미터가 여러 개 일 경우 ‘&’로 구분하여 작성</td>
    </tr>
</table>

### GET 과 POST

<table>
    <tr>
        <th>GET</th>
        <th>POST</th>
    </tr>
    <tr>
        <td>저장된 리소스에서 데이터를 요청하는 데 사용</td>
        <td>리소스를 생성/업데이트 하기 위해 서버에 데이터를 보내는데 사용</td>
    </tr>
    <tr>
        <td>query string(name/value쌍)이  URL에 포함되어 전송됨.<br>
            POST와 비교하여 보안에 취약</td>
        <td>HTTP header의 body에 파라미터를 포함하여 전송<br>
            데이터 길이에 대한 제한 없음<br>
            매개변수가 브라우저나 웹 서버에 저장되지 않음</td>
    </tr>
    <tr>
        <td>URL이 길이 제한이 있으므로, 전송가능한 데이터의 길이가 제한적<br>
        (URL maximum characters : 2048)<br>
        ASCII 문자만 가능</td>
        <td>제한 없음. 바이너리 데이터도 허용</td>
    </tr>
</table>

### Servlet 요청과 응답 (Front Controller)

- 웹에서 발생하는 모든 HTTP 요청에 대해 특정 Servlet이 호출되어 해당 요청을 처리하고, 응답을 클라이언트에게 반환함
- Front Controller 패턴을 사용하여 **모든 클라이언트의 요청**을 **하나의 중앙 컨트롤러 Servlet이 처리**하고, 이후 요청을 적절한 다른 컴포넌트로 전달하는 역할을 함
    
    → 요청 처리 로직을 중앙에서 관리하고 중복을 줄일 수 있음
    
- Front Controller는 주로 요청을 필터링하고, 적절한 서비스나 처리기로 분기하는 역할을 함
