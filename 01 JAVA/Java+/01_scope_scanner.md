## 스코프
### 지역 변수와 스코프
 - 변수는 선언 위치에 따라 지역변수(Local Variable), 멤버 변수(클래스 변수, 인스턴스 변수)로 분류
 - 지역변수는 선언된 코드 블록 `{}` 에서만 사용
### 스코프
 - 변수의 접근 가능한 범위를 **스코프(Scope)**라고 함
 - 변수의 스코프 지정 시 메모리를 효율적으로 사용할 수 있고 코드의 복잡성도 줄일 수 있음
### 반복문 관점에서의 스코프
 - `while`문의 경우 변수 i의 스코프가 `main()` 메소드 전체
 - `for`문의 경우 변수 i의 스코프가 `for`문 안으로 한정
 - ⇒ `for`문 안에서만 사용되는 카운터 변수가 있다면 `while`문보다는 `for`문을 사용해서 스코프의 범위를 제한하는것이 메모리 사용과 유지보수 관점에서 더 좋음

## 형변환
### 형변환
 - 작은 범위에서 큰 범위로 대입 허용   
 **`int` < `long` < `double`**
### 자동 형변환 (묵시적 형변환)
 - 대입하는 타입을 맞추기 위해 개념적으로는 다음과 같이 동작 함
 ```java
 intValue = 10
 doubleValue = intValue
 doubleValue = (double) intValue; // 형 맞추기
 doubleValue = (double) 10 // 변수 값 읽기
 doubleValue = 10.0 // 형변환
```
 - 작은 범위에서 큰 범위로의 대입은 자동으로 일어나기때문에 자동 형변환, 묵시적 형변환이라 함

### 명시적 형변환
 - 큰 범위에서 작은 범위 대입은 명시적 형변환이 필요
 ```java
 //doubleValue = 1.5
 intValue = (int) doubleValue;
 intValue = (int) 1.5 // doubleValue에 있는 값을 읽음
 intValue = 1; //(int)로 형변환, intValue에 int형인 숫자 1 대입
 ```
 - 명시적 형변환 → 소수점 버림 발생
 - 형변환시 `doubleValue` 자체의 타입이나 값이 변경되는 것이 아닌 `doubleValue`에서 읽은 값을 형변환하는 것이므로 `doubleValue` 내의 값은 그대로 1.5로 유지

 ### 형변환 오버플로우
 ```java
 maxIntOver = 2147483648L; // int 최고값 + 1
 intValue = (int) maxIntOver; // 변수 값 읽음
 intValue = (int) 2147483648L; //형 변환 시도
 intValue = -2147483648;
 ```
 - 기존 범위를 초과해서 `-2147483648`과 같은 전혀 다른 숫자가 표현되는 것
 - 오버플로우가 발생하면 시계가 한 바퀴 돈 것 처럼 다시 처음부터 시작
 - 오버플로우 자체가 발생하지 않도록 해야 함!

### 연산과 형변환
 - 같은 타입끼리의 계산은 같은 타입의 결과 반환
 - 서로 다른 타입의 계산은 **큰 범위로 자동 형변환**이 일어남
    - `int` + `long`은 `long` + `long`으로 자동 형변환
    - `int` + `double`은 `double` + `double`로 자동 형변환

## Scanner
### Scanner
`Scanner scanner = new Scanner(System.in);`
 - `Scanner`의 기능을 사용
`scanner.nextLine()`
 - 엔터(`\n`)를 입력할 때 까지 문자를 가져옴
`scanner.nextInt()`
 - 입력을 `int`형으로 가져옴
`scanner.nextDouble()`
 - 입력을 `double`형으로 가져옴
