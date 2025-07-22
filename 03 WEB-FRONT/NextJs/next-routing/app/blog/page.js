export default async function Page() {
  // 로딩 UI를 확인하기 위해 의도적으로 2초 지연시키는 코드
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div>블로그 메인 페이지</div>;
}
