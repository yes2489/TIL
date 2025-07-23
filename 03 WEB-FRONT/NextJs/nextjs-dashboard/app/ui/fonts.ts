// 애플리케이션 전체에서 사용 될 글꼴을 보관
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

// 글꼴 굵기 지원하는 보조 글꼴 Lusitana추가
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
