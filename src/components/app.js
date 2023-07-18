import React, { Component } from 'react';
import moment from 'moment/moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>HantzoStudios</h1>
        <h2>Estamos de vuelta!</h2>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')} 
      </div>
      </div>
     

    );
  }
}
