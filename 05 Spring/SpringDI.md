# Spring DI

## Spring Framework

### Framework

- 사전적 의미 : 뼈대, (판단, 결정 등을 위한) 틀
- SW에서의 의미 : SW 특정 문제를 해결하기 위해서 상호 협력하는 클래스와 인터페이스의 집합
- 사용하는 이유?
    - 웹 어플리케이션을 개발하기 위해서는 많은 기본 기능을 설계, 작성해야 함
    - 공통으로 사용되는 기본 기능들을 일관되게 사용할 수 있으면 개발자는 웹 어플리케이션 기능 자체 개발에 신경 쓰면 되기 때문에 생산성 향상
    - 개발자 입장에서는 완성된 구조에 맡은 기능을 개발하여 넣어주면 되기 때문에 개발 기간을 단축할 수 있음

### Spring Framework

- 자바에서는 **EJB(Enterprise JavaBeans)** 를 이용하여 엔터프라이즈 급 어플리케이션 제작
    - 경량 컨테이너 사용
    - 의존성 주입
    - AOP
    - POJO   
    등의 개념 등장

### Spring Framework의 특징

- POJO (Plain Old Java Object) 방식의 프레임워크
- 의존성 주입 (Dependency Injection)을 통한 객체 관계 구성
- 관점 지향 프로그래밍 (AOP, Aspect Oriented Programming)
- 제어 역전(IoC, Inversion of Control)
- 높은 확장성과 다양한 라이브러리

## 의존관계 역전

### 의존성 개념

> 💡 Class A 객체가 어떤 일을 처리하기 위해 Class B 객체의 도움을 받아야만 일을 처리할 수 있다면 <b>Class A는 Class B에 의존한다.</b> 라고 표현

⇒ **의존대상 B가 변하면 그것이 A에 영향을 미친다.**

```java
public class Desktop {
	// 필요한 필드
	
	// 해당 컴퓨터 정보를 반환
	public String getInfo(){
		return "데스크탑";
	}
}

===============================================================================

public class Programmer {
	private Desktop computer;
	
	public Programmer() {
		this.computer = new Desktop();
	}
	
	public void codding() {
		System.out.println(computer.getInfo()+"으로 개발을 합니다.");
	}
}

===============================================================================

public class Test {
	public static void main(String[] args) {
		Programmer p = new Programmer();
		p.coding();
	}
}

→ Programmer는 Desktop에 의존한다.
```

### 객체 생성 의존성 제거

```java
public class Desktop {
	// 필요한 필드
	
	// 해당 컴퓨터 정보를 반환
	public String getInfo(){
		return "데스크탑";
	}
}

===============================================================================

public class Programmer {
	private Desktop computer;
	
	public Programmer(Desktop desktop) {
		this.computer = desktop;
	}	
	
	public void codding() {
		System.out.println(computer.getInfo()+"으로 개발을 합니다.");
	}
}

===============================================================================

public class Test {
	public static void main(String[] args) {
		Desktop desktop = new Desktop();
		Programmer p = new Programmer(**desktop**);
		p.coding();
	}
}

→ Desktop에 대한 객체생성 의존성 : Programmer에서 Test로 의존관계 역전
```

### 타입 의존성 제거

> 💡 의존 관계를 인터페이스로 <b>추상화</b>하게 되면, 더 다양한 의존 관계를 맺을 수 있으며 실제 구현 클래스와의 <b>관계가 느슨</b>해지고, <b>결합도가 낮아짐.</b>

```java
public interface Computer {
	public String getInfo(){}
}

===============================================================================

public class Laptop implements Computer {
	// 필요한 필드
	
	// 해당 컴퓨터 정보를 반환
	public String getInfo(){
		return "랩탑";
	}
}

===============================================================================

public class Desktop implements Computer {
	// 필요한 필드
	
	// 해당 컴퓨터 정보를 반환
	public String getInfo(){
		return "데스크탑";
	}
}

===============================================================================

public class Programmer {
	private Computer computer;
	
//	public Programmer() {
//		this.computer = new Desktop();
//	}
	
	public Programmer(Computer computer) {
		this.computer = computer;
	}	
	
	public void codding() {
		System.out.println(computer.getInfo()+"으로 개발을 합니다.");
	}
}
 → 느슨한 결합
```

## 의존성 주입 (DI : Dependency Injection)

### 의존 관계 주입

