function solution(orders, course) {
  const answer = [];

  let combMap, combArr, orderArr; // comb와 getMaxOrders 함수에서 같이 사용할 변수
  for (courseNum of course) {
    combMap = new Map(); // key: 메뉴 구성, value: 주문 횟수
    combArr = Array.from({ length: courseNum }, (v) => ""); // 메뉴 조합을 임시로 저장할 배열, course 크기만큼 미리 초기화

    for (order of orders) {
      orderArr = order.split(""); // 손님이 주문했던 조합을 배열로 변경
      comb(0, 0, courseNum); // 실행 결과 courseNum에 해당하는 combMap이 완성됨
    }

    getMaxOrders(); // combMap에서 가장 많이 주문된 메뉴 구성을 찾아 answer에 넣기
  }

  // 조합 함수
  function comb(cnt, start, course) {
    // course 개수 만큼 조합이 완성되었을 때
    if (cnt === course) {
      let candidate = [...combArr].sort().join("");

      if (combMap.has(candidate)) {
        combMap.set(candidate, combMap.get(candidate) + 1);
      } else {
        combMap.set(candidate, 1);
      }

      return;
    }

    for (let i = start; i < orderArr.length; i++) {
      combArr[cnt] = orderArr[i];
      comb(cnt + 1, i + 1, course);
    }
  }

  // 가장 많이 함께 주문된 메뉴 구성 찾기
  function getMaxOrders() {
    let maxCnt = 0;

    // combMap의 value 중 가장 큰 값(maxCnt) 구하기
    for (val of combMap.values()) {
      if (maxCnt < val) maxCnt = val;
    }

    // maxCnt와 같은 value를 가지는 key(최종 메뉴 구성) 구하기
    for ([key, val] of combMap) {
      if (val >= 2 && val === maxCnt) answer.push(key);
    }
  }

  return answer.sort();
}
