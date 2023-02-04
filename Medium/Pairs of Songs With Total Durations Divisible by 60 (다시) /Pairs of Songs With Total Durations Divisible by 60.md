## 문제 설명
i번째 노래의 길이가 time[i]인 노래 목록이 주어집니다.
이 때 두 노래 길이의 합이 60으로 나누어 떨어지는 모든 조합의 개수를 리턴하세요. 즉, 인덱스 i와 j가 있을 때, i < j이고 (time[i] + time[j]) % 60 == 0인 개수를 리턴합니다.



## 해결방법
- 시간복잡도 o(n^2)이 나오는 코드로 해봤는데 시간 초과 뜸 마지막테케 통과 불가능
- 수학적인 솔루션으로 다른 사람 풀이봄
  - https://docs.google.com/document/d/15RsMCNYU4zkGxrbB5rmCC8aqENrdnBgwkIR5Elq8ahE/edit

## 다른사람 풀이 
1. cnts 배열을 사이즈 60 짜리를 만든다.
2. 현재 time[i]와 60의 mod를 구한다.
3. 60- 현재 mod 한값은 조합의 한쌍이 될수있음 => 이게 핵심
4. cnts[mod]+=1 해서 쌍을 이루게 끔 만듬