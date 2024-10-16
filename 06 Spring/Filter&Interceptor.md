# Filter & Interceptor

## Listener & Filter

### Listener란?

- 프로그래밍에서 Listener란 특정 이벤트가 발생하기를 기다리다가 실행되는 객체
- 이벤트란? 특정한 사건 발생
    
    EX) 버튼 클릭, 키보드 입력, 컨테이너 빌드 완료, 웹 어플리케이션 시작, HTTP 요청 수신 등등
    
- 서블릿 컨테이너에서 발생하는 이벤트 감지
- web.xml 파일에 <listener> 태그를 이용하여 사용 가능
- 리스너가 여러 개일 경우 보통 선언된 순서대로 실행되지만 아닌 경우가 있으므로 각각의 리스너는 독립적으로 동작할 수 있도록 설계 하는 것이 좋음

### Filter

- **요청과 응답 데이터를 필터링하여 제어, 변경하는 역할**
- 사용자의 요청이 Servlet에 **전달되어지기 전**에 Filter를 거침
- Servlet으로부터 응답이 사용자에게 **전달되어지기 전**에 Filter를 거침
- **FilterChain**을 통해 연쇄적으로 동작 가능

## Interceptor

### Interceptor

- `HandlerInterceptor`를 구현한 것
- 요청(request)을 처리하는 과정에서 요청을 가로채서 처리
- 접근 제어 (Auth), 로그 (Log) 등 비즈니스 로직과 구분되는 반복적이고 부수적인 로직 처리
- `HandlerIntercepter`의 주요 메서드
    - `preHandle()`
        
        ```java
        @Override
        public boolean preHandle(HttpServletRequst request, HttpServletResponse response, Object handler) throws Exception{
        - Controller(핸들러) 실행 이전에 호출
        - true를 반환하면 계속 진행
        - false를 반환하면 요청 종료
        ```
        
    - `postHandle()`
        
        ```java
        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exeception{
        - Controller(핸들러) 실행 후 호출
        - 정상 실행 후 추가 기능 구현 시 사용
        - Controller에서 예외 발생 시 해당 메서드는 실행되지 않음 
        ```
        
    - `afterComplection()`
        
        ```java
        @Override
        public void afterComplection(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception{
        - 뷰가 클라이언트에게 응답을 전송한 뒤 실행
        - Controller에서 예외 발생 시, 네 번째 파라미터로 전달 (기본은 null)
        - 따라서 Controller에서 발생한 예외 혹은 실행 시간 같은 것들을 기록하는 등 후처리시 주로 사용
        ```