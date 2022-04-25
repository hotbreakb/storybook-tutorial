import React from 'react';
import PropTypes from 'prop-types';

/**
 * 사용자에게 인사하고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `name`으로 OO을 변경할 수 있습니다.
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 */
const Hello = ({ name, big, onHello, onBye }) => {
    return (
        <div>
            {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
            <div>
                <button onClick={onHello}>Hello</button>
                <button onClick={onBye}>Bye</button>
            </div>
        </div>
    );
};

Hello.propTypes = {
    /** 안녕하세요, 뒤에 들어오는 이름 */
    name: PropTypes.string.isRequired,
    /** 이 값을 `true` 로 설정하면 h1 태그로 렌더링 */
    big: PropTypes.bool,
    /** Hello 버튼 누를 때 호출할 함수 */
    onHello: PropTypes.func,
    /** Bye 버튼 누를 때 호출할 함수 */
    onBye: PropTypes.func
};

Hello.defaultProps = {
    big: false
};


export default Hello;