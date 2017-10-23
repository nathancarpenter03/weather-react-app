import React from 'react';
// Don't need to import reactDom (only in root file)
import ZipForm from './ZipForm';
import { get } from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
          };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(zipcode) {
        get(`http://localhost:3000/weather/${zipcode}`)
        .then(({ data }) => {
          const { city, list: dates } = data;
      
          this.setState({ zipcode, city, dates, selectedDate: null });
        });
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
