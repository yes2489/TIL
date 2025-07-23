import Dashboard from "@/app/components/2.ssr/Dashboard";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function fetchData() {
  const res = await fetch("http://localhost:4000/api/data?delay=2000");
  return res.json();
}

async function DashboardWithData() {
  const data = await fetchData();
  return <Dashboard data={data} />;
}

export default async function StreamingPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Streaming SSR Rendering</h1>
      {/* 렌더링을 지연시킬 부분만 Suspense로 감싸줌 */}
      {/* 페이지 전체를 로딩하려면 loading.js 사용 / loading.js는 server component에서만 쓸 수 있음 */}
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <DashboardWithData />
      {/* </Suspense> */}
    </div>
  );
}
