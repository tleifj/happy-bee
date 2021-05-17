import React from 'react';
import './App.css';
import Header from './components/Header';
import Letter from './components/Letter';

class App extends React.Component {
  letters = ['A', 'B', 'C', 'D'];
  words = ['BAD', 'CAB'];
  state = {
    guess:  '',
    foundWords: [],
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
  addToGuess = (text) => {
    let guess = this.state.guess;
    let newGuess = guess.concat(text);
    this.setState({guess: newGuess});
    
  }
  render() {
  return (
    <div className="App">
      <Header title="Test Header"></Header>
      {this.letters.map((key) => (
        <Letter key={key} text={key} addToGuess={this.addToGuess}></Letter>
      ))}
      {/* <div><div onClick={(e) => {this.addToGuess(e.target.innerHTML)}}>A</div><div>B</div><div>C</div></div> */}
      <p>{this.state.guess}</p>
      <button onClick={this.deleteFromGuess}>Delete</button>
      <button onClick={this.checkGuess}>Submit</button>
    </div>
  );
    }
}

export default App;
