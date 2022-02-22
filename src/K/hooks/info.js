import { useEffect, useState } from 'react';

const Info = () => {
  const [state, setState] = useState({
    name: '',
    nickName: '',
  });
  const { name, nickName } = state;

  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('effect');

    return () => {
      console.log('unmount');
    };
  }, [name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const nextChange = {
    //   ...state,
    //   [name]: [value],
    // };
    setState({ ...state, [name]: value });
  };

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickName = (e) => {
  //     setNickname(e.target.value);
  //   };

  return (
    <div>
      <div>
        <input name="name" value={state.name} onChange={handleChange} />
        <input name="value" value={state.nickname} onChange={handleChange} />
      </div>

      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