의존 관계를 외부에서 결정하고 주입하는 것

- 의존 관계 주입 조건 3가지 (토비의 스프링 3.1)
    - 클래스 모델이나 코드에는 런타임 시점의 의존관계가 드러나지 않음. 그러기 위해서는 인터페이스만 의존하고 있어야 함
    - 런타임 시점의 의존관계는 컨테이너나 팩토리같은 제 3의 존재가 결정
    - 의존관계는 사용할 오브젝트에 대한 레퍼런스를 외부에서 제공(주입)해줌으로써 만들어줌

> 💡 DI는 **의존관계를 외부에서 결정**하는 것이기 때문에, 클래스 변수를 결정하는 방법들이 곧 DI를 구현하는 방법

### 생성자를 이용한 의존성 주입

```java
public class Programmer {
	private Computer computer;
	
	// 생성자를 이용한 의존성 주입
	public Programmer (Computer computer) {
		this.computer = computer;
	}
	
	public void coding() {
		System.out.println(computer.getInfo() + "으로 개발을 합니다.");
	}
}

===============================================================================

public class Programmer {
	private Computer computer;
	
	// setter를 이용한 의존성 주입
	public void setComputer(Computer computer){
		this.computer = computer;
	}
	
	public void coding() {
		System.out.println(computer.getInfo() + "으로 개발을 합니다.");
	}
}
```

### 메소드를 이용한 의존성 주입

```java
public class Programmer {
	private Computer computer;
	private Keyboard keyboard;
	
	// 메서드 주입 (여러개를 동시에 주입할 수 있음)
	public void init(Computer computer, Keyboard keyboard) {
		this.computer = computer;
		this.keyboard = keyboard;
	}
	
	public void coding() {
		System.out.println(computer.getInfo() + "으로 개발을 합니다.");
	}
}
```

### DI의 장점

- 의존성이 줄어들게 됨
    
    → DI로 구현하게 될 경우, 주입받는 대상이 변하더라도 그 구현 자체를 수정할 일이 없거나 줄어들게 됨
    
- 재사용성이 높은 코드가 됨
- 가독성이 높아짐

## Spring Container Build

### Spring IoC Container

- Container
    - 스프링에서 핵심적인 역할을 하는 객체를 Bean이라고 하며, Container는 Bean의 인스턴스화 조립, 관리의 역할, 사용 소멸에 대한 처리를 담당
    - `BeanFactory`
        - 프레임워크 설정과 기본 기능을 제공하는 컨테이너
        - 모든 유형의 객체를 관리할 수 있는 매커니즘 제공
    - `ApplicationContext`
        - BeanFactory 하위 인터페이스
        - 이벤트 처리, 국제화용 메시지 처리 등 다양한 기능 제공
    - `WebApplicationContext`
        - 웹 환경에서 Spring을 사용하기 위한 기능이 추가됨
        - 대표적인 구현 클래스로 XmlWebApplicationContext가 있음

### 스프링 설정 정보 (Spring configuration metadata)

- 애플리케이션 작성을 위해 생성할 Bean과 설정 정보, 의존성 등의 방법을 나타내는 정보
- 설정 정보를 작성하는 방법은 `XML` 방식, `Annotation` 방식, `Java Config` 방식이 있음

### Spring Container 빌드

1. Project 생성 후 Maven Project로 변경
2. pom.xml → Spring Context 의존성 추가
3. Source Folder 생성 (resources)
4. 스프링 설정파일 생성 (XML 파일 → applicationContext.xml)
    
    설정 공식 홈페이지에서 복사 가져오기
    
5. 빈(Bean) 등록 (풀패키지 명 작성)
    
    ```xml
    ... 
    	<bean class="경로" id="desktop"></bean>
    	<bean class="경로" id="programmer"></bean>
    ...
    ```
    
6. 스프링 컨테이너를 이용하여 객체 가져오기
    
    ```java
    public class Test {
    	public static void main(String[] args) {
    		
    		// 스프링 컨테이너 객체 빌드
    		ApplicationContext context = new GenericXmlApplicationContext("applicationContext.xml");
    		
    		// 컨테이너로부터 내가 사용할 객체 받아옴
    		Programmer p = (Programmer) context.getBean("programmer");
    		Desktop d = context.getBean("desktop", Desktop.class);
    ```
    

### Bean Scope

