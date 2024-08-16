import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int cnt = sc.nextInt(); // 스위치 개수
		int[] arr = new int[cnt+1]; // 스위치 배열
		for (int i = 1; i < arr.length; i++) {
			arr[i] = sc.nextInt();
		} // 초기 스위치 상태
		
		int str = sc.nextInt(); // 학생 수
		for (int i = 0; i < str; i++) {
			int gender = sc.nextInt(); // 성별
			if (gender == 1) {// 남자일 경우
				int num = sc.nextInt(); // 배수
				for (int j = 1; j < arr.length; j++) {
					if (j%num == 0) {
						if (arr[j] == 1) {
							arr[j] = 0;
						} else {
							arr[j] = 1;
						}
					}
				}
			}
			else {// 여자일 경우
				int num = sc.nextInt(); // 확인 할 스위치 위치
				for (int j = 1; j < arr.length; j++) {
					if (arr[num-j] <= 1 && arr[num - j] == arr[num + j]) {
						if(arr[num-j] == 0) {
							arr[num-j]=1;
							arr[num+j]=1;
						} else {
							arr[num-j]=0;
							arr[num+j]=0;
						}
					} else {
						if (arr[num] == 0) {
							arr[num] = 1;
						} else {
							arr[num] = 0;
						}
					}
				}
			}
		}
		for (int i = 1; i < arr.length; i++) {
			System.out.print(arr[i]+" ");
		}
	}

}
