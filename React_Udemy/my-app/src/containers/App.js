import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import Person from '../components/Persons/Person/Person';
// import styled from 'styled-components';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';

class App extends Component {
    //If state is changed, the React will automaticly re-render the webpage.
    state = {
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'Manu', age: 29 },
            { id: '3', name: 'WYQ', age: 24 },
        ],
        otherState: 'some other value',
        showPersons: false,
    };

    switchNameHandler = () => {
        //console.log('Clicked');
        //Dont do this : this.state.persons[0].name='Min'; React won't recoginze change to state without using setState().
        this.setState({
            //changeState will replace the old state, So the 'otherState' would missing.
            persons: [
                { id: '1', name: 'Min', age: 28 },
                { id: '2', name: 'Manu', age: 29 },
                { id: '3', name: 'WYQ', age: 24 },
            ],
        });
        //React will detect changes happens to 'persons' without changing 'otherState'.
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons,
        });
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        });
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        //This way mutate the orginal data
        //Better way is to create a copy of data before changing it
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons,
        });
    };

    //console.log(showPersons);

    //'key' element help React to track which element
    //was changed & to be rendered
    //instead of rendering the whole list!

    // btnStyle.background-color = 'green';
    // style[':hover'] = {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    // };
    //Dont add new attribute to style, so const is ok!

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );
        }

        return (
            <div className="App">
                {/*<h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                
                <button style={style} onClick={switchNameHandler}>
                    Switch Name
                </button>
                
                <br />
                <BtnStyle
                    alt={showPersons.toString()}
                    onClick={togglePersonsHandler}
                >
                    Show Persons
                </BtnStyle>
    
                <p>
                    Do not use this.switchNameHandler()
                    <br />
                    Cause the function will excute immediately even before you click
                    the button!
                </p>*/}
                <Cockpit
                    toggle={this.togglePersonsHandler}
                    switch={this.switchNameHandler}
                    state={this.state}
                />
                {persons}
                <p>{this.state.otherState}</p>
            </div>
        );
    }
    // Why we need to import React even though we don't use it?
    // Codes above are equals to codes below
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I'm a React App?'));
}

export default App;
