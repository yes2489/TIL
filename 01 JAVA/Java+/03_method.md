## 메소드
### 함수
`add(a, b) = a + b`
 - 이름이 `add`이고 `a`, `b`라는 두 값을 입력 받는 함수. 이 함수는 `a + b` 연산을 수행함
 - 함수에 값을 입력하면 함수가 가진 연산을 처리한 다음 결과를 출력
 - 여러번 같은 계산을 해야한다면 함수 정의 후 해당 함수를 호출하면 됨
 - 같은 함수를 다른 입력 값으로 여러번 호출할 수 있음 (**재사용성**) 

### 메소드 사용
 - 메소드는 함수의 한 종류
 - 함수에 값을 입력하면, 어떤 연산을 처리한 다음에 결과를 반환
```java
public static void main{
    int sum1 = add(1, 10){
        System.out.println("결과1 출력 : " + sum1)
    }
}

// add 메서드
public static int add(int a, int b) {
	System.out.println(a + "+" + b + "연산 수행");
	int sum = a + b;
	return sum;
}
```
#### 메소드 선언 (Method Declaration)
`public static int add(int a, int b)`
- 메소드의 선언 부분으로 **메소드 이름, 반환 타입, 매개변수(파라미터)** 목록을 포함
    - `public static`
        - `public` : 다른 클래스에서 호출할 수 있는 메서드
        - `static` : 객체를 생성하지 않고 호출할 수 있는 정적 메소드
    - `int add(int a, int b)`
        - `int` : 반환 타입 정의
        - `(int a, int b)` : 메소드를 호출할 때 전달하는 입력 값 정의, 이 변수들은 해당 메소드 안에서만 사용됨. 이렇게 메소드 선언에 사용되는 변수를 *파라미터·매개변수*라고 함

#### 메소드 본문 (Method Body)
```java
{
    System.out.println(a + "+" + b + "연산 수행");
    int sum = a + b;
    return sum;
}
```
- 메소드가 수행해야하는 코드 블록
- 메소드를 호출하면 메소드 본문이 순서대로 실행 됨
- 메소드 본문은 블랙박스 *메소드를 호출하는 곳에서는 메소드 선언은 알지만 본문은 모름*
- 메소드의 실행 결과를 반환하려면 `return`문 사용

#### 메소드 호출
 - 정의한 메소드를 호출해서 실행 시 메소드 이름에 입력 값을 전달   
   `int sum1 = add(1, 10);`

 - 메소드 호출 시 실행되는 순서
 ```java
 int sum1 = add(1, 10); // add라는 메소드를 숫자 1, 10을 전달하면서 호출
 int sum1 = 11; // add(1,10)이 실행 됨, 실행 결과는 반환 값인 11
 // sum1에 11이 저장 됨
 ```
 - 메소드 호출이 끝나면 해당 메소드가 반환한 결과값으로 치환 됨

### 메소드 호출과 용어 정리
 - 메소드 호출 시 메소드에 넘기는 값과 매개변수(파라미터)의 타입이 맞아야 함
 ```java
 호출 : call("hello", 20)
 메소드 정의 : int call(String str, int age)
 ```
 #### 인수 (Argument)
 - `"hello"`, `20`처럼 **넘기는 값**을 인수, 인자라고 함

 #### 매개변수 (Parameter)
 - **메소드를 정의할 때 선언한 변수**인 `String str`, `int age`를 매개변수, 파라미터라고 함
 - 메소드 호출 시 인수를 넘기면 **인수가 매개변수**에 대입 됨

### 메소드 정의
 ```java
 접근제어자 변환타입 메소드이름(매개변수 목록){
    //메소드 본문, 실행 코드
 }
 ```
 #### 매개변수가 없거나 반환 타입이 없는 경우
 - 매개변수가 없는 경우
    - 선언 : `public static void` **`test()`** 와 같이 매개변수를 비워두고 정의
    - 호출 : `test();`와 같이 인수를 비워두고 호출   

 - 반환 타입이 없는 경우
    - 선언 : `public static` **`void`** `test()` 와 같이 반환 타입을 `void`로 정의
    - 호출 : `test();`와 같이 반환 타입이 없으므로 메소드만 호출하고 반환 값을 받지 않으면 됨   
 #### void와 return 생략
 - 모든 메소드는 항상 `return`을 호출해야 함 → `retrun`을 만나면 해당 메소드 종료
 - 다만 반환 타입 `void`의 경우 생략 가능 → java 컴파일러가 반환 타입이 없는 경우에는 `return`을 마지막 줄에 넣어줌

### 반환 타입
 #### 반환 타입이 있으면 반드시 값을 반환해야 함
 - ex) boolean의 경우 참일때만 `return`이 있고 거짓일 경우 `retrun`값이 없으면 컴파일 오류 발생

 #### `return`문을 만나면 그 즉시 메소드를 빠져 나감

 #### 반환 값 무시
 - 반환 타입이 있는 메소드를 호출했는데 반환 값이 필요없다면 사용하지 않아도 됨
    - ex) `int sum = add(1, 2)` → 반환된 값을 받아 `sum`에 저장
    - ex) `add (1, 2)` → 반환된 값을 사용하지 않고 버림

