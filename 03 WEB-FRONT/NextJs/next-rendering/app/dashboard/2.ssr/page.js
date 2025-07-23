import Dashboard from "@/app/components/2.ssr/Dashboard";

export const dynamic = "force-dynamic";

export default async function SSRPage() {
  // 서버 컴포넌트에서 데이터 가져오기(fetching)
  // SSG -> 빌드 시점에 미리 요청 해 둠 (export const dynamic = 'auto')
  //     -> 잘 변하지 않는 데이터
  // SSR -> 요청 시점에 동작 (export const dynamic = 'force-dynamic')
  //     -> (동적) 가변 데이터
  // ex) 블로그 : ISR(요청 주기마다 새로운 데이터 추가된 내역이 있으면 갱신)
  const res = await fetch("http://localhost:4000/api/data?delay=2000");
  const data = await res.json();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Server-Side Rendering</h1>
      <Dashboard data={data} />
    </div>
  );
}
