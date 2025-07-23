import SideNav from "@/app/ui/dashboard/sidenav";

// ({ children }: { children: React.ReactNode }) = 타입 스크립트에서 props의 타입을 명시적으로 지정
// SideNav는 dashboard 하위 경로의 공통 레이아웃으로 사용됨 -> 공통적으로 적용되는 UI 래퍼
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
