// 사용자와의 인터렉션이 있을 경우 use client를 명시
"use client";

import { useRouter } from "next/navigation";

// :3000/order-product
export default function Page() {
  const router = useRouter();
  const clickHandler = () => {
    // 주문이 성공하였을 경우, root 페이지로 라우팅
    router.push("/");
    // 단순 뒤로 가기는 back(), 히스토리 기록을 남기지 않는 replace()
  };
  return (
    <div>
      <h1>상품 주문</h1>
      <button onClick={clickHandler}>주문하기</button>
    </div>
  );
}
