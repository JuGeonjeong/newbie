// props의 타입 지정시 사용
import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';

class Mycomponent extends Component {
  static defaultProps = {
    name: '싼쵸',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당

    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        {/* children은 태그 사이의 내용을 보여줌 */}
        children 값은 {children}입니다. 제가 좋아하는 숫자는 {favoriteNumber}{' '}
        입니다.
      </div>
    );
  }
}

export default Mycomponent;

// Mycomponent.defaultProps = {
//   name: '싼쵸',
// };

// Mycomponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

//   일반함수는 자신이 종속된 this를 가리키고, 화살표함수는 자신이 종속된 인스턴스를 가리킨다.
// function WhiteDog() {
//   this.name = '흰둥이';
//   return {
//     name: '검둥이',
//     bark: () => {
//       console.log(this.name + ': 멍멍!');
//     },
//   };
// }

// const whiteDog = new WhiteDog();
// whiteDog.bark(); //흰둥이: 멍멍!

// function BlackDog() {
//   this.name = '흰둥이';
//   return {
//     name: '검둥이',
//     bark: function () {
//       console.log(this.name + ':멍멍!');
//     },
//   };
// }

// const blackDog = new BlackDog();
// blackDog.bark(); // 검둥이: 멍멍!
