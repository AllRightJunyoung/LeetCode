## 문제설명
- 주어진 intervals 배열의 원소 구간이 new_interval와 겹치지 않는 배열을 만들어라

## 해결방법
- 다른사람 풀이 봄 (https://leetcode.com/problems/insert-interval/solutions/3056859/c-easy-intutive-solution-in-o-nlogn-time-complexity/)


## 다른사람 풀이
1. intervals 배열에 new Intervals를 넣고 오름차순 정렬한다.
2. index를 0으로 두고 , 해당 index의 끝점과 현재 순회중인 i의 시작점을 비교한다
3. 2번에서 비교할떄 현재 index의 끝점이 더 커버리면 , 현재 index의 끝점을 현재 순회중인 i의 끝점으로 둔다.
4. 3번 조건이 만족하지 않으면 변경이 불필요하므로 , 인덱스를 한칸 이동시킨뒤 원상복구시킴 

## 해맷던점
- 하드코딩하니까 시간도 오래걸리고 예외상황이 너무많이 발생했음 .. 도저히 정답에 맞는 솔루션 찾기힘들어서 다른사람꺼봄