# 1월 30일

## House Robber
- https://leetcode.com/problems/house-robber/


## 문제 설명
- 집의 현금양을 나타내는 nums배열이 주어질때 경보시스템을 작동시키지않고 훔칠 수있는 최대금액
  - 인접한 두 집을 동시에 침범하면 작동한다.
## 해결방법
> dp로 풀었다
- 양 옆은 선택이 불가능하므로 dp[i-2]을 점화식으로 두어서 해결이가능하다 , 단 배열이 네개일경우 i-3일경우도 고려야함
- dp[i] = 현재까지 훔칠수있는 최대 금액이다

## 해맷던점
- dp[i-3] 이 들어오는 경우를 고려안함


## Insert Interval (일주일뒤 다시풀기)

## 문제설명
- 주어진 intervals 배열의 원소 구간이 new_interval와 겹치지 않는 배열을 만들어라

## 해결방법
- 다른사람 풀이 봄 (https://leetcode.com/problems/insert-interval/solutions/3056859/c-easy-intutive-solution-in-o-nlogn-time-complexity/)

## 다른사람 풀이
1. intervals 배열에 new Intervals를 넣고 오름차순 정렬한다.
2. index를 0으로 두고 , 해당 index의 끝점과 현재 순회중인 i의 시작점을 비교한다
3. 2번에서 비교할떄 현재 index의 끝점이 더 커버리면 , 현재 index의 끝점을 현재 순회중인 i의 끝점으로 둔다.
4. 3번 조건이 만족하지 않으면 변경이 불필요하므로 , 

## 해맷던점
- 하드코딩하니까 시간도 오래걸리고 예외상황이 너무많이 발생했음 .. 도저히 정답에 맞는 솔루션 찾기힘들어서 다른사람꺼봄
