## 변수 (variable)
### 패키지 (package)
 - 자바 파일을 구분하기 위한 폴더
 - `variable`라는 패키지를 만들었다면, 해당 패키지에 들어가는 자바 파일 첫 줄에 `package variable;`와 같이 소속된 패키지를 선언해주어야 함
 - 자바 파일이 위치하는 패키지와 `package variable` 선언 위치가 같아야 함

### 변수 선언과 초기화
```java
package variable;

public class var2 {
	public static void main(String[] args) {
		int a; // 변수 선언
		a = 10; // 변수 초기화;
		
		System.out.println(a); // 10

        	a = 20; // 변수 값 변경 a(10 -> 20)
        
        	System.out.println(a); // 20
	}
}
```
#### 변수 선언
 - 변수를 선언하면 컴퓨터의 메모리 공간을 확보하여 그 곳에 데이터를 저장함
 - 변수의 이름을 통해 해당 메모리 공간에 접근 가능
 - 변수 선언 방법
    - 변수 선언과 초기화를 각각 따로 진행   
    `int a;`   
    `a = 10;`
    - 변수를 선언하면서 동시에 초기화 진행   
    `int b = 20;`
    - 여러 변수를 선언하면서 동시에 초기화 진행   
    `int c = 30, d = 40;`

#### 변수 초기화
 - 변수 초기화를 진행하지 않으면?
    - `java : variable a may not have been initialized`
    - 컴파일 에러 발생. → 컴파일이 되지 않음
    - 컴퓨터에서 메모리는 여러 시스템이 함께 사용하는 공간이며 어떠한 값들이 계속 저장됨    
    → 변수 선언 시 메모리상의 어떤 공간을 차지하고 사용하게 되는데 해당 공간에 어떤 값이 있었는지는 아무도 모름.    
    → 초기화를 진행하지 않을 시 이상한 값이 출력될 수 있음.

### 변수 타입
 - `int` : 정수
 - `double` : 실수
 - `boolean` : 불리언, 참 거짓
 - `char` : 문자 하나 `' '`
 - `String` : 문자열 `" "`


#### 표현 가능한 숫자의 범위와 차지하는 메모리 공간
 - 정수형
    - `byte` : -128 ~ 127 (1byte)
    - `short` : -32768 ~ 32767 (2byte)
    - `int` : -2147483648 ~ 2147483647 (4byte)
    - `long` : -9223372036854775808 ~ 9223372036854775807 (8byte)

 - 실수형
    - `float` : 대략 -3.4E38 ~ 3.4E38 (4byte)
    - `double` : 대략 -1.7E308 ~ 1.7E308 (8byte)

 - 기타
    - `boolean` : `true`, `false` (1byte)
    - `char` : 문자 하나 (1byte)
    - `String` : 문자열/ 메모리 사용량은 문자 길이에 따라 동적으로 달라짐

#### 리터럴
```java
    int a = 100; // 정수 리터럴
	double b = 10.5; // 실수 리터럴
	boolean c = true; // 불리언(boolean)리터럴 
	char d = 'A'; // 문자 리터럴
	String e = "Hello!"; // 문자열 리터럴
```
 - __개발자가 직접 적은 고정된 값을 리터럴 (literal)__ 이라고 함
 - 변수의 값은 변할 수 있지만 리터럴은 개발자가 직접 입력한 고정된 값이기 때문에 리터럴 자체는 변하지 않음

#### 리터럴 타입 지정
 - 정수 리터럴은 `int`를 기본으로 사용   
 `int` 범위인 20억을 넘어가면 `L`을 붙여서 정수 리터럴을 `long`으로 변경해야 함   

 - 실수 리터럴은 `double`을 기본으로 사용   
 `float` 사용 시 `f`를 붙여서 사용

### 변수 명명 규칙
#### 규칙
 - 변수 이름은 숫자로 시작할 수 없음
 - 이름에는 공백이 들어갈 수 없음
 - 자바의 예약어를 변수이름으로 사용할 수 없음
 - 변수 이름에는 영문자(`a-z`, `A-Z`), 숫자(`0-9`), 달러 기호(`$`), 밑줄(`_`) 사용

#### 관례
 - 변수는 소문자로 시작하는 `camelCase`
 - ex) `orderDetail`, `myAccount`
 - 클래스는 대문자로 시작
 - ex) 클래스 명 : `Person`, `OderDetail`
 - 예외
   - 상수는 모두 대문자를 사용하고 언더바로 구분   
   `USER_LIMIT`, `MAX_SIZE`
   - 패키지는 모두 소문자를 사용   
   `org.spring.boot`
   
### 기본형 vs 참조형
#### 기본형 (Primitive Type)
 - `int`, `long`, `double`, `boolean`처럼 __변수에 사용할 값을 직접 넣을 수 있는 데이터 타입__
 - 사이즈가 명확하게 정해져 있음
 - 더 빠르고 메모리를 효율적으로 처리 함

#### 참조형 (Reference Type)
 - 데이터에 접근하기 위한 __참조(주소)를 저장__ 하는 데이터 타입
 - 크기를 동적으로 할당할 수 있음
 - 복잡한 데이터 구조 생성 및 관리 가능

























