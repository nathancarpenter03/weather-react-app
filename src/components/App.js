import React from 'react';
// Don't need to import reactDom (only in root file)
import ZipForm from './ZipForm';
import WeatherList from './WeatherList';
import CurrentDay from './Currentday';
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
        this.onDayClicked = this.onDayClicked.bind(this);        
    }

    onFormSubmit(zipcode) {
        get(`http://localhost:3000/weather/${zipcode}`)
        .then(({ data }) => {
          const { city, list: dates } = data;
      
          this.setState({ zipcode, city, dates, selectedDate: null });
        });
      }
    // onSubmit is passed down to ZipForm below as props 

    onDayClicked(dayIndex) {
        this.setState({ selectedDate: dayIndex });
      }

    render () {
        const {dates, city, selectedDate} = this.state;
        // Pull dates, city, sel date out of state to use below 
        return (
            <div className="app">
                <h3>Weather App</h3>
                <ZipForm onSubmit={this.onFormSubmit} /> 
                <div>
                    <p>The city of {this.state.city.name} matched the entered zipcode. Select a day below for more details!</p>
                </div>
                <WeatherList days={dates} onDayClicked={this.onDayClicked} />
                
                {selectedDate !== null && <CurrentDay day={dates[selectedDate]} city={city} />}     
            </div>
        );
    }
}

export default App;
