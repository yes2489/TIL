# JDBC

## JDBC

### JDBC란?

- Java 프로그램에서 DB에 일관된 방식으로 접근할 수 있도록 API를 제공하는 클래스의 집합
- 데이터베이스에서 자료를 쿼리하거나 업데이트 하는 방법을 제공
- Java에서는 JDBC를 이용하여 SQL을 DBMS와 주고받음
- DBMS의 종류에 관계없이 사용 가능 (약간의 설정만 조금 수정하면 가능)

### JDBC를 이용하여 DB를 연결하는 방법 4단계

1. JDBC 드라이버 로드 (DBMS와 연관)
2. 데이터베이스 연결
3. SQL문 실행
4. 데이터베이스 연결 끊음

### JDBC 드라이버 로드

- DB와 연결하기 위해서는 사용할 JDBC 드라이버를 프로그램 시작할 때 로딩
- 필요한  DBMS의 jar파일을 프로젝트에 추가
- java.lang.Class 클래스의 정적 메소드 `forName()`을 이용하여 JVM 안으로 클래스를 메모리에 적재
- `DriverManager`를 통해 접근 가능

### DB별 URL

- MySQL : com.mysql.cj.jdbc.Driver
- Oracle : oracle.jdbc.driver.OracleDriver
- SQL Server : com.Microsoft.sqlserver.jsdbc.SQLServerDriver

### SQL 실행 (Statement)

- SQL문을 수행하기 위해서는 Statement 객체가 필요
- Connection 객체를 이용하여 `createStatement()` 메소드를 통해 생성
- `executeQuery(String sql)` : SELECT 문과 같이 결과값이 여러 개의 레코드로 구해지는 경우 사용
- `executeUpdate(String sql)` : INSERT, UPDATE, DELETE문과 같이 테이블이 변경만 되고 결과가 없을 경우

### SQL 실행 (ResultSet)

- Query에 대한 결과 값 처리
- 반환 값이 여러 개인 경우에 이를 받아서 쉽게 처리할 수 있게 설계 됨
- `next()` 를 통해 현재 행에서 다음 행으로 커서 이동
- getXXX (Column Name / index)를 통해 값을 가져올 수 있음

### SQL 실행 (PreparedStatement)

- Statement의 단점을 극복한 인터페이스
- 간단하게 쿼리문을 작성할 수 있도록 도움
- **Connection** 인터페이스의 `prepareStatement(String sql)` 메서드를 통해 가져옴
- `executeQuery()` / `excuteUpdate()` 사용
- SQL문은 `?` 기호를 사용해서 표현 가능 [”INSERT INTO member VALUES(?,?,?,?)”;]
- ? 기호에 값을 setXXXX (int순서 / 실제 데이터나 변수)를 통해 할당해야 함.

### 데이터베이스 연결 끊음

- 모든 작업이 끝나면 역순으로 종료
- ResultSet, Statement, Connection을 close()메서드로 종료