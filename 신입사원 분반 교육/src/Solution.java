import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Solution {
	static List<Integer> score1;
	static List<Integer> score2;
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int TC = sc.nextInt();
		
		for (int test = 1; test <= TC; test++) {
			int N = sc.nextInt(); // 학생 수
			int min = sc.nextInt(); // 최소 인원
			int max = sc.nextInt(); // 최대 인원
			int[] arr = new int [N];
			
			for (int n = 0; n < N; n++) {
				arr[n] = sc.nextInt();
			}// 입력 끝
			
			score1 = new ArrayList<>(); // 최대값 뺀 애들
			score2 = new ArrayList<>(); // 최대값
			List<Integer> mid = new ArrayList<>();
			List<Integer> low = new ArrayList<>();
			
			//정렬
			Arrays.sort(arr);
			
			int maxNum = arr[N-1];
			
			for (int i = 0; i < N ; i++) {
				if (maxNum == arr[i]) {
					score2.add(arr[i]);
				} else {
					score1.add(arr[i]);
				}
			}
			
			for (int i = 0; i < N/3; i++) { // N/3 -> 사실상 score1이 되는 기준
				low.add(arr[i]);
			}

			
			for(int i = N/3; i < score1.size(); i++) {
				mid.add(arr[i]);
			}
				
			
			int[] resArr = {score2.size(), mid.size(), low.size()};
			
			Arrays.sort(resArr);
			
			int result = resArr[2]-resArr[1];
			
			if (resArr[0] < min) {
				System.out.println("#" + test + " -1");
			} else if (resArr[1] < min) {
				System.out.println("#" + test + " -1");
			} else if (resArr[2] < min) {
				System.out.println("#" + test + " -1");
			} else {
				System.out.println("#" + test + " " + result);
			}
			
			
			
		
		}

	}

}
