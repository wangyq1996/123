import React from 'react';
import './Cockpit.css';
import styled from 'styled-components';

const cockpit = (props) => {
    const BtnStyle = styled.button`
        background-color: ${(props) => (props.alt ? 'green' : 'red')};
        color: 'white';
        font: 'inherit';
        border: '1px solid blue';
        padding: '8px';
        cursor: 'pointer';

        &:hover {
            background-color: ${(props) =>
                props.alt ? 'lightgreen' : 'salmon'};
            color: black;
        }
    `;

    const classes = [];
    if (props.state.persons.length <= 2) classes.push('red');
    if (props.state.persons.length <= 1) classes.push('bold');


    return (
        <div>
            <h1></h1>
            <p className={classes.join(' ')}>This is really working!</p>

            <button onClick={props.switch}>
                Switch Name
            </button>
            
            <br />
            <BtnStyle
                alt={props.state.showPersons}
                onClick={props.toggle}
            >
                Show Persons
            </BtnStyle>

            <p>
                Do not use this.switchNameHandler()
                <br />
                Cause the function will excute immediately even before you click
                the button!
            </p>
        </div>
    );
};

export default cockpit;
