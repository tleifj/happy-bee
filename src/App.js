import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroOverlay from './components/IntroOverlay';
import Letter from './components/Letter';
import Message from './components/Message';
import WinOverlay from './components/WinOverlay';

class App extends React.Component {
  letters = ['A', 'B', 'C', 'D'];
  words = ['BAD', 'CAB', 'DAB'];
  state = {
    introScreen: true,
    winScreen: false,
    guess:  '',
    foundWords: [],
    messageActive: false,
    messageType: '',
  };
  startGame = () => {
    this.setState({introScreen: false});
  }
  closeWinScreen = () => {
    this.setState({winScreen: false});
  }
  checkGuess = () => {    
    if (this.words.includes(this.state.guess)) {
      let newFoundWords = [...this.state.foundWords, this.state.guess];
      this.setState({foundWords: newFoundWords});
      
      this.setState({messageType: 'Score!'}, () => {
        console.log(this.state.foundWords);
        console.log(this.words);
        if (this.state.foundWords.length === this.words.length) {
          this.setState({winScreen: true});
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
      <IntroOverlay introScreen={this.state.introScreen} startGame={this.startGame} />
      <WinOverlay winScreen={this.state.winScreen} closeWinScreen={this.closeWinScreen}/>
      <Header words={this.words} foundWords={this.state.foundWords} title="Test Header" />
      {this.letters.map((key) => (
        <Letter key={key} text={key} addToGuess={this.addToGuess}></Letter>
      ))}
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
