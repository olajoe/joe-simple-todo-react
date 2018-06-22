import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentTime: 0
    }
    this.handleHeaderClicked = this.handleHeaderClicked.bind(this)
  }
  
  handleHeaderClicked(time) {
    this.setState({
      currentTime: time
    })
  }

  render() {
    let { currentTime } = this.state

    return (
      <div>
        <Header currentUser="Jaturon" isLoggedIn/> 
        <div>currentTime = {currentTime}</div>
        <Footer onTimerClick={this.handleHeaderClicked}></Footer>
      </div>
    );
  }
}
export default App;
