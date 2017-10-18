import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// class App extends React.Component {
//     render () {
//         return (
//         <div className="app">
//             <p>Weather App</p>
//         </div>
//     )}
// }

const root = document.getElementById('app-container');

ReactDOM.render(
    <App />, root
);
// ReactDOM.render(
//     <p>Hello World</p>, root
// );
