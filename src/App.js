import React from 'react';
import './App.css';
import Header from './components/Header';
import Letter from './components/Letter';
import Message from './components/Message';

class App extends React.Component {
  letters = ['A', 'B', 'C', 'D'];
  words = ['BAD', 'CAB'];
  state = {
    guess:  '',
    foundWords: [],
    messageActive: false,
    messageType: '',
  };
  checkGuess = () => {    
    if (this.words.includes(this.state.guess)) {
      let newFoundWords = [...this.state.foundWords, this.state.guess];
      this.setState({foundWords: newFoundWords});
      
      this.setState({messageType: 'Score!'}, () => {
        console.log(this.state.foundWords);
        console.log(this.words);
        if (this.state.foundWords.length === this.words.length) {
          alert("You won!");
        }
      });   
    } else {
      this.setState({messageType: 'Error'});
    }
    this.setState({messageActive: true});
    setTimeout(() => {
      this.setState({messageActive: false});
    }, 1000)
    this.setState({guess: ''});
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
      <Message messageActive={this.state.messageActive} messageType={this.state.messageType} />
      <p>{this.state.guess}</p>
      <button onClick={this.deleteFromGuess}>Delete</button>
      <button onClick={this.checkGuess}>Submit</button>
      <div>
        {/* <h2>Found Words</h2> */}
        {this.state.foundWords.map( (key)=> (
          <li key={key}>{key}</li>
        ))}
      </div>
    </div>
  );
    }
}

export default App;
