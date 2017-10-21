import React from 'react';

class ZipForm extends React.Component {
    // initialize state  
    constructor(props) {
        // call parents constructor and pass its props
        super(props); 
        // set initial state 
        this.state = {
            zipcode: ''
        }
        // bind methods
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
    }

    // component methods  
    inputUpdated(e) {
        const {value} = e.target;
        this.setState({zipcode: value})
    }

    submitZipCode(e) {
        e.preventDefault();
        const { zipcode } = this.state;
        const { onSubmit } = this.props;

        onSubmit(zipcode);
    }

    render() {
        return (
            <div className="zip-form">
                <form onSubmit={this.submitZipCode}>
                    <label htmlFor="zipcode">Zip Code</label>
                    <input className="form-control" type="input" name="zipcode"
                    value={this.state.zipcode}
                    onInput={this.inputUpdated}/>
                    <button type="submit" className="btn btn-success">Get the forecast!</button>
                </form>
            </div>
        )}
}
// Notice htmlFor (JSX, since for is js keyword)
export default ZipForm;
