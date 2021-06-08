import React from "react";
import "./App.css";
import Header from "./components/Header";
import IntroOverlay from "./components/IntroOverlay";
import Letter from "./components/Letter";
import Message from "./components/Message";
import WinOverlay from "./components/WinOverlay";

class App extends React.Component {
  letters = ["A", "C", "T", "Y", "L", "H", "D", "P", "B", "I", "R"];
  words = [
    "ACHY",
    "ARCH",
    "BATH",
    "BLAH",
    "CHAP",
    "CHAR",
    "CHAT",
    "CHIC",
    "CHID",
    "CHIP",
    "CHIT",
    "HAIL",
    "HAIR",
    "HALL",
    "HALT",
    "HARD",
    "HARP",
    "HART",
    "HATH",
    "HILL",
    "HILT",
    "ITCH",
    "LATH",
    "PATH",
    "PITH",
    "RICH",
    "THAT",
    "ALPHA",
    "APHID",
    "BATCH",
    "BIRCH",
    "BIRTH",
    "BITCH",
    "CATCH",
    "CHAIR",
    "CHAPT",
    "CHART",
    "CHARY",
    "CHILD",
    "CHILI",
    "CHILL",
    "CHIRP",
    // "DACHA",
    "DITCH",
    "HABIT",
    "HAIRY",
    "HAPPY",
    "HARDY",
    "HARPY",
    "HARRY",
    "HATCH",
    "HILLY",
    "HIPPY",
    "HITCH",
    "HYDRA",
    "ITCHY",
    "LARCH",
    "LATCH",
    "PARCH",
    "PATCH",
    // "PHIAL",
    "PHYLA",
    "PITCH",
    "PITHY",
    "THIRD",
    "YACHT",
    "APATHY",
    "ARCHLY",
    "ATTACH",
    "BITCHY",
    "CALIPH",
    "CATCHY",
    "CHATTY",
    "CHICHI",
    "CHILLI",
    "CHILLY",
    "DAHLIA",
    "HARDLY",
    "HILARY",
    "HYBRID",
    "LITCHI",
    "PARIAH",
    "PATCHY",
    "PHALLI",
    "RICHLY",
    "THATCH",
    "THIRTY",
    "THRALL",
    "THRILL",
    "ARCHAIC",
    // "CATARRH",
    "CHARILY",
    "CHARITY",
    "HABITAT",
    "HALYARD",
    "HAPPILY",
    "HARDILY",
    "HIBACHI",
    "PHALLIC",
    "PITHILY",
    "THIRDLY",
    "BIRDBATH",
    "BIRTHDAY",
    "CATCHALL",
    "CHATTILY",
    "CHITCHAT",
    "HARDBALL",
    "HILARITY",
    "PILCHARD",
    "TRIPTYCH",
    "ARTHRITIC",
    "CATHARTIC",
    "CHAPARRAL",
    "HILLBILLY",
    "PATRIARCH",
    // "PHILIPPIC",
    "CHARITABLY",
    "CHILDBIRTH",
    "PATRIARCHY",
    "ARCHAICALLY",
    "PATRIARCHAL",
    "HABITABILITY",
  ];
  totalPoints = 696;
  state = {
    introScreen: true,
    winScreen: false,
    guess: "",
    foundWords: [],
    score: 0,
    messageActive: false,
    messageType: "",
    progressMessage: "Beginner",
  };
  startGame = () => {
    this.setState({ introScreen: false });
  };
  closeWinScreen = () => {
    this.setState({ winScreen: false });
  };
  checkGuess = () => {
    if (this.state.foundWords.includes(this.state.guess)) {
      this.setState({ messageType: "Word already found" });
    } else {
      if (
        this.words.includes(this.state.guess) &&
        !this.state.foundWords.includes(this.state.guess)
      ) {
        let newFoundWords = [...this.state.foundWords, this.state.guess];
        this.setState({ foundWords: newFoundWords });
        let newScore = this.state.score + this.state.guess.length;
        this.setState({ score: newScore });

        this.setState({ messageType: "Score!" }, () => {
          if (this.state.foundWords.length === this.words.length - 2) {
            this.setState({ progressMessage: "Good" });
          }
          if (this.state.foundWords.length === this.words.length - 1) {
            this.setState({ progressMessage: "Amazing" });
          }
          if (this.state.foundWords.length === this.words.length) {
            this.setState({ winScreen: true });
            this.setState({ progressMessage: "Genius!" });
            window.navigator.vibrate(700);
            var count = 200;
            var defaults = {
              origin: { y: 0.7 },
            };

            function fire(particleRatio, opts) {
              window.confetti(
                Object.assign({}, defaults, opts, {
                  particleCount: Math.floor(count * particleRatio),
                })
              );
            }

            fire(0.25, {
              spread: 26,
              startVelocity: 55,
            });
            fire(0.2, {
              spread: 60,
            });
            fire(0.35, {
              spread: 100,
              decay: 0.91,
              scalar: 0.8,
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 25,
              decay: 0.92,
              scalar: 1.2,
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 45,
            });
          }
        });
      } else {
        this.setState({ messageType: "Error" });
      }
    }
    this.setState({ messageActive: true });
    setTimeout(() => {
      this.setState({ messageActive: false });
    }, 1000);
    this.setState({ guess: "" });
  };
  deleteFromGuess = () => {
    let guess = this.state.guess;
    let newGuess = guess.slice(0, -1);
    this.setState({ guess: newGuess });
  };
  addToGuess = (text) => {
    let guess = this.state.guess;
    let newGuess = guess.concat(text);
    this.setState({ guess: newGuess });
  };
  render() {
    return (
      <div className="App">
        <IntroOverlay
          introScreen={this.state.introScreen}
          startGame={this.startGame}
        />
        <WinOverlay
          winScreen={this.state.winScreen}
          closeWinScreen={this.closeWinScreen}
        />
        <Header
          words={this.words}
          foundWords={this.state.foundWords}
          score={this.state.score}
          progressMessage={this.state.progressMessage}
        />
        <Message
          messageActive={this.state.messageActive}
          messageType={this.state.messageType}
        />
        <p className="guess-input">{this.state.guess}</p>
        <div className="letter-container">
          {this.letters.map((key) => (
            <Letter key={key} text={key} addToGuess={this.addToGuess}></Letter>
          ))}
        </div>

        <button onClick={this.deleteFromGuess}>Delete</button>
        <button onClick={this.checkGuess}>Submit</button>
        <div className="found-words">
          <p>Found Words</p>
          {this.state.foundWords.map((key) => (
            <li key={key}>{key}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
