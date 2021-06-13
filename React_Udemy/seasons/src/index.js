import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Hi there!</div>;
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        // Frist way to build state
        //this.state = { lat: null, errorMessage: '' };
    }

    // Second way to build state
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        console.log('My component was rendered to the screen');

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Loading />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
