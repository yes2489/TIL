# 스택

### 스택의 특성

- 물건을 쌓아올리듯 자료를 쌓아 올린 형태의 자료구조
- 스택에 저장된 자료는 선형 구조를 가짐
    - 선형 구조 : 자료 간의 관계가 1대 1의 관계를 가짐
    - 비선형 구조 : 자료 간의 관계가 1대 N의 관계를 가짐 (ex. 트리)
- 스택에 자료를 삽입(push)하거나 스택에서 자료를 꺼낼(pop) 수 있음
- 마지막에 삽입한 자료를 가장 먼저 꺼냄 (**LIFO**, Last-In-First-Out)

### 스택을 프로그램에서 구현하기 위해 필요한 자료구조와 연산

⇒ 추상화와 관련 → 마지막 원소가 가장 중요 (핵심 관심사에만  접근)

⇒ 캡슐화와 관련 → 마지막 원소 외에는 접근할 수 없게 만드는 것

- 자료구조 : 자료를 선형으로 저장할 저장소 (배열, 리스트)
    - C언어에서는 배열을 사용할 수 있음
    - 저장소 자체를 스택이라고 부르기도 함
    - 스택에서 마지막 삽입된 원소의 위치를 **top**이라고 부름
- 연산
    - 삽입 : 저장소에 자료를 저장 (push)
    
    ```java
    static void push(int num) {
    	if(isFull()){
    	System.out.println("스택에 공간이 없습니다.");
    	return;
    	} else {
    	return stack[++top] = num;
    	}
    }
    ```
    
    - 삭제 : 저장소에서 자료를 꺼냄 (pop)
    
    ```java
    static int pop() {
    	if(isEmpty()){
    	System.out.println("스택이 비어있습니다. ");
    	return -1;
    	} else {
    	return stack[top--];
    }
    ```
    
    - 스택이 공백인지 아닌지 확인하는 연산 `.isEmpty` ⇒ (`top = -1`) == 공백
    
    ```java
    static Boolean void isEmpty() {
    	return top == -1;
    	}
    ```
    
    - 스택의 top에 있는 item(원소)을 반환하는 연산 `.peek`
    
    ```java
    static int void peek() {
    return stack[top];
    }
    ```
    
    - `size = top + 1`
    
- 스택 구현 고려사항
    - 1차원 배열
        - 구현이 용이하나 스택의 크기를 변경하기 어려움
            
            → 저장소를 동적으로 할당하여 스택 구현 
            
    - 동적 연결 리스트로 구현 (ArrayList, LinkedList)
        - 구현이 복잡하나 메모리를 효율적으로 사용 함

# 스택 응용 

## Function call

### 프로그램에서 함수의 호출과 복귀에 따른 수행 순서를 관리

- 가장 마지막에 호출된 함수가 가장 먼저 실행을 완료하고 복귀하는 후입선출 구조이므로, 후입선출 구조의 스택을 이용하여 수행 순서 관리
- 함수 호출이 발생하면(**push**) 호출한 함수 수행에 필요한 지역변수, 매개변수 및 수행 후 복귀할 주소 등의 정보를 스택 프레임에 저장하여 시스템 스택에 삽입
- 함수의 실행이 끝나면 시스템 스택의 top 원소(스택 프레임)를 삭제(**pop**)하면서 프레임에 저장되어있던 복귀 구조를 확인하고 복귀
- 함수 호출과 복귀에 따라 이 과정을 반복하여 전체 프로그램 수행이 종료되면 시스템 스택은 공백 스택이 됨

## 실행 취소

1. 작업 :  undo stack push
2. Ctrl Z : undo pop → redo push
3. Ctrl Y : redo pop → undo push

# 계산기

### 계산기

- 문자열로 된 계산식이 주어질 때, 스택을 이용하여 이 계산식의 값을 계산할 수 있음

### 1. 중위 표기식의 후위 표기식 변환

- 중위표기법(infix notation) : 연산자를 피연산자의 가운데 표기하는 방법
- 후위표기법(postfix notation) : 연산자를 피연산자 뒤에 표기하는 방법

1) 수식의 각 연산자에 대해서 우선순위에 따라 괄호를 사용하여 다시 표현

2) 각 연산자를 그에 대응하는 오른쪽 괄호의 뒤로 이동

3) 괄호를 제거

```java
EX. A*B-C/D
1) ( (A * B) - (C / D) )
2) ( (AB)*(CD)/ )-
3) AB*CD/-
```

### 스택 이용

1. 입력 받은 중위 표기식에서 토큰을 읽음
2. 토큰이 피연산자이면 토큰을 출력
3. 만약 top에 연산자가 없으면 push
    
    연산자가 나오면 top이 가리키는 우선순위가 작을때까지 pop
    
