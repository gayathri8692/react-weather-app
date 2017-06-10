import React, { Component } from 'react';
import Zip from './components/Zip';
import Display from './components/Display';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        zip: '' ,
        city: '',
        min_temp: '',
        max_temp: '',
        desc: '',
        curr_temp: '',
        apiDataLoaded: false
      } 
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

submit() {
  console.log(this.state.zip);
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=,us?${this.state.zip},units=imperial&appid=33635111040de5665d5b3c6a3a0901c0`)
  .then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    console.log(jsonResponse);
    this.setState({
      city: jsonResponse.name,
      min_temp: Math.floor(((9/5) * (jsonResponse.main.temp_min - 273) + 32)),
      max_temp: Math.floor(((9/5) * (jsonResponse.main.temp_max - 273) + 32)),
      curr_temp: Math.floor(((9/5) * (jsonResponse.main.temp - 273) + 32)),
      desc: jsonResponse.weather[0].description,
      apiDataLoaded: true,
    })
  })
}


handleChange(e) {
  this.setState({
    zip: e.target.value
  });
}

 handleSubmit(e) {
    e.preventDefault();
    this.submit();
  }

  showTemp() {
    console.log(this.state.apiDataLoaded);
    if(this.state.apiDataLoaded) {
      return <Display
        city={this.state.city}
        min_temp={this.state.min_temp}
        max_temp={this.state.max_temp}
        curr_temp={this.state.curr_temp}
        desc={this.state.desc}
        />
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Zip 
        zip={this.state.zip}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        />
        {this.showTemp()}
        <Footer />
      </div>
    );
  }
}

export default App;
