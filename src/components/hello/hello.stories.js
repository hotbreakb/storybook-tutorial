import React from 'react';
import Hello from './hello';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs] // 애드온 적용
};

export const hello = () => {
    // knobs 만들기
    // 순서: Knobs의 이름, 기본값 그리고 Group Id
    const big = boolean('크게/작게', false);
    const name = text('이름', 'Storybook');
    return <Hello name={name} big={big} />;
};
hello.story = {
    name: 'Default'
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;