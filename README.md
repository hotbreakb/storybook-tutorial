## Storybook 익히기

### 디자인 시스템이란?
- 디자인과 개발의 생산성을 위해 문서화된 것

### 이걸 왜 배우는가?
- 개발 테스트
- 디자인팀과 의사소통

<br>

## 실행

### 📂 stories 폴더 위치 변경
1. src, components 폴더 생성
2. hello component, stories 파일 생성
3. stories 파일 위치가 기존과 다를 때는 `main.js`의 `stories`에서 변경해야 한다. [참고 문서](https://storybook.js.org/docs/react/configure/overview#with-a-directory)

### 👀 addon-knobs
- `props`를 변경해서 확인해볼 수 있다.
- boolean, text, radio 등 여기서 제공하는 Knobs가 있다.
- `import { text } from '@storybook/addon-knobs';`

<img width=500 src="https://user-images.githubusercontent.com/64337152/165024938-d4aac773-0c9f-4818-9855-72c915360b11.gif">

### 👀 addon-actions
- 컴포넌트를 통해 무슨 파라미터를 가지고 어떤 함수가 호출되었는지 확인할 수 있다.
- 리액트 라우터의 주소 이동이나 리덕스의 dispatch도 확인 가능!

<img width=500 src="https://user-images.githubusercontent.com/64337152/165027538-33ee5db1-8bbf-4a68-be1c-9c2c5c14acee.gif">

### 👀 prop-types
- [Docs] props에 대한 설명을 추가한다.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/64337152/165028788-907bb343-a374-483a-8679-fc108f1482ee.png">


### 👀 component description
- [Docs] 컴포넌트에 대한 부제목과 설명을 추가한다.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/64337152/165030195-20260e06-b9e6-4909-8c59-746bef67a2ed.png">

<br>

## 참고 자료
- [벨로퍼트의 storybook](https://velog.io/@velopert/start-storybook)
