import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <div className='weather-info'>
        <span className='city'>{this.props.city}</span>
        <span className='currT'>Current Temperature</span>
        <span className='tempNow'>{this.props.curr_temp}</span>
        <span className='desc'>{this.props.desc}</span>
        <span className='minT'>Min Temp</span>
        <span className='min'>{this.props.min_temp}</span>
        <span className='maxT'>Max Temp</span>
        <span className='max'>{this.props.max_temp}</span>
      </div>
    )
  }
}

export default Display;