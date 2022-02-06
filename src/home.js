import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    // background:#1AAB8A;
    // color:#fff;
    border:none;
    position:relative;
    height:60px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:500ms ease all;
    outline:none;
    cursor: pointer;
    margin: 0 20px;
    border-top: 1px solid;
    border-bottom: 1px solid;

    &:hover{
        color: rgba(255, 255, 255, 0.85);
	    box-shadow: rgba(30, 62, 54, 0.7) 0 0px 0px 40px inset;
    }
`;

const Home = ( { history } ) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ cursor: 'pointer' }} onClick={() => {history.push("/")}}> Home Page </h3>
            <Button onClick={() => {history.push("/j")}}> 건정 </Button>
            <Button onClick={() => {history.push("/k")}}> 재현 </Button>
            <Button onClick={() => {history.push("/u")}} primary> 시연 </Button>
        </div>
    );
}

export default Home;