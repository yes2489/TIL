# Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## 새 프로젝트 만들기

```shell
npm install -g pnpm

npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

cd nextjs-dashboard

```

## 개발 서버 실행

```shell
# 프로젝트 패키지 설치
pnpm i

# 개발 서버 시작
pnpm dev
```

## CSS 스타일링

- `/app/ui/global.css`: 애플리케이션의 모든 CSS 규칙이 담겨있는 파일 (루트 레이아웃)
  ex) CSS 재설정 규칙, 링크와 같은 HTML 요소에 대한 사이트 전체 스타일 등
- **tailwind**: React 코드에서 직접 유틸리티 클래스를 작성하여 개발 프로세스를 가속화하는 CSS 프레임워크. 클래스 이름을 추가하여 요소의 스타일을 지정할 수 있음
- CSS 스타일은 전역적으로 공유되나, 각 클래스는 각 요소에 개별적으로 적용 됨.
  -> 요소를 추가하거나 삭제하더라도 별도의 스타일시트 유지 관리, 스타일 충돌, 애플리케이션 확장에 따른 CSS 번들 크기 증가에 대한 걱정↓
