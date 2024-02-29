# 🧗‍♀️ 실내 클라이밍 커뮤니티 `오루리(Orury)` 프로젝트

## 🔗 프로젝트 링크

### [🧗‍♀️ Orury Page](https://orury.com)

### [🎨 Figma](https://www.figma.com/file/V4Jjx42uFhcgFpeygd15gx/Wire-Frame?type=design&node-id=0%3A1&mode=design&t=r5Tc9UWpo0UqDFHj-1)

### [🗂️ Team Notion](https://www.notion.so/Orury-92fd575d1a09482f8b60777f5182d450?pvs=4)

### [🔵 Front-End Notion](https://www.notion.so/Front-End-eb11bb7ea19c42038010792167a461d1)

<br />

## 👤 개발 팀원 소개

| **[유희태](https://github.com/1017yu)** | **[이지형](https://github.com/Jihyeong00)** | **[심정아](https://github.com/joanShim)** |
| :-: | :-: | :-: |
| <a href="https://github.com/1017yu"><img src="https://avatars.githubusercontent.com/u/83483378?v=4" width=200px alt="유희태" /> | <a href="https://github.com/Jihyeong00"><img src="https://avatars.githubusercontent.com/u/115636461?v=4" width=200px alt="이지형" /> | <a href="https://github.com/joanShim"><img src="https://avatars.githubusercontent.com/u/35457850?v=4" width=200px alt="이지형" /> |
| Front-End | Front-End | Front-End |
| 메인<br />인증/인가<br />(소셜 로그인/토큰 관리)<br />모바일 App 배포<br />커뮤니티 페이지<br />마이 페이지<br /> | 지도 페이지<br />리뷰 페이지<br /> | 인증/인가<br />(소셜 로그인)<br />크루 페이지<br /> |

<br />

## 🛠️ 사용기술 및 개발환경

### Programming Language / FrameWrok

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/NEXT.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
</p>

### Styling

<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flatsquare&logo=tailwindcss&logoColor=white"/></a><img src="https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white" />

### State Management

<p>
<img src="https://img.shields.io/badge/Zustand-FB542B?style=flat-square&logo=zustand&logoColor=white" />
<img src="https://img.shields.io/badge/SWR-fff?style=flat-square&logo=swr&logoColor=black" />
</p>

### API Testing

<p>
<img src="https://img.shields.io/badge/Mock Service Worker-FF6A33?style=flat-square&logo=mockserviceworker&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" />
</p>

### Built-in Rules

<p>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
</p>

### Deployment & Environment

<p>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" />
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
</p>

### Cowork Tools

<p>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white" />
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white" />
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
</p>

<br></br>

## 🔥 팀 성향

- UI를 구현하는 시간을 줄이기 위해 UI 라이브러리를 사용하고 있습니다. (Shadcn/ui, react-spring-bottom-sheet...)

- 새로운 기술, 라이브러리 사용을 주저하지 않고 사용하고 있습니다.

- 하지만 그 기술과 라이브러리를 채택하는 과정에서 충분한 근거를 가지고 선택합니다. ([사용 스택 모음](https://www.notion.so/5903e91043524c1298680e4b65fe299e?pvs=4))

<br />

## 🎯 팀 공동 목표

- Lighthouse 평균 `80점 이상`

- PWA 또는 React-Web-View를 이용한 `모바일 애플리케이션` 출시

- `2월 8일` 이전 마무리

<br />

## 💡 최적화 작업

- 이미지 렌더링 시간을 줄이기 위한 Next/Image의 `<Image/>` 태그 사용

- FOUT 현상 방지를 위한 `Next/font`, `localFont` 사용

- 자주 사용하는 컴포넌트의 경우 전역변수와 같이 분리하여 코드의 수를 줄였습니다.

- Next.JS 와 잘 맞는 `SWR`을 이용하여 데이터를 캐싱하여 불필요한 API 호출을 방지하였습니다.
