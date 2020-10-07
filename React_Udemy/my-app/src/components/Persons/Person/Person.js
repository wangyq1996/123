import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #eee;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // const rnd = Math.random();
    // if (rnd > 0.7) throw new Error('Something went wrong');
    return (
        //<div className="Person">
        <StyledDiv>
            <p onClick={props.click}>
                I'm {props.name} and I'm a {props.age} years old Person!
            </p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name}
            ></input>
            <p>
                If input dont have onChange, the input value will be locked{' '}
                <br />
                since it was bind to props.name, which is unchanged.
            </p>
        </StyledDiv>
    );
    //
};

export default person;
