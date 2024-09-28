# Select

## DataBase

### 데이터베이스란?

- 여러 사람이 공유하고 사용할 목적으로 통합 관리되는 정보의 집합
- 논리적으로 연관된 하나 이상 자료의 모음
- 데이터들을 고도로 **구조화** 함으로써 검색과 갱신의 효율화를 꾀한 것
- 몇 개의 자료 파일을 조직적으로 통합하여 **중복을 없애고** 자료를 구조화 시킨 자료의 집합체
- 통합된 데이터 (Integrated Data)
    - 각자 사용하던 데이터를 모아서 중복을 최소화하고 데이터 불일치를 제거
- 저장된 데이터 (Stored Data)
    - 문서 형태로 보관되는 것이 아니라 저장장치 (디스크, 테이프 등 컴퓨터 저장장치)에 저장 됨
- 운영데이터 (Operational Data)
    - 조직의 목적을 위해서 사용되는 데이터를 의미
- 공용데이터(Shared Data)
    - 여러 사람이 각각 다른 목적의 업무를 위해서 공통으로 사용되는 데이터를 의미

조직 또는 개인의 필요에 의해 논리적으로 연관된 데이터를 모아 일정한 형태로 저장한 것

### DBMS (Database Management System)

- 데이터베이스 조작 인터페이스 제공
- 효율적인 데이터 관리 기능 제공
- 데이터베이스 구축 기능 제공
- 데이터 복구, 사용자 권한 부여, 유지보수 기능 제공

## 관계형 데이터베이스

### 관계형 데이터 베이스 (Relation DataBase)

- 테이블(Table) 기반의 Database
- 테이블(Table)
    - 실제 데이터가 저장되는 곳
    - 행과 열의 2차원 구조를 가진 데이터 저장소
- 데이터를 하나의 테이블 단위로 관리
    - 하나의 데이터(record)는 여러 속성(Attribute)을 가진다
    - 데이터 중복을 최소화
    - 테이블 간의 관계를 이용하여 필요한 데이터 검색 가능

### 관계형 데이터베이스 구조

- 스키마(Schema) : 데이터베이스에서 자료의 구조, 표현 방법, 관계 등 전반적인 명세를 기술한 것
- 테이블 : 행과 열의 모델을 사용해 조직된 데이터 요소들의 집합
    - 열(Column) 또는 속성(Attribute) : 고유한 데이터 형식(자료형)이 지정됨
    - 행(Row) 또는 레코드(Record) : 실제 데이터가 저장되는 형태
    - 기본 키 (Primary Key) : 각 행의 고유 값

## SQL

### SQL (Structed Query Language)

- 관계형 데이터 베이스에서 데이터 조작과 데이터 정의를 위해 사용하는 언어
    - 데이터 조회
    - 데이터 삽입, 삭제, 수정
    - DB Object 생성 및 변경, 삭제
    - DB 사용자 생성 및 삭제, 권한 제어
- 표준 SQL은 모든 DBMS에서 사용가능

### SQL 특징

- 배우고 사용하기 쉬움
- 대소문자를 구별하지 않음 (데이터의 대소문자는 구분)
- 선언적 언어
- DBMS에 종속적이지 않음

### DML (Data Manipulation Language) : 데이터 조작 언어

- 데이터베이스에서 데이터를 조작하거나 조회할 때 사용
- 테이블의 레코드를 CRUD (Create, Read, Update, Delete)

### DDL (Data Definition Language) : 데이터 정의 언어

- 데이터 베이스 객체(table, view, user, index 등)의 구조를 정의

### DCL (Data Control Language) : 데이터 제어 언어

- Database, Table 접근 권한이나 CRUD 권한 정의
- 특정 사용자에게 테이블의 검색권한 부여/ 금지

### TCL (Transaction Control Language) : 트랜잭션 제어 언어

- 트랜잭션 단위로 실행한 명령문을 적용하거나 취소

### SQL 종류
<table>
    <thead>
        <tr>
            <th>분류</th>
            <th>문장</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4> DML</td>
            <td>SELECT</td>
            <td>데이터를 조회할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>INSERT</td>
            <td>테이블에 새 행을 입력할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>UPDATE</td>
            <td>기존 행을 변경할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>DELETE</td>
            <td>테이블에서 행을 삭제할 때 사용</td>
        </tr>
        <tr>
            <td rowspan=4>DDL</td>
            <td>CREATE</td>
            <td>테이블 등 데이터 객체를 생성할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>ALTER</td>
            <td>테이블 등 데이터 객체를 변경할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>DROP</td>
            <td>테이블 등 데이터 객체를 삭제할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>RENAME</td>
            <td>테이블 등 데이터 객체의 이름을 변경할 때 사용</td>
        </tr>
        <tr>
            <td rowspan=2>TCL</td>
            <td>COMMIT</td>
            <td>DML문이 변경한 내용을 관리. 변경사항을 저장하거나 취소할 때 사용</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>ROLLBACK</td>
            <td>이때 DML 변경 내용은 트랜잭션 단위로 그룹화 가능</td>
        </tr>
        <tr>
            <td rowspan=2>DCL</td>
            <td>GRANT</td>
            <td>데이터베이스 접근권한 부여</td>
        </tr>
        <tr>
            <!-- <td></td> -->
            <td>REVOKE</td>
            <td>데이터베이스 접근권한 삭제</td>
        </tr>
    </tbody>
