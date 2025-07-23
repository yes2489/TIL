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

## 글꼴 및 이미지 최적화

### `next/font`

- 사용자 정의 글꼴 추가 → 빌드 시 글꼴 파일을 다운로드하여 다른 정적 asset과 함께 호스팅 → 사용자가 애플리케이션에 방문할 때 글꼴에 대한 추가 네트워크 요청이 발생하지 않음

### `next/image`

- 이미지 추가
- `<Image>`: HTML `<img>`태그의 확장
  - 이미지가 로딩될 때 레이아웃이 자동으로 이동하는 것을 방지
  - 작은 뷰포트가 있는 기기에 큰 이미지가 전송되는 것을 방지하기 위해 이미지 크기 조절
  - 기본적으로 이미지를 지연 로딩 시킴
  - WebP와 같은 최신 형식으로 이미지 제공

## 레이아웃 및 페이지 만들기

### 중첩 라우팅

- Next.js는 폴더를 사용하여 중첩된 경로를 생성하는 `파일 시스템 라우팅`을 사용
- 각 폴더는 `URL 세그먼트`에 매핑되는 `경로 세그먼트`를 나타냄
- `layout.tsx` 및 `page.tsx` 파일을 사용하여 각 경로에 대해 별도 UI를 만들 수 있음
- `page.tsx`는 React 컴포넌트를 보내는 Next.js 파일이며, 경로에 접근하려면 해당 파일이 필요함
- 중첩 경로를 만들기 위해서는 폴더를 서로 중첩하고 그 내부에 `page.tsx`를 추가하면 됨

### 레이아웃

- `layout.tsx`에서 `SideNav` + `children` 구조로 공통 레이아웃 구성
- **부분 렌더링**: 페이지 전환 시 레이아웃은 유지되고 컨텐츠만 교체됨

## 페이지 간 탐색

**탐색을 최적화하는 이유**: `<a>` 태그 사용 시, 전체 페이지 새로 고침 현상이 발생

### `next/link`

- `<Link />`를 사용하여 페이지를 연결할 수 있음
- 자동 코드 분할 및 사전 페칭
  - Next.js는 경로 세그먼트별로 애플리케이션을 자동으로 코드를 분할 함
  - 경로별로 코드 분할 시 페이지가 분리 됨
    → 특정 페이지에서 오류가 발생하더라도 나머지 애플리케이션은 계속 작동 / **브라우저가 파싱해야 할 코드도 줄어 애플리케이션 속도가 향상**됨
  - `<Link>` 브라우저 뷰포트에 구성 요소가 나타날 때마다 Next.js가 자동으로 연결된 경로의 코드를 백그라운드에서 미리 가져옴
    → 사용자가 링크를 클릭할 쯤 대상 **페이지의 코드가 이미 백그라운드에 로드**되어 있어 페이지 전환이 거의 즉각적으로 이루어짐

### `usePathname()`

- **활성 링크 표시**: 사용자가 현재 어떤 페이지에 있는지를 시각적으로 표시하기 위해 네비게이션 메뉴에서 현재 경로와 일치하는 항목을 강조함 (ex. 현재 페이지는 파란색, 나머지는 회색 등).
- **`usePathname()`**: 현재 URL 경로(pathname)를 반환하는 Next.js의 클라이언트 훅으로, 활성 링크 구현에 유용함.
- 이 훅은 **React Hook**이기 때문에, 해당 코드를 사용하는 컴포넌트는 반드시 **클라이언트 컴포넌트(`'use client'`)**여야 함.