- Bean 정의를 작성하는 것은 Bean 객체를 생성하는 것과는 다름
- Bean 범위 (Scope)를 정의해서 객체의 범위를 제어할 수 있음
    
    
    | Scope | 설명 |
    | --- | --- |
    | singletone | 기본값, Spring IoC 컨테이너에 대한 단일 객체 인스턴스 |
    | prototype | 빈을 요청할 때마다 새로운 인스턴스 생성 |
    | request | HTTP Request 주기로 bean 인스턴스 생성 |
    | session | HTTP Session 주기로 bean 인스턴스 생성 |

## Spring DI

### 의존성 주입 (생성자)

- `constructor-arg`를 이용하여 의존성 주입
- `<ref>`, `<value>`와 같이 하위 태그를 이용하여 설정 or 속성을 이용하여 설정
    
    ```xml
    <bean class="경로" id="desktop"></bean>
    <bean class="경로" id="programmer">
    	<constructor-arg ref="desktop"></constructor-arg>
    </bean>
    ```
    

### 의존성 주입 (설정자)

- `setter`를 이용하여 의존성 주입
- `<ref>`, `<value>`와 같이 하위 태그를 이용하여 설정 or 속성을 이용하여 설정
    
    ```xml
    <bean class="경로" id="laptop"></bean>
    <bean class="경로" id="programmer">
    	<property name="computer" ref="laptop"></property>
    </bean>
    ```
    

### 빈(Bean) 생성 및 설정 (@Component)

1. Bean 생성- @Component (객체를 생성할 대상 클래스에 작성해주는 Annotation)
2. 생성되는 bean의 이름은 클래스의 첫 글자를 소문자로 바꾼 것
    
    `@Component(value = “bean-name”)`으로 이름 지정 가능
    
3. 스프링은 @Component, @Service, @Controller, @Repository의 Stereotype Annotation을 제공
4. 각 @Repository, @Service, @Controller는 목적에 맞는 구체적인 사용을 위한 @Component의 확장. 목적에 맞게 구체화하여 사용하면 Spring에서 더 효율적으로 사용 가능
    
    ```xml
    ...
    	<context:component-scan base-package="경로"></context:component-scan>
    </beans>
    ```
    

### 의존성 주입 (@Autowired)

1. 의존성을 주입할 대상에 @Autowired annotation 작성
2. Spring 컨테이너 내에서 타입 매칭 시행 (컨테이너에 해당하는 타입의 bean이 있다면 매칭)

### @Autowired 사용 가능 위치

- 생성자
    
    ```java
    @Autowired
    public Programer(Computer computer) {
    	this.computer = computer;
    }
    ```
    
- Setter
    
    ```java
    @Autowired
    public void setComputer(@Qualifier("desktop")Computer computer) {
    	this.computer = computer;
    }
    ```
    
- field
    
    ```java
    @Autowired
    @Qualifier("laptop")
    private Computer computer;
    ```
    
    @Qualifier를 이용하여 같은 타입이 여러 개일 경우, bean을 지정하여 식별 가능
    

### Java Config 생성

1. Java Config 파일 생성
    - src/main/resources에 있는 applicationContext.xml 파일을 대체하기 위해 src/main/java 디렉토리에 JavaConfig.java파일 생성
    - @Configuration
        - 스프링 설정 파일로서 스프링 컨테이너를 생성하게 만드는 어노테이션
        - 해당 어노테이션이 붙은 Class는 Config파일이 되어 xml 파일과 같은 기능을 함
            
            ```java
            @Configuration
            public class JavaConfig{}
            ```
            
    - @Bean
        - Bean 객체를 만드는 어노테이션 (<bean> 태그와 같은 역할)
        - return 할 때 새로운 객체를 new를 이용해서 반환
        - 클래스는 xml의 class와 동일, 클래스 명은 xml의 id와 동일
            
            ```java
            /*
            <bean class="경로" id="testDao"></bean>
            */
            @Bean
            public TestDao testDao(){
            	return new TestDao();
            }
            ```
            
    - 의존성 부여
        - 생성자 파라미터에 의존하는 객체의 생성자를 넣음으로써 의존성을 부여 함
            
            ```java
            /*
            <bean class="경로" id="testService">
            	<constructor-arg ref="TestDao"></constructor-arg>
            </bean>
            */
            @Bean
            public TestService testService(){
            	return new TestService(testDao());
            }
            ```
            
