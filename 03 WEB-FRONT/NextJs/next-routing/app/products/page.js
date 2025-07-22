// products/page.js, 상품 목록이 보여지는 페이지

import Link from "next/link";

const ProductList = () => {
  // 상품 목록이 들어있는 리스트 데이터
  const productList = [3, 4];

  // 각 상품들을 <Link />로 이동할 수 있도록 변경
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>

      {/* Array.map으로 동적으로 렌더링 */}
      {productList.map((productId) => (
        <h2 key={productId}>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </h2>
      ))}
    </div>
  );
};
export default ProductList;
