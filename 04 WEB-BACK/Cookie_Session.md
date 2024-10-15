# Cookie & Session

- [HTTP](#HTTP)
- [Cookie](#Cookie)
- [JSP_Scope](#jsp-기본-객체-영역)
- [Session](#Session)

## HTTP

### HTTP(Hyper Text Transfer Protocol)

- 웹 서버와 웹 브라우저 간의 통신에 사용
- HTML, IMAGE, VIDEO, JSON 등의 다양한 데이터 전송 가능
- 기본 포트 번호 : 80
- 보안 버전의 HTTPS(Hyper Text Transfer Protocol)
- 클라이언트 - 서버 구조

### HTTP (Hyper Text Transfer Protocol) 특징

- 비연결성 (Connectionless)
    - 지속적인 연결 유지로 인한 자원 낭비 방지를 위해 연결 해제
    - 서버의 자원을 효율적으로 사용할 수 있음
- 무 상태 (Stateless)
    - 서버가 클라이언트의 상태를 저장하지 않음
    - 클라이언트의 상태를 알 수 없기 때문에 추가적인 데이터 전송이 필요함
    - 응답 서버를 쉽게 바꿀 수 있음
    - 브라우저 쿠키 or 서버 세션 등을 이용하여 상태 유지

## Cookie

### Cookie

- 웹 서버가 클라이언트의 웹 브라우저에 저장하는 작은 데이터 조각
- 필요에 따라 요청(request) 시 서버로 같이 전송
- Key : Value 형태의 문자열 데이터
- 웹 브라우저 (클라이언트) 별로 별도의 쿠키 생성 (브라우저가 다르다면 다른 사용자)

### Cookie 사용 목적

- 세션 관리 (사용자 아이디, 장바구니 등)를 위해 사용
- 사용자가 설정한 환경 등을 기억하여 페이지 제공
- 사용자의 행동과 패턴을 분석
- 사용자의 관심에 따른 광고를 타겟팅 하기 위해 사용

### Cookie 동작 순서

- Client가 요청 생성
- WAS는 Cookie를 저장, 해당 서버에 요청할 때 요청과 함께 Cookie를 전송
- Client는 Cookie를 저장, 해당 서버에 요청할 때 요청과 함께 Cookie를 전송
- Cookie는 브라우저가 종료되더라도 계속 저장되기 때문에 (만료 기간 전까지) 동일 사이트 재 방문하여 요청시 필요에 따라 Cookie가 재 전송 됨

### Cookie 특징

- 이름(key), 값(Value), 만료일(Expire date), 도메인 경로(path) 등으로 구성
- 클라이언트에 최대 300개의 쿠키를 저장할 수 있음
- 하나의 도메인 당 20개의 쿠키를 저장
- 쿠키 하나당 4KB 제한

### Cookie 주요 메서드

| 메서드 | 설명 |
| --- | --- |
| void setComment(String comment) | 쿠키에 대한 설명 설정 |
| void setDomain(String domain) | 쿠키의 유효한 도메인 설정 |
| void setMaxAge(int expiry) | 쿠키 유효기간 설정 (초단위) |
| void setPath(String path) | 쿠키 유효 디렉토리 설정 |
| void setValue(String value) | 쿠키 값 설정 |
| String getComment() | 쿠키 설명 반환 |
| String getDomain() | 쿠키 유효 도메인 반환 |
| int getMaxAge() | 쿠키 유효기간 반환 |
| String getPath() | 쿠키 유효 디렉토리 반환 |
| String getValue() | 쿠키 값 반환 |

## JSP 기본 객체 영역

### JSP 기본 객체 영역 (Scope)

- Page 영역 (Page Context) - 하나의 페이지 정보를 담고 있는 영역, 페이지가 바뀌면 새로운 객체가 생성됨
- Request (request) - 하나의 요청을 처리할 때 사용되는 영역, 응답이 완료되면 사라짐
- Session 영역 (Session) - 하나의 웹 브라우저와 관련된 영역, 로그인 정보 등을 저장
- Application 영역- 웹 어플리케이션 영역, 어플리케이션이 시작되면 종료될 때 까지 유지

### JSP 기본 객체 영역 (Scope) 메서드

- servlet과 페이지 간 정보를 공유하기 위해서 메서드를 지원
<table>
    <thead>
        <tr>
            <th>메서드</th>
            <th>반환형</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>setAttribute(String name, Object value)</td>
            <td>void</td>
            <td>key-value 형태로 각 영역에 데이터를 저장<br>
            name이 value를 얻어오기 위한 key가 됨</td>
        </tr>
        <tr>
            <td>getAttribute(String name)</td>
            <td>Object</td>
            <td>현재 객체에서 인자로 받은 이름으로 설정된 값을 반환</td>
        </tr>
        <tr>
            <td>getAttributeNames()</td>
            <td>Enumeration</td>
            <td>현재 객체에서 설정된 값의 모든 속성의 이름을 반환</td>
        </tr>
        <tr>
            <td>removeAttribute(String name)</td>
            <td>void</td>
            <td>현재 객체에서 인자로 받은 이름으로 설정된 값을 삭제</td>
        </tr>
    </tbody>
</table>

## Session

### Session

- 사용자가 웹 서버에 접속해 있는 상태를 하나의 단위보고 세션이라고 함
- 각 세션은 sessionid를 이용해 구분
- WAS의 메모리에 객체 형태로 저장
- 메모리가 허용하는 용량까지 제한 없이 저장 가능
- 쿠키는 클라이언트에 저장되기 때문에 공유 PC의 경우 보안에 취약할 수 있음. But 세션은 서버에 저장되기 때문에 쿠키에 비해 보안이 좋음
- 사용자(로그인)정보 및 장바구니 등에 사용

### HttpSession 주요 메서드

| 메서드 | 설명 |
| --- | --- |
| void setAttribute(String name, Object value) | session에 지정한 name에 해당하는 객체를 추가 |
| void getAttribute(String name) | name에 해당하는 속성값 반환, 반환형이 Object임에 유의 |
| void invalidate() | 현재 세션을 없애고, 속성도 삭제 |
| void removeAttribute(String name) | 세션에서 지정한 이름의 객체를 제거 |
| void setMaxInactiveInterval(int interval) | 사용자가 다음 요청을 보낼 때 까지 세션을 유지하는 최대시간 (초단위)를 설정 |