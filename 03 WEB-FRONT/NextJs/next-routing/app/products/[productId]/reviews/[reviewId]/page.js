import { triggerNotFound } from "./_utils/route-util";

// 컴포넌트 이름은 해당 페이지를 나타내는 이름으로 적당하게 지으면 됨
export default async function ReviewDetail({ params }) {
  const { productId, reviewId } = await params;

  // 별도의 유틸 함수로 분리
  triggerNotFound(reviewId);

  return (
    <div>
      상품 {productId}의 {reviewId}번째 리뷰
    </div>
  );
}
