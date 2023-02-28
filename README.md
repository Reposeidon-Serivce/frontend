# frontend

client side source code

## 서비스 목표

사용자가 작성하는 레포트 내용에서 자동 동기화를 통해 Deep-Learning의 자연어 처리를 기반으로 한 키워드 및 핵심문장을 추출합니다. 이를 바탕으로 양질의 자료(논문, 뉴스/기사, 매거진, 블로그, 기타)를 검색하여 제공함으로써 레포트 작성의 편의를 제공하고, 사용자가 입력한 레포트를 클라우드에 저장, 스크랩한 자료를 열람할 수 있는 기능을 제공하는 것을 목표로 합니다.

---

### 디자인 구상도

![design1](/src/assets/design/design1.png)

![design2](/src/assets/design/design2.png)

![design3](/src/assets/design/design3.png)

---

### 시스템 구조도

![structure1](/src/assets/design/structure1.png)

![structure2](/src/assets/design/structure2.png)

---

### 사용된 기술스택 FE

html, typescript, css, sass, react.js, redux-toolkit, react-query

### 개발 설계

#### 1. 프로젝트 구조 설계 및 환경설정

1-1. 환경설정

- environment별로 API port를 다르게 설정
- sass를 활용해, 전역 스타일 변수로 전체 스타일 제어
- 프로젝트에서 전역적으로 사용되는 style 값에 대한 중앙 관리가 가능하도록 코드 구현
- API Interceptor를 설정하여 API status별 Error를 하나의 파일로 통합 관리할 수 있도록 코드 구현
- 각 기능단위 별 디렉토리 구분

1-2. 데이터 제어 및 상태관리

- UI 요소의 전역상태관리는 redux-toolkit으로, 서버 데이터 상태관리는 react-query로 제어하도록 구분(api 연결 시 적용 예정)
- MVVM 패턴을 사용해, 각 컴포넌트는 view의 역할만 수행하고 page의 root파일만 data fetching, 데이터 상태관리 및 비즈니스 로직을 처리하도록 구현 예정
