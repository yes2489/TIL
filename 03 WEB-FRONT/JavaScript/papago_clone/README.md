## 📘 프로젝트 개요

Papago 번역 기능을 클론 구현하며 API 연동 흐름과 DOM 기반 이벤트 처리 구조를 학습한 프로젝트입니다.   
자동 언어 감지와 번역 요청을 XMLHttpRequest로 직접 구현하여 비동기 처리와 클라이언트-서버 간 통신 구조를 이해하는 데 중점을 두었습니다.   
현재는 TIL에서 관리 중이며, 기능 보완 후 별도 레포로 분리 예정입니다.

## 요구사항 명세

| 항목 | 처리 여부 | 적용 방식/ 보완 설명 |
| --- | --- | --- |
| 언어 감지 기능 | ✅ | `isTypingDone()`에서 `/detect` 호출 후 자동 선택값 반영 (`updateLanguageSelect`) |
| 텍스트 번역 기능 | ✅ | 감지된 언어와 select 값으로 `/translate` 호출, 번역 결과는 `answerBox`에 출력 |
| 비동기 처리 `XHR` | ✅ | 모든 서버 요청은 `XMLHttpRequest`로 구성 (fetch, axios 미사용) |
| 에러 핸들링 | ⚠️ | API 응답 실패 시 콘솔에만 출력됨 |
| API Key 노출 방지 | ✅ | `.env`에 `CLIENT_ID`, `CLIENT_SECRET` 저장 → 서버에서만 참조 |
| 함수 별 주석 작성 | ✅ | 모든 주요 함수에 JSDoc 스타일 주석 처리 (`/** */` 사용) |

## 기능 설계 및 구현

## 🌐 언어 감지 기능

### 기능 흐름

- `input` 발생 시 1초 대기 → `handleTypingDone()` 호출
- `/detect` 요청 → 감지된 언어 응답
- `<select name="setLang">`에서 해당 옵션 선택
- 감지된 언어 없거나 공백 입력 시 → 첫 번째 옵션(auto)으로 초기화

### 적용 코드

```jsx
function updateLanguageSelect(lang) {
  const options = document.querySelector("select[name=setLang]").options;
  let found = false;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === lang) {
      options[i].selected = true;
      found = true;
    } else {
      options[i].selected = false;
    }
  }
  if (!found) {
    options[0].selected = true; // fallback: 자동 감지
  }
}
```

## 🈯 텍스트 번역 기능

### 기능 흐름

- `/detect`로 감지된 언어와 사용자가 선택한 언어를 조합
- `/translate`로 `source`, `target`, `text` 전송
- 응답 받은 `translatedText`를 `answerBox.value`에 반영

### 적용 포인트

- 감지와 번역 흐름은 `xhr.onload()` 내부에서 순차적으로 연결
- 번역 API는 `application/x-www-form-urlencoded` 방식 사용

## ⚡ 비동기 처리 (`XMLHttpRequest`)

- 모든 API 호출은 `XMLHttpRequest` 기반으로 수동 구성
- `xhr.onload`, `xhr.onerror` 통해 응답 및 오류 제어
- JSON 응답은 `JSON.parse()` 후 처리

## ❗ 에러 핸들링 (보완 예정)

### 현재 구현 방식

- `xhr.status !== 200` 또는 `.onerror` 발생 시 `console.error()` 출력
- 사용자에게 오류 메시지를 직접 보여주진 않음

## 🔒 API Key 노출 방지

- `.env` 파일에 다음과 같이 저장:
    
    ```
    CLIENT_ID=네이버_클라이언트_ID
    CLIENT_SECRET=네이버_클라이언트_SECRET
    ```
    
- 서버(`server.js`)에서는 `process.env.CLIENT_ID` 등으로만 접근
- 클라이언트에는 절대 노출되지 않음 (XHR 요청은 서버에서만 발행)

## 📝 함수별 주석 작성

- 모든 함수에 `JSDoc` 형식 문서화 주석 작성 완료