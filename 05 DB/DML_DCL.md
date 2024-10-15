# DDL & DML

## Data Type

### 숫자 자료형 (Numeric Data Types)
### 문자 자료형 (String Data Types)
### 날짜 자료형 (Date and Time Data Types)
### BINARY 타입
### BLOB  타입

## DDL (Data Definition Language)

### 데이터베이스 생성하기

```sql
CREATE DATABASE databasename;
```

- CREATE DATABASE 명령문은 새 데이터 베이스를 생성하는데 사용 됨
- 데이터 베이스는 여러 테이블을 포함
- 데이터 베이스 생성 시 관리자 권한으로 생성
- `SHOW DATABASES` → 데이터 베이스 목록 확인 가능

### 데이터베이스 삭제

```sql
DROP {DATABASE | SCHEMA} [IF EXISTS] databasename;
```

- 데이터 베이스의 모든 테이블을 삭제하고 데이터 베이스를 삭제
- 삭제시, `DROP DATABASE` 권한 필요
- `DROP SCHEMA`는  `DROP DATABASE`와 동의어
- IF EXISTS는 데이터 베이스가 없을 시 발생할 수 있는 에러를 방지

### 데이터베이스 사용

```sql
USE databasename;
```

- 데이터 베이스가 있는 경우 (접근 권한이 있는 경우), USE 명령어를 이용하여 사용

### 데이터베이스 문자 집합 (Character set) 설정

```sql
CREATE DATABASE databasename
			[[DEFAULT] CHARACTER SET charset_name]
			[[DEFAULT] COLLATE collation_name];
ALTER DATABASE databasename
			[[DEFAULT] CHARACTER SET charset_name]
			[[DEFAULT] COLLAT collatcion_name];
```

- 데이터베이스 생성 시 설정 또는 생성 후 수정 가능
- 문자집합은 각 문자가 컴퓨터에 저장될 때 어떠한  ‘코드’로 저장되는지 규칙을 지정한 집합
- Collation은 특정 문자 집합에 의해 데이터베이스에 저장된 값들을 비교, 검색, 정렬 등의 작업을 수행할 때 사용하는 비교 규칙 집합

### 테이블(Table) 생성하기

```sql
CREATE TABLE tablename (
		column1 datatype [options],
		column2 datatype,
		column3 datatype,
		...
);
```

### 제약 조건 (CONSTRAINT)

- 컬럼에 저장될 데이터의 조건을 설정
- 제약조건에 위배되는 데이터는 저장 불가
- 테이블 생성 시 컬럼에 지정하거나, constraint로 지정 가능(ALTER를 이용하여 설정 가능)
    
    
    | 제약사항 | 설명 |
    | --- | --- |
    | NOT NULL | 각 행은 해당열의 값을 포함해야 하며 NULL 값은 허용 되지 않음 |
    | UNIQUE | 컬럼에 중복된 값을 저장할 수 없음, NULL 값은 허용 |
    | PRIMARY KEY | 기본키, 컬럼에 중복된 값을 저장할 수 없고, NULL 값도 허용하지 않음. 주로 레코드를 구분하기 위한 유일한 값을 지정할 때 사용 |
    | FOREIGN KEY | 특정 테이블의 PK 컬럼에 저장되어 있는 값만 저장. ‘참조키’, ‘외래키’ 라고 불림. NULL값 허용, 어떤 컬럼에 어떤 데이터를 참조하는지 반드시 지정 |
    | DEFAULT | 레코드 입력 시, 해당 열의 값이 입력되지 않으면 넣어줄 값을 지정 |
    | CHECK | 값의 범위나 종류를 지정, MYSQL 8 버전부터 사용 가능. 이전 버전의 경우, 제약 조건 설정은 가능하나 적용이 안됨 |

### 테이블(Table) 스키마

- 스키마 (Schema) : 테이블에 저장될 데이터의 구조와 형식
    
    ```sql
    CREATE TABLE ssafy_user (
    	user_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    	user_id VARCHAR(20) NOT NULL,
    	user_name VARCHAR(20) NOT NULL,
    	user_password VARCHAR(20) NOT NULL,
    	user_email VARCHAR(30),
    	signup_date TIMESTAMP NOT NULL DEAULT CURRENT_TIMESTAMP
    );
    ```
    

### 테이블(Table) 스키마 확인하기

```sql
{DESCRIBE | DESC}table_name;
```

- DESCRIBE 또는 DESC 명령어를 이용하여 생성된 테이블 스키마 확인

## DML

### DML (Data Manipulation Language)

- 데이터베이스에 데이터를 삽입, 조회, 수정, 삭제 할 때 사용

| SQL문 | 설명 |
| --- | --- |
| INSERT (C) | 테이블에 새로운 레코드를 삽입 |
| SELECT (R) | 하나 이상의 테이블에서 레코드들을 조회할 때 사용 |
| UPDATE (U) | 테이블의 행을 수정 |
| DELETE (D) |  테이블의 행을 삭제 |

### INSERT문

- 생성시 작성한 모든 컬럼에 입력 값이 주어지면 컬럼이름 생략 가능
- 컬럼이름과 입력 값의 순서가 일치하도록 작성
    
    (NULL, DEFAULT, AUTO INCREMENT 설정 필드 생략 가능)
    

```sql
INSERT INTO table_name
VALUES (col_value1, col_value2, col_value3, ... , col_valueN);

INSERT INTO table_name (col_name1, col_name2, col_name3, ... , col_nameN)
VALUES (col_value1, col_value2, col_value3, ... , col_valueN);

INSERT INTO table_name (col_name1, col_name2, col_name3, ... , col_nameN)
VALUES (col_value1, col_value2, col_value3, ... , col_valueN)
(col_value1, col_value2, col_value3, ... , col_valueN);
```

### UPDATE문

- 기존 레코드를 수정
- WHERE 절을 이용해 하나의 레코드 또는 다수의 레코드를 한 번에 수정 가능
- WHERE절을 생략하면 테이블의 모든 행이 수정 됨
- (Safe Mode) 체크 시 작동 X

```sql
UPDATE table_name
	SET col_name = value[, col_name2 = value2, ...]
[WHERE where_condition];
```

## MySQL Functions

### 숫자 관련 함수 (Numeric Functions)

| 함수 | 설명 |
| --- | --- |
| ABS(숫자) | 절대값 |
| CEIL(숫자), CEILING (숫자) | 값보다 크거나 같은 정수 중 가장 작은 수 반환 |
| FLOOR(숫자) | 값보다 작거나 같은 정수 중 가장 큰 수 반환 |
| ROUND(숫자, 자릿수) | 숫자를 자릿수 기준으로 반올림하여 반환 |
| TRUNCATE(숫자, 자릿수) | 숫자를 자릿수 기준으로 버림한 수를 반환 |
| POW(X, Y) | X의 Y 제곱 수를 반환 |
| MOD(X, Y) | X를 Y로 나눈 나머지를 반환 |
| GREATEST(숫자1, 숫자2, 숫자3, ...) | 주어진 수들 중에서 가장 큰 수를 반환 |
| LEAST(숫자1, 숫자2, 숫자3, …) | 주어진 수들 중에서 가장 작은 수를 반환 |

### 문자 관련 함수(String Functions)

| 함수 | 설명 |
| --- | --- |
| ASCII | 문자의 아스키 코드 값 반환 |
| CONCAT | 두 개 이상의 문자열들을 결합하여 반환 |
| FORMAT | 숫자를 “#, ##, ###, ###.##”와 같은 형식으로 지정하고 반환 |
| INSERT | 문자열 내의 지정된 위치에서 특정 수의 문자에 대해 문자열을 삽입 |
| INSTR | 문자열에서 지정한 문자열이 처음 나타나는 위치를 반환 |
| LOWER | 문자열을 소문자로 변환 |
| CHAR_LENGTH | 문자열의 길이를 반환(문자단위) |
| LENGTH | 문자열의 길이를 반환(바이트 단위) |
| TRIM | 문자열에서 선행 및 후행 공백 제거 |
| UPPER | 문자열을 대문자로 변환 |
| REPLACE | 문자열 내의 모든 부분 문자열을 새 부분 문자열로 변환 |
| STRCMP | 두 문자열 비교 |
| SUBSTR | 문자열에서 부분 문자열 추출 |
| LPAD | 특정 길이로 문자열을 다른 문자열의 왼쪽에 채움 |
| RPAD | 특정 길이로 문자열을 다른 문자열의 오른쪽에 채움 |
| REPEAT | 지정된 횟수만큼 문자열을 반복 |
| REVERSE | 문자열을 뒤집고 결과를 반환 |

### 날짜 관련 함수 (Date Functions)

| 함수 | 설명 |
| --- | --- |
| DATE | datetime 표현식에서 날짜 부분을 추출하여 날짜 반환 |
| ADDTIME | 시간/날짜/시간에 시간 간격을 추가한 다음 시간/날짜/시간을 반환 |
| DATEDIFF | 두 날짜 값 사이의 일 수를 반환 |
| DAY | 주어진 날짜의 해당 달의 날짜를 반환 |
| NOW()/ SYSDATE()/ CURRENT_TIMESTAMP | 현재 날짜와 시간을 반환 |
| YEAR | 주어진 날짜와 연도 부분을 반환 |
| YEARWEEK | 주어진 날짜의 연도 및 주 번호를 반환 |
| DAYNAME | 주어진 날짜의 요일 이름을 반환 |
| MONTH | 주어진 날짜의 월 부분을 반환 |

### 그 외 기타 중요 함수 (Advanced Functions)

| 함수 | 설명 |
| --- | --- |
| BIN | 숫자의 이진 표현을 반환 |
| BINARY | 값을 이진 문자열로 변환 |
| CAST | 값(모든 유형)을 지정된 데이터 유형으로 변환 |
| CONVERT | 값을 지정된 데이터 유형 또는 문자 집합으로 변환 |
| IF | 조건이 TRUE면 값을 반환하고 조건이 FALSE이면 다른 값을 반환 |
| NULLIF | 두 표현식을 비교하고 같으면 NULL을 반환하고, 그렇지 않으면 표현식을 반환 |
| IFNULL | 표현식이 NULL 이면 지정된 값을 반환하고, 그렇지 않으면 표현식을 반환 |
| LAST_INSERT_ID | 테이블에 삽입되거나 업데이트 된 마지막 행의 AUTO_INCREMENT ID를 반환 |

## Transaction

### 트랜잭션 (Transaction)

- 커밋 (Commit) 하거나 롤백(Rollback) 할 수 있는 가장 작은 작업 단위
- 커밋 (Commit) : 트랜잭션을 종료하여 변경사항에 대해서 영구적으로 저장하는 SQL
- 롤백 (Rollback) : 트랜잭션에 의해 수행된 모든 변경사항을 실행 취소하는 SQL

| name | description |
| --- | --- |
| START TRANSACTION | 트랜잭션을 시작함. COMMIT, ROLLBACK이 나오기 전까지 모든 SQL을 의미 |
| COMMIT | 트랜잭션에서 변경한 사항을 영구적으로 DB에 반영 |
| ROLLBACK | START TRANSACTION 실행 전 상태로 되돌림 |
- MySQL에서는 기본이 Auto Commit 상태 (오류가 없으면 자동 Commit)