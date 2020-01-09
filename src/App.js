import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import Lasange from './Lasange';

class App extends Component {

  state = {
    lasanges: []
  }

  async componentDidMount(){
    await axios("https://lasange.herokuapp.com/lasange")
    .then(res => {
      this.setState({lasanges: res.data});
    })
  }

  render(){
    const {lasanges} = this.state;
    return (
      <div className="App">
        <h1>Best Lasanges in Melbourne</h1>
        {
          lasanges? lasanges.map((lasange, index)=>{
            return (<Lasange name={lasange["name"]} location={lasange["location"]} price={lasange["price"]} />)
          }) : null
        }
      </div>
    );
  }
}

export default App;
