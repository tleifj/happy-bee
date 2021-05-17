import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  state = {
    guess:  'guess'
  };
  checkGuess = () => {
    this.setState({guess: 'new guess'});
    console.log(this.state);
  };
  deleteFromGuess = () => {
    let guess = this.state.guess;
    let newGuess = guess.slice(0, -1);
    this.setState({guess: newGuess});
  }
  render() {
  return (
    <div className="App">
      <Header title="Test Header"></Header>
      <p>{this.state.guess}</p>
      <button onClick={this.deleteFromGuess}>Delete</button>
      <button onClick={this.checkGuess}>Submit</button>
    </div>
  );
    }
}

export default App;