4. 토큰이 오른쪽 괄호 ’)’이면 스택 top에 왼쪽 괄호 ‘(’가 올때까지 스택에 pop연산을 수행하고 pop한 연산자를 출력
    
    왼쪽 괄호를 만나면 pop만하고 출력X
    
5. 중위 표기식에 더 읽을 것이 없다면 중지하고, 더 읽을 것이 있다면 1부터 다시 반복
6. 스택에 남아있는 연산자들을 모두 pop 하여 출력
    - **스택 밖의 왼쪽 괄호**는 우선순위가 가장 **높음**
    - **스택 안의 왼쪽 괄호**는 우선순위가 가장 **낮음**
    
    ```java
    static map<Character, Integer> map = new Hashmap<>();
    static {
    	map.put('+', 1);
    	map.put('-', 1);
    	map.put('*', 2);
    	map.put('/', 2);
    }
    
    static String infixToPostfix(String infix){
    	String postfix = ""; // 출력받을 변수
    	Stack<Character> stack = new Stack<>();
    	
    	for (int i = 0; i < infix.length(); i++){
    		char c = infix.charAt(i);
    		
    		// 피연산자가 나오는 경우 바로 출력
    		if ('0' <= c && c <= '9'){
    			postfix += c;
    		} else if (c == '(') { // 여는 괄호는 stack에 push
    			stack.push(c);
    		} else if (c == ')') { // 닫는 괄호는 여는 괄호가 나올 때 까지 pop
    			char popItem = stack.pop(); // 첫 번째 비교 대상 pop
    			while (c != '(') {
    			postfix += popItem;
    			popItem = stack.pop(); // --> while문 확인
    			}
    			// 연산자가 나오는 경우
    		} else {
    			// 스택의 top에 우선순위가 낮은 연산자가 올 때 까지 pop
    			while(!stack.isEmpty() &&
    						stack.peek() != '(' &&
    						map.get(stack.peek()) >= map.get(c)){
    					char popItem = stack.pop();
    					postfix += popItem;
    				}
    				stack.push(c);
    			}
    		}
    		// 스택 비워주기
    		while (!stack.isEmpty()){
    			postfix += stack.pop();
    		}
    		return postfix;
    	}	
    ```
    
    ### 2. 후위표기법의 수식을 스택을 이용하여 계산
    
    1. 피연산자를 만나면 스택에 push
    2. 연산자를 만나면 필요한 만큼의 피연산자를 스택에서 pop하여 연산하고, 연산 결과를 다시 스택에 push
    3. 수식이 끝나면, 마지막으로 스택을 pop하여 출력
    
    ```java
    static int evalPostfix(String postfix) {
    
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < postfix.length(); i++) {
    	char c = postfix.charAt(i);
    	
    	//피연산자
    	if ('0' <= c && c <= '9'){
    		stack.push(c - '0'); // c는 문자이기때문에 '0'을 빼줘야 함
    	} else {
    		int num2 = stack.pop();
    		int num1 = stack.pop();
    		int res;
    		
    		//연산자
    		if ( c == '+'){
    			res = num1 + num2;
    		} else if ( c == '-' ){
    			res = num1 - num2;
    		} else if ( c == '*'){
    			res = num1 * num2;
    		} else {
    			res = num1 / num2;
    		}
    		stack.push(result);
    		}
    	}
    	return stack.pop(); // 계산 결과
    }	
    ```
    

# 재귀호출

### 재귀 호출 : 자기 자신을 호출하여 순환 수행되는 것

- 함수 호출은 메모리 구조에서 스택을 사용 (이름만 같은 다른 메서드)
    - 간단한 문제에 대해서는 반복문에 비해 메모리 및 속도에서 성능 저하가 발생
- 일반적으로 기본부분 (Base case), 재귀부분(Recursive case)로 구성
    - Base case : 재귀 호출에서 빠져나가기 위한 조건
    - Recursive case : 자신을 호출하는 부분(Base case로 유도)
- 재귀적 프로그램을 작성하는 것은 반복 구조에 비해 간결하고 이해하기 쉬움

### factorial

-n에 대한 factorial : 1부터 n까지의 모든 자연수를 곱하여 구하는 연산

```java
n! = n x (n-1)!
	(n-1)! = (n-1) * (n-2)!
	(n-2)! = (n-2) * (n-3)!
	
	...
	
	2! = 2*1!
	1! = 1
```

### 피보나치 수를 구하는 재귀함수

0과 1로 시작하고 이전의 두 수 합을 다음 항으로 하는 수열을 피보나치라고 함

```java
public static int fibo(int n) {
	if (n <= 1){
		return n;
	} else {
		return fibo(n - 1) + fibo (n - 2);
	}
}
```

→ 코드가 간결해지긴 하지만 엄청난 중복 호출 존재 (시간 복잡도 O(2ⁿ))

### Memoization

배열을 활용 → 실행 시간을 O(n)으로 줄일 수 있음

```java
memo를 위한 배열을 할당
```