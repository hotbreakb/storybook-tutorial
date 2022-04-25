## Storybook 익히기

### 디자인 시스템이란?
- 디자인과 개발의 생산성을 위해 문서화된 것

### 이걸 왜 배우는가?
- 개발 테스트
- 디자인팀과 의사소통

## 실행

### stories 폴더 위치 변경
1. src, components 폴더 생성
2. hello component, stories 파일 생성
3. stories 파일 위치가 기존과 다를 때는 `main.js`의 `stories`에서 변경해야 한다. [참고 문서](https://storybook.js.org/docs/react/configure/overview#with-a-directory)

### addon-knobs
- `props`를 변경해서 확인해볼 수 있다.
- boolean, text, radio 등 여기서 제공하는 Knobs가 있다.
- `import { text } from '@storybook/addon-knobs';`

#### 동작 예시