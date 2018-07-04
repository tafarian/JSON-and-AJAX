import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    resp: null
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=lspPyVWfkcWg6PxVO5f0Lnrq1MdMKPFDbIgDjlCM')
    .then( resp => resp.json()) 
    .then( resp => {
      this.setState({
        resp: resp,
      })
    })
  };

  render() {
    if (this.state.resp === null) {
      return <p>Loading</p>
    }

    return (
      <div>
        <img src={this.state.resp.hdurl} alt={this.state.resp.title}/>
      </div>
    );
  }
}

export default App;
