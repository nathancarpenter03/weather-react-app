import React from 'react';
// Don't need to import reactDom (only in root file)
import ZipForm from './ZipForm';
import { get } from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(zipcode) {
        this.setState({ zipcode });
      }
    // onSubmit is passed down to ZipForm below as props 
    render () {
        return (
            <div className="app">
            <p>Weather App</p>
            <ZipForm onSubmit={this.onFormSubmit} />
        </div>
    )}
}

export default App;
