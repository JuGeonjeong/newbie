import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNum, children}) => {
    return (
        <>
            안녕하세요, 저는 {name} 입니다.<br/>
            children 값은 {children} 입니다. 
        </>
    )
}

MyComponent.defaultProps = {
    name: '건정'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired
};

export default MyComponent;