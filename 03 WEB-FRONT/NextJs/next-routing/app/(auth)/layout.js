"use client"; // 이 파일은 클라이언트 컴포넌트로 동작하도록 적용
// nalayout

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot-Password?", href: "/forgot-password" },
];

export default function Layout({ children }) {
  // 현재 path의 이름을 가져오는 훅
  const pathName = usePathname();
  console.log(pathName);
  return (
    <section>
      {navLinks.map((link) => {
        // pathName이 link.href의 값으로 시작할 경우,
        const isActive = pathName.startsWith(link.href);

        return (
          <Link
            className={`text-2xl ${isActive ? "text-red-500" : ""}`}
            href={link.href}
            key={link.name}
          >
            {link.name}&nbsp;
          </Link>
        );
      })}
      {children}
    </section>
  );
}