### 메소드 호출과 값 전달
**[자바는 항상 변수의 값을 복사해서 대입 함]**
 #### 변수와 값 복사
```java
  public static void main(String[] args) {
    int num1 = 5;
    int num2 = num1;
    num2 = 10;
    System.out.println("num1= " + num1); // 5
    System.out.println("num2= " + num2); //10
  }
```
 - 실행과정
 ```java
 int num2 = num1; // num1 = 5
 int num2 = 5; // num2 변수에 대입하기 전에 num1의 값 5를 읽음
 // num1(5), num2(5)
 num2 = 10; // num2에 10을 대입, num2= 10
 ```
 #### 메소드 호출과 이름이 같은 변수
```java
public static void main(String[] args) {
	int number = 5;
	System.out.println("1. changeNumber 호출 전, num1 : " + number); // 5
	changeNumber(number);
	System.out.println("4. changeNumber 호출 후, num1 : " + number); //5
}
	
	
public static void changeNumber(int number) {
	System.out.println("2. changeNumber 변경 전, num2 : " + number); // 5
	number = number * 2;
	System.out.println("3. changeNumber 변경 후, num2 : " + number); // 10
}
```
 - `main()`에 정의한 변수와 메소드의 매개변수(파라미터)의 이름이 `number`로 같음
 - ***But*** 각각의 메소드안에서 사용하는 변수는 서로 완전히 분리된 다른 변수임.
 - 따라서 `main()`의 `number`와 `changeNumber`의 `number`는 서로 다른 변수   

 #### 메소드 호출과 값 반환받기
 ```java
 public static void main(String[] args) {
	int num1 = 5;
	System.out.println("1. changeNumber 호출 전, num1 : " + num1); // 5
    // 변수 치환 추가
	num1 = changeNumber(num1);
	System.out.println("4. changeNumber 호출 후, num1 : " + num1); //10
 }

 //	반환값이 있기 때문에 void → int로 변경 && return 
 public static int changeNumber(int num2) {
	System.out.println("2. changeNumber 변경 전, num2 : " + num2); // 5
	num2 = num2 * 2;
	System.out.println("3. changeNumber 변경 후, num2 : " + num2); // 10
    return num2;
 }
 ```

### 메소드와 형변환
 #### 명시적 형변환
 ```java
 public static void main(String[] args) {
	double number = 1.5;
	printNumber((int) number); // 명시적 형변환을 사용해 double을 int로 변환
    // printNumber(1); //(double) 1.5 → (int) 1로 변환
    // void printNumber(int n=1) // int형 파라미터 변수 n에 int형 1을 대입
 }
 public static void printNumber(int n) { 
	System.out.println("숫자: " + n);
 }
 ```

 #### 자동 형변환
 ```java
 public static void main(String[] args) {
	int number = 100;
	printNumber(number); // number은 int형 100
    // printNumber(100); // 메소드 호출 전 number 변수의 값을 읽음
 }
 public static void printNumber(double n) {
    // printNumber(double n = 100) // double형 파라미터 변수 n에 int형 값 100을 대입
    // printNumber(double n = (double) 100) // double이 더 큰 숫자 범위이므로 자동 형변환 적용
    // printNumber(double n = 100.0) // 자동 형변환 완료
	System.out.println("숫자: " + n);
 }
 ```
 - 메소드를 호출할 때는 전달하는 **인수의 타입**과 **매개변수의 타입**이 맞아야 함
 - 단, 타입이 달라도 자동 형변환이 가능한 경우에는 호출할 수 있음

### 메소드 오버로딩
 - Java는 **메소드 이름** 뿐 아니라 **매개변수 정보**를 함께 사용하여 메소드를 구분
 - **이름이 같고 매개변수가 다른 메소드를 여러개 정의 = 메소드 오버로딩**

 #### 오버로딩 규칙
 - 메소드의 **이름이 같아도 매개변수의 타입 및 순서가 다르면** 오버로딩을 할 수 있음
 - 반환 타입은 인정 X
 - 먼저 본인의 타입에 최대한 맞는 메소드를 찾아서 실행하고 없으면 형 변환 가능한 타입의 메소드를 찾아서 실행 함

  #### 오버로딩 성공
 ```java
 add(int a, int b)
 add(int a, int b, int c)
 add(double a, double b)
 ```
 #### 오버로딩 실패
 ```java
 int add(int a, int b)
 double add(int a, int b)
 ```
 - 반환 타입은 다르지만 *메소드 이름, 매개변수의 타입*이 같으므로 컴파일 오류 발생

 #### 메소드 시그니처 (method signature)
 `메소드 시그니처 = 메소드 이름 + 매개변수 타입(순서)`
 - 메소드를 구분할 수 있는 기준
 - 메소드 이름이 같아도 메소드 시그니처가 다르면 다른 메소드로 간주
