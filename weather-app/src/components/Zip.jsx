import React, { Component } from 'react';

class Zip extends Component {
  render(){
    return(
      <form className='info' onSubmit={this.props.handleSubmit}>
        <label>Enter Zip Code
          <input 
          type='text'
          name='zip' 
          className='zipcode' 
          value={this.props.zip}
          onChange={this.props.handleChange}
          />
        <button className='button'>SUBMIT</button>
      </label>
    </form>
    )
  }
}


export default Zip;