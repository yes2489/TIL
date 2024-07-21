## 배열 (Array)
### 배열의 선언과 생성
#### 배열 변수 선언
```java
int[] students; // 1. 배열 변수 선언
students = new int[5]; // 2. 배열 생성
```
 - 배열을 사용하려면 `int[] students;`와 같이 배열 변수를 선언해야 함
 - `int[] students;`와 같은 배열 변수에는 배열을 담을 수 있음
#### 배열 생성
 - 배열 생성 후 `new int[크기]`로 배열의 크기를 지정해주어야 함
 - `new`는 새로 생성한다, `int[5]`는 `int`형 변수 5개라는 뜻으로 `int`형 변수 5개를 다룰 수 있는 배열을 새로 만든다는 뜻임
#### 배열 초기화
 - `new int[5]`라고 하면 총 5개의 `int`형 변수가 만들어지며 배열 생성 시 내부값이 자동으로 초기화 됨
 - 숫자는 `0`, `boolean`은 `false`, `String`은 `null`로 초기화 됨
#### 배열 참조값 보관
 - `new int[5]`로 배열을 생성하면 _*배열의 크기만큼 메모리를 확보*_ 함
    - `int`형을 5개 사용하면 `4byte * 5` → `20byte`를 확보
 - 배열을 생성하고 나면 해당 배열에 접근할 수 있는 메모리의 참조값(주소)를 반환 함
 - `int[] students` 변수는 `new int[5]`로 생성한 배열의 참조값을 가지고 있음
 * 배열의 참조값 확인 방법 → `System.out.println(배열변수이름);`

### 배열 사용
#### 인덱스(Index)
 - 배열은 0부터 시작 (ex. int[5]의 인덱스 : `0, 1, 2, 3, 4`)
 - 사용 가능한 인덱스의 범위 : `0 ~ (n-1)`
 - 배열 변수의 사용 법 : `[]` 사이에 인덱스 번호를 입력
 * 인덱스 허용 범위를 넘어설 때 발생하는 오류 : `ArrayIndexOutOfBoundsException`
#### 배열에 값 대입
 ```java
 students[0] = 90; // 1. 배열에 값을 대입
 메모리주소값[0] = 90; // 2. 변수에 있는 참조 값을 통해 실제 배열에 접근, 인덱스를 사용해서 해당 위치의 요소에 접근, 값 대입
 ```
#### 배열 값 읽기
 ```java
 // 1. 변수 값 읽기
 System.out.println("학생1 점수 : " + students[0]);
 // 2. 배열에 있는 참조값을 통해 실제 배열에 접근, 인덱스를 사용해서 해당 위치의 요소에 접근
 System.out.println("학생1 점수 : " + 메모리주소값[0]);
 // 3. 배열의 값을 읽어옴
 System.out.println("학생1 점수 : " + 90);
 ```
 - 참조값을 통해 실제 배열에 접근 후 인덱스를 통해 원하는 요소를 찾아 옴

### 배열 리펙토링
```java
int[] students; // 배열 변수 선언
students = new int[5]; // 배열 생성
		
// 변수 값 대입
students[0] = 90;
students[1] = 80;
students[2] = 70;
students[3] = 60;
students[4] = 50;

// 변수 값 사용
System.out.println("학생1 점수 : " + students[0]);
System.out.println("학생2 점수 : " + students[1]);
System.out.println("학생3 점수 : " + students[2]);
System.out.println("학생4 점수 : " + students[3]);
System.out.println("학생5 점수 : " + students[5]);
```
#### 초기화
 - 배열은 `{}`를 사용해서 생성과 동시에 편리하게 초기화 하는 기능을 제공
 ```java
 int[] students; // 배열 변수 선언
 students = new int[]{90, 80, 70, 60, 50} //배열 생성과 초기화
 …
 ```
#### 변수 값 사용
> 
```java
…
// 변수 값 사용
for (int i = 0; i < students.length; i++){
    System.out.println("학생" + (i + 1) + " 점수 : " + students[i]);
}
```
 - `배열변수명.length`
    - 배열의 길이를 제공하는 특별한 기능 (조회만 가능)

### 2차원 배열
 - `int[][] arr = new int[2][3]`와 같이 선언 및 생성
 - `arr[1][2]`와 같이 사용하는데, 먼저 행 번호를 찾고 열 번호를 찾으면 됨
    - `arr[행][열]`, `arr[row][column]`

 | 0 | 1 | 2 |
 |---|---|---|
 | 5 | 4 | 3 |
 - `arr[0][0]` = 0   |   `arr[1][0]` = 5
 - `arr[0][1]` = 1   |   `arr[1][1]` = 4
 - `arr[0][2]` = 2   |   `arr[1][2]` = 3

### 2차원 배열 리펙토링
```java
// 2x3 2차원배열 생성
int[][] arr = new int[2][3]; // 행2, 열3

arr[0][0] = 1; // 0행, 0열
arr[0][1] = 2; // 0행, 1열
arr[0][2] = 3; // 0행, 2열
arr[1][0] = 4; // 1행, 0열
arr[1][1] = 5; // 1행, 1열
arr[1][2] = 6; // 1행, 2열

// 0행 출력
System.out.print(arr[0][0] + " "); //0열 출력
System.out.print(arr[0][1] + " "); //1열 출력
System.out.print(arr[0][2] + " " + "\n"); //2열 출력

// 1행 출력
System.out.print(arr[1][0] + " "); //0열 출력
System.out.print(arr[1][1] + " "); //1열 출력
System.out.print(arr[1][2] + " "); //2열 출력
```
#### 행 출력 반복
```java
// n행 출력
for (int row = 0; row < 2; row++) {
	System.out.print(arr[row][0] + " "); //0열 출력
	System.out.print(arr[row][1] + " "); //1열 출력
	System.out.print(arr[row][2] + " " + "\n"); //2열 출력
}
```
#### 열 출력 반복
```java
for (int row = 0; row < 2; row++) { // 행 탐색
	for (int col = 0; col < 3; col++) { // 열 탐색
		System.out.print(arr[row][col] + " ");
	}
		System.out.println(); // 한 행이 끝나면 라인을 변경
}
```
#### 초기화
```java
// 2x3 2차원배열 생성
int[][] arr = {
	{1, 2, 3},
	{4, 5, 6}
}

for (int row = 0; row < arr.length; row++) { // 행 탐색
	for (int col = 0; col < arr[row].length; col++) { // 열 탐색
		System.out.print(arr[row][col] + " ");
	}
		System.out.println(); // 한 행이 끝나면 라인을 변경
}
```
 - for문에서 배열의 길이 활용
	- `arr.length`는 **행의 길이**를 뜻함
	- `arr[row].length`는 **열의 길이**를 뜻함

#### 값 입력
```java
// 2x3 2차원배열 생성
int[][] arr = new int[2][3];

int i = 1;
for (int row = 0; row < arr.length; row++){
	for (int column = 0; column < arr[row].length; col++){
		arr[row][column] = i++;
	}
}
```

### 향상된 for문 (for-each)
```java
for (변수 : 배열){
	// 배열의 요소를 순회하면서 수행 할 작업
}
```
 - 향상된 for문은 배열의 인덱스를 사용하지 않고도 배열의 요소를 순회할 수 있기 때문에 코드가 간결하고 가독성이 좋음
 - 단, 인덱스 값을 직접 사용해야 하는 경우에는 향상된 for문 사용 불가