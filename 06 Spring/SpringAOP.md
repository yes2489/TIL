# Spring AOP

## 관점 지향 프로그래밍 (방법론)

### AOP (Aspect Oriented Programming)

- 어플리케이션 로직에는 핵심 기능과 부가 기능이 존재
- 핵심 기능 : 객체가 제공하는 고유의 기능
- 부가 기능 : 핵심 기능을 보조하기 위한 기능 (시간 측정, 로그 추적, 트랜잭션 관리 등)
- OOP에서 모듈화의 핵심 단위는 클래스인 반면, AOP에서 모듈화 단위는 Aspect
- Aspect는 여러 타입과 객체에 거쳐서 사용되는 기능 (Cross-Cutting, 트랜잭션 관리 등의 모듈화)
- AOP는 OOP를  대체하는 것이 아닌 **보조**하는 목적

### AOP 용어

<table>
    <tr>
        <th>용어</th>
        <th>내용</th>
    </tr>
    <tr>
        <td>Target</td>
        <td>핵심 기능을 담고 있는 객체 → 부가 기능을 부여할 대상</td>
    </tr>
    <tr>
        <td rowspan=2>Aspect</td>
        <td>여러 클래스에 공통적으로 적용되는 공통 관심사항(AOP의 기본 모듈)</td>
    </tr>
    <tr>
        <!-- <td></td> -->
        <td>Advice + Point Cut</td>
    </tr>
    <tr>
        <td rowspan=2>Join Point</td>
        <td>Advice가 적용될 수 있는 위치 (메서드 실행, 생성자 호출 등)</td>
    </tr>
    <tr>
        <!-- <td></td> -->
        <td>Spring AOP에서는 메서드 실행 시점으로 제한</td>
    </tr>
    <tr>
        <td rowspan=2>Point Cut</td>
        <td>Join Point 중에서 Advice를 적용하기 위한 조건 서술</td>
    </tr>
    <tr>
        <!-- <td></td> -->
        <td>Aspect는 지정한 Point Cut에 일치하는 모든 Join Point에서 실행</td>
    </tr>
    <tr>
        <td rowspan=2>Advice</td>
        <td>부가 기능, 특정 Join Point에서 취해지는 행동</td>
    </tr>
    <tr>
        <!-- <td></td> -->
        <td>Around, Before, After 등의 타입이 존재</td>
    </tr>
    <tr>
        <td rowspan=2>Weaving</td>
        <td>Point Cut으로 결정한 Target의 Join Point에 Advice를 적용하는 것</td>
    </tr>
    <tr>
        <!-- <td></td> -->
        <td>컴파일 시점, 클래스 로딩 시점, 런타임 시점에서 수행 가능하나 Spring AOP는 런타임에 수행</td>
    </tr>
    <tr>
        <td rowspan=2>AOP Proxy</td>
        <td>AOP를 구현하기 위해 AOP Framework에 의해 생성된 객체</td>
    </tr>
    <tr>
        <!-- <td></td> -->
        <td>Spring AOP는 JDK dynamic proxy 또는 CGLIB proxy 사용</td>
    </tr>
</table>

### Point Cut 표현식

- `execution([접근제어자] 반환타입 [선언타입] 메서드 명(파라미터))`
- `*` 사용 가능

| Point Cut | Join Point |
| --- | --- |
| `execution(* *(..))` | 모든 메서드 실행 시 (모든 파라미터 포함) |
| `execution(* remove(..))` | remove 메서드 실행 시 |
| `execution(* set*(..))` | 메서드명이 set으로 시작하는 모든 메서드 실행 시 |
| `execution(* com.ssafy.aop.*.*(..))` | com.ssafy.aop 패키지의 모든 메서드 실행 시 |
| `execution(* com.ssafy.aop..*.*(..))` | com.ssafy.aop 패키지의 모든 메서드 실행 시 |
| `execution(* *(String))` | 파라미터가 String인 메서드 실행 시 |
| `execution(* *())` | 파라미터가 없는 메서드 실행 시 |
| `execution(* *(*))` | 정확히 파라미터가 한 개인 메서드 실행 시 (모든 타입 허용) |
| `execution(* *(String, ..))` | 파라미터가 String으로 시작 하는 모든 메서드 실행 시 |

## Proxy

- 프록시 서버는 클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용프로그램을 가리킴
- 접근 제어와 부가 기능 추가를 수행할 수 있음

## Spring AOP

### Advice Type

- before - target 메서드 호출 이전
- after - target 메서드 호출 이후, java exception 문장의 finally와 같이 동작
- after returning - target 메서드 정상 동작 후
- after throwing - target 메서드 에러 발생 후
- around - target 메서드의 실행 시기, 방법, 실행 여부를 결정

### Spring AOP Proxy

- 실제 기능이 구현된 Target 객체를 호출하면 target이 호출되는 것이 아닌 advice가 적용된 Proxy 객체가 호출 됨
- Spring AOP는 기본값으로 표준 JDK dynamic proxy를 사용
- 인터페이스를 구현한 클래스가 아닌 경우 CGLIB 프록시를 사용
- 자바 언어에 관점 지향 프로그램을 적용할 수 있게 도와주는 표준화된 AOP  Framework

<details>
<summary><h3> Spring AOP 시작하기</h3></summary>
<div markdown="1">
- applicationContext.xml
    ```xml
    <bean class="경로" id="myAspect"/>
    <aop:config>
        <aop:pointcut expression="execution(* *(..))" id="mypt"/>
        <aop:aspect ref="myAspect">
            <aop:before method="메소드명" pointcut-ref="mypt"/>
            <aop:after-returning method="메소드명" pointcut-ref="mypt" [returning=""]/>
            <aop:after-throwing method="메소드명" pointcut-ref="mypt" throwing="th"/>
            <aop:after method="메소드명" pointcut-ref="mypt" />
        </aop:aspect>
    </aop:config>
    ```
    ```xml
    <aop:config>
        <aop:pointcut expression="execution(* *(..))" id="mypt"/>
        <aop:aspect ref="myAspect">
            <aop:around method="around" pointcut-ref="mypt"/>
        </aop:aspect>
    </aop:config>
- Annotation
    - @Aspect 활성화 : xml 파일에 `<aop:aspectj-autoproxy/>` 추가
    ```java
    @Component
    @Aspect
    public class MyAspect{
        
        @Pointcut("execution(* *(..))")
        public void mypt() {}

        @Before("mypt()")
        public void before() {
            System.out.println("start");
        }

        @AfterReturning("mypt()")
        public void afterReturn() {
            System.out.println("성공했다면 여기로");
        }

        @AfterThrowing(value="mypt()", throwing="th") {
            System.out.println("예외 발생하면?");
            if(th instanceof SomeException) {
                ((SomeException) th).someException();
            }
        }

        @After("mypt()")
        public void after() {
            System.out.println("마무리");
        }
        ////////////////////////////////////////////////////////////
        // 전체 한 번에 처리
        // @Around("mypt()")
        public void around(ProceedingJoinPoint pjt) {
            this.before();
            try{
                pjt.proceed;
                this.afterRetrun();
            } catch (Throwable e) {
                this.afterThrowing(e);
            } finally {
                this.after();
            }
        }
    }
    ```
</details>