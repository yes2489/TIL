# 연결리스트

### 특성

- 자료의 논리적인 순서와 메모리 상의 물리적인 순서가 일치하지 않고, 개별적으로 위치하고 있는 원소의 주소를 연결하여 하나의 전체적인 자료구조를 이룬다
- 링크를 통해 원소에 접근하므로, 순차 리스트와 같이 물리적인 순서를 맞추기 위한 작업이 필요하지 않다
- 자료구조의 크기를 동적으로 조정할 수 있어, 메모리의 효율적인 사용이 가능하다.

### 노드

- 연결 리스트에서 하나의 원소에 필요한 데이터를 갖고 있는 자료 단위
- 구성 요소
    
    1) 데이터 필드
    
    - 원소의 값을 저장하는 자료구조
    - 저장할 원소의 종류나 크기에 따라 구조를 정의하여 사용
    
    2) 링크 필드
    
    - 다음 노드의 주소를 저장하는 자료구조

### 헤드

- 리스트의 시작 위치에 해당하는 노드   

# 단순 연결 리스트 (Singly Linked List)

= 단방향 연결 리스트

### 연결 구조

- 노드가 **하나**의 링크 필드에 의해 다음 노드와 연결되는 구조를 가짐
- **헤드가 가장 앞의 노드**를 가리키고, 링크 필드가 **연속적으로 다음 노드**를 가리킴
- 최종적으로 **NULL을 가리키는 노드**가 리스트의 가장 **마지막 노드**

`구현방법`

1) Head : 첫 번째 데이터를 가지는 Node     `A → B → C → D`

2) Head : 빈 데이터를 가진 더미 Node        `(Head) → A → B → C → D` 

⇒ 헤드가 항상 고정 | 구현 쉬우나 메모리 사용량 ↑

### ‘A’, ‘C’, ‘D’를 원소로 갖고 있는 리스트의 두 번째에 ‘B’ 노드를 삽입할 때

1) 메모리를 할당하여 새로운 노드 new 생성

2) 새로운 노드 new의 데이터 필드에 ‘B’ 저장

3) 삽입될 위치의 바로 앞에 위치한 노드의 링크 필드를 new에 복사(‘B’가 ‘C’ 를 바라보도록 연결)

4) new의 주소를 앞 노드의 링크 필드에 저장 (‘A’가 ‘B’를 바라보도록 연결 수정)

```java
[첫 번째 노드로 삽입]
addtoFirst(L, i) {       // 리스트 포인터 L, 원소 i
	new <- createNode();   // 새로운 노드 생성
	new.data = i;          // 데이터 필드 작성
	new.link = L;          // 링크 필드 작성
	L = new;               // 리스트의 처음으로 지정
}

[가운데 노드로 삽입]
add(L, pre, i)           // 리스트 L, 노드 pre, 원소 i
 new <- createNode();    // 새로운 노드 생성
 new.data = i;           // 데이터필드 작성
 if (L == NULL) {
	 L = new;
	 new.link = NULL;
	 } else {
		 new.link = pre.link;
		 pre.link = new;
	}
	
[마지막 노드로 삽입]
addtoLast(L, i) // 리스트 L, 원소 i
```

### ‘A’, ‘B’, ‘C’, ‘D’를 원소로 갖고 있는 리스트의 ‘B’ 노드를 삭제할 때.

# 이중 연결 리스트 (Doubly Linked List)

### 특성

- 양쪽 방향으로 순회할 수 있도록 노드를 연결한 리스트
- 두 개의 링크 필드와 한 개의 데이터 필드로 구성

### 연결 구조

# 우선순위 큐

### 우선순위 큐의 구현

- 배열을 이용한 우선순위 큐
- 리스트를 이용한 우선순위 큐

우선순위 큐의 기본 연산

- 삽입 : enQueue
- 삭제 : deQueue

### 배열을 이용한 우선순위 큐

- 배열을 이용하여 자료 저장
- 원소를 삽입하는 과정에서 우선순위를 비교하여 적절한 위치에 삽입하는 구조
- 가장 앞에 최고 우선순위의 원소가 위치

### 문제점

- 배열을 사용하므로, 삽입이나 삭제 연산이 일어날 때 원소의 재배치가 발생
- 이에 소요되는 시간이나 메모리 낭비가 큼

### 리스트를 이용한 우선순위 큐

- 연결 리스트를 이용하여 자료 저장
- 원소를 삽입하는 과정에서 리스트 내 노드의 원소들과 비교하여 적절한 위치에 노드를 삽입하는 구조
- 리스트의 가장 앞쪽에 최고 우선순위가 위치

### 배열 대비 장점

- 삽입/ 삭제 연산 이후 원소의 재배치가 필요 없음
- 메모리의 효율적인 사용 가능
