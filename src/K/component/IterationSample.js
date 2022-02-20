import react, { useState } from 'react';
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  const handleChange = (e) => setInputText(e.target.value);
  const handleClick = () => {
    //push는 기존 배열 자체 변경, concat은 새로운 배열 생성
    //   리액트는 기존 상태를 그대로 두면서 새로운 값을 설정해야함 --> 불변성 유지 -> 최적화 할 수 있음
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1를 더해준다.
    setNames(nextNames); // names 값을 업데이트 한다.
    setInputText(''); // inputText를 비운다.
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>

      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;

//key 값이 중복되면 렌더링 과정에서 에러 발생
// 배열 변형 시에는 concat,filter 의 배열 내장 함수를 사용해 새로운 배열 만든후 상태설정