</table>

## SELECT

### MySQL 주석 (Comment)

```sql
-- 한 줄 주석

# 한 줄 주석

/*
	여러줄 주석
*/
```

### SELECT 문

- 테이블에서 레코드를 조회하기 위해 사용
- 조회 시 컬럼이름이나 표현식을 조회할 수 있고 별칭(alias) 사용 가능
- `*` 는 모든 속성을 조회
- WHERE 조건식을 이용하여 원하는 레코드를 조회할 수 있음
    
    ```sql
    SELECT[DISTINCT]{ * | column_name / expresions[alias]}
    FROM table_refrences
    [WHERE where_condition]
    [GROUP BY {col_name | expr | position}]
    [HAVING where_condition]
    [ORDER BY {col_name | expr | position} [ASC | DESC]]
    [LIMIT {[offset] row_count | row_count OFFSET offset}]
    ```
    

### SELECT 문 실행 순서

1. FROM 절 : 데이터를 가져올 대상 테이블 지정
2. WHERE 절 : FROM 절에서 선택된 테이블에 조건을 만족하는 행을 필터링
3. GROUP BY 절 : 데이터를 그룹화함
4. HAVING 절 : 그룹화된 결과에 대한 조건을 설정하여 특정 그룹을 필터링
5. SELECT 절 : 지정된 열이나 식에 대한 데이터를 조회
6. ORDER BY 절 : 결과를 정렬
7. LIMIT 절 : 결과의 개수를 제한

### 별칭(alias), 사칙연산

- as를 이용하여 조회 시 컬럼명 변경 가능 (띄어 쓰기 포함 시 “”으로 묶어줌)
- 사칙연산 사용 가능, NULL 값은 계산 불가
- IFNULL 함수를 이용하여 NULL 값 처리 `IFNULL(컬럼명, RETURN값)`

### CASE Function

```sql
CASE
	WHEN condition1 THEN result1
	WHEN condition2 THEN result2
	WHEN conditionN THEN resultN
	ELSE result
END alias;
```

- CASE문은 조건문을 통과하고 첫 번째 조건이 충족될 때 값을 반환
- 조건이 충족되지 않으면 ELSE절 반환

## WHERE절

### WHERE절

- 조건에 맞는 레코드를 조회하기 위해 사용
- SELECT 뿐 아니라 UPDATE, DELETE 등 다른 문장에서도 사용 가능

### 논리 연산자 - NOT, AND, OR

| NOT | TRUE | FALSE | NULL |
| --- | --- | --- | --- |
|  | FALSE | TRUE | NULL |

| AND | TRUE | FALSE | NULL |
| --- | --- | --- | --- |
| TRUE | TRUE | FALSE | NULL |
| FALSE | FALSE | FALSE | FALSE |
| NULL | NULL | FALSE | NULL |

| OR | TRUE | FALSE | NULL |
| --- | --- | --- | --- |
| TRUE | TRUE | TRUE | TRUE |
| FALSE | TRUE | FALSE | NULL |
| NULL | TRUE | NULL | NULL |

### IN

- 피연산자가 여러 표현 중 하나라도 같다면 TRUE

### BETWEEN

- 값이 주어진 범위의 안에 있으면 조회 `BETWEEN a AND b;`

### NULL

- `IS NULL`  / `IS NOT NULL`  : NULL인지 NULL이 아닌지 검사하기 위해 사용

### LIKE

- WHERE 절에서 컬럼의 값이 특정 패턴을 가지는지 검사하기 위해 사용
- 와일드 카드를 이용해 패턴 표현
- `%` : 0개 이상의 문자
- `_` : 문자 하나

### ORDER BY

- 조회 결과를 오름차순(ASC) 또는 내림차순 (DESC)으로 정렬할 때 사용 (default : ASC)
- 정렬 기준 컬럼 지정 가능

## 집계 함수

### 집계 함수 (Aggregate Function)

- 여러 값의 집합(복수 행)에 대해서 동작 (복수 행 함수, 통계 함수, 그룹 함수)
- GROUP BY 절과 함께 사용해 전체 집합의 하위 집합을 그룹화
    
    
    | 함수 | 설명 |
    | --- | --- |
    | AVG() | 인수의 평균 값을 반환 |
    | COUNT() | 조회된 행의 수를 반환 |
    | MAX() | 최대값 반환 |
    | MIN() | 최소값 반환 |
    | SUM() | 합 반환 |