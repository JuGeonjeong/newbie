import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');//message:첫번째 요소, 상태 / setMessage:두번째 요소, 상태변경함수(setter)
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Say;