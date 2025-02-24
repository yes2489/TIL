# Office Olympics

사내 팀 빌딩을 위한 게임형 챌린지 플랫폼

## 💡 프로젝트 소개

Office Olympics는 기업 내 팀워크 강화와 건전한 경쟁을 촉진하기 위한 웹 기반 플랫폼입니다. 다양한 챌린지를 통해 팀원들의 참여를 유도하고, 실시간 순위표와 댓글 시스템으로 소통을 활성화합니다.

### 개발 기간 및 인원

- **진행 기간**: 2024.11.19 - 2024.11.26 (1주)
- **팀 구성**: 프론트엔드 1명, 백엔드 1명
- **담당 역할**: 백엔드 개발
  - RESTful API 설계 및 구현
  - 데이터베이스 설계 및 MyBatis 매핑 구현
  - 사용자 인증/인가 시스템 구현 (SHA-256, Session 기반)
  - 계층형 댓글 시스템 설계 및 구현
  - 실시간 점수 집계 및 순위 시스템 개발
  - API 문서화 (Swagger)

## 🛠 기술 스택

### Backend

- **Framework**: Spring Boot 3.3.5
- **Language**: Java 17
- **Database**: MySQL + MyBatis
- **Security**: SHA-256 해싱, Salt 처리
- **Documentation**: Swagger

## 🌟 주요 기능 및 구현 사항

### 1. 인증 시스템 구현

- **SHA-256 해싱과 Salt 처리를 통한 비밀번호 보안**

  - 사용자별 고유 Salt 생성 및 해시 조합으로 보안성 강화
  - 한국인터넷진흥원(KISA) 권장 알고리즘 채택
  - HashUtil 클래스를 통한 체계적인 암호화 처리

- **세션 기반 인증**
  - 세션 하이재킹 방지를 위한 보안 설정 구현
  - 세션 고정 공격 방지를 위한 새로운 세션 ID 생성 로직 구현

### 2. 댓글 시스템

- **계층형 댓글 구조 설계 및 구현**
  - commentGroup과 commentDepth를 활용한 대댓글 기능
  - Soft Delete 패턴 적용으로 데이터 정합성 유지
  - 삭제된 댓글과 하위 댓글의 관계 처리 로직 구현

### 3. 챌린지 및 점수 시스템

- **실시간 점수 집계 및 순위 시스템**

  - MyBatis를 활용한 효율적인 점수 데이터 처리
  - 트랜잭션 관리를 통한 데이터 일관성 보장

- **팀 관리 시스템**
  - 팀 생성 및 멤버 관리 기능
  - 챌린지별 독립적인 점수 시스템 구현

## 💪 문제 해결 사례

### 1. CORS와 세션 관리 문제 해결

- **문제 상황**: 프론트엔드와 백엔드 간 세션 유지 불가, CORS 정책으로 인한 쿠키 전송 실패
- **해결 과정**
  1. ServletContextInitializer를 사용한 세션 쿠키 설정
  2. CORS 설정 최적화 (allowCredentials, allowedOrigins 등)
  3. 세션 속성(HttpOnly, Secure, Path) 적절한 설정

### 2. 댓글 시스템 개선

- **문제 상황**: 댓글 삭제 시 연관 대댓글 처리 문제, 수정된 댓글 이력 관리 이슈
- **해결 방법**
  1. is_deleted 플래그 도입으로 Soft Delete 구현
  2. 댓글과 대댓글의 계층 구조를 효율적으로 관리하는 로직 개발
  3. 삭제된 댓글의 대댓글 표시 방식 개선

### 3. 챌린지 점수 처리 시스템 개선

- **문제 상황**: 동일 플레이어 이름으로 인한 점수 기록 오류
- **해결 방법**
  1. 플레이어 ID 기반의 점수 처리 시스템으로 개선
  2. 트랜잭션 처리를 통한 데이터 정합성 보장

## 📈 성과

### 기술적 성과

- 안전한 사용자 인증 시스템 구축
- 효율적인 계층형 댓글 시스템 구현
- MyBatis를 활용한 복잡한 데이터 처리 로직 구현

### 개인적 성장

- 실제 서비스의 보안 요구사항 구현 경험
- 프론트엔드와의 협업을 통한 통합 개발 경험
- 다양한 문제 해결 및 트러블슈팅 경험
