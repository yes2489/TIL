import Dashboard from "@/app/components/4.rsc/Dashboard";
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
      <h1 className="text-xl font-bold mb-4">React Server Component</h1>
      {/* 렌더링을 지연시킬 부분만 Suspense로 감싸줌 */}
      <Suspense fallback={<p>Loading...</p>}>
        <DashboardWithData />
      </Suspense>
    </div>
  );
}
