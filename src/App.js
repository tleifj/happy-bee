import React from "react";
import "./App.css";
import FoundWords from "./components/FoundWords";
import Header from "./components/Header";
import IntroOverlay from "./components/IntroOverlay";
import Letter from "./components/Letter";
import Message from "./components/Message";
import WinOverlay from "./components/WinOverlay";
import BirthdayOverlay from "./components/BirthdayOverlay";

class App extends React.Component {
  letters = ["A", "C", "T", "Y", "L", "H", "D", "P", "B", "I", "R"];
  words = [
    "ACHY",
    "ARCH",
    "BATH",
    "BLAH",
    "CHAI",
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
    // "CHILLI",
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
    // "CHARILY",
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
  specialWords = ["HAPPY", "BIRTHDAY", "HILARY"];
  totalPoints = 700;
  state = {
    introScreen: true,
    winScreen: false,
    genius: false,
    queenBee: false,
    birthdayScreen: false,
    guess: "",
    foundWords: [],
    foundSpecialWords: [],
    score: 0,
    messageActive: false,
    messageType: "",
    progressMessage: "Beginner",
  };
  componentDidMount() {
    const score = parseInt(localStorage.getItem("score"));
    console.log(this.words.length);
    if (score) {
      this.setState({ score });
    }

    const foundWords = JSON.parse(localStorage.getItem("foundWords"));
    if (foundWords) {
      this.setState({ foundWords });
    }

    const genius = JSON.parse(localStorage.getItem("genius"));
    if (genius) {
      this.setState({ genius });
    }

    const progressMessage = localStorage.getItem("progressMessage");
    if (progressMessage) {
      this.setState({ progressMessage });
    }
  }
  celebrate = () => {
    // window.navigator.vibrate(700);
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
  };
  startGame = () => {
    this.setState({ introScreen: false });
  };
  closeWinScreen = () => {
    this.setState({ winScreen: false });
  };
  closeBirthdayScreen = () => {
    this.setState({ birthdayScreen: false });
  };
  checkGuess = () => {
    // If the word has already been found
    if (this.state.foundWords.includes(this.state.guess)) {
      this.setState({ messageType: "Word already found" });
    } else {
      // If this is a word that hasn't been found yet
      if (
        this.words.includes(this.state.guess) &&
        !this.state.foundWords.includes(this.state.guess)
      ) {
        // Create new array to add to state
        let newFoundWords = [...this.state.foundWords, this.state.guess];
        newFoundWords.sort();
        this.setState({ foundWords: newFoundWords });
        localStorage.setItem("foundWords", JSON.stringify(newFoundWords));
        let newScore = this.state.score + this.state.guess.length;
        this.setState({ score: newScore });
        localStorage.setItem("score", `${newScore}`);

        let positiveMessage = "Score!";
        if (this.state.guess === "HABITABILITY") {
          positiveMessage = "Longest Word!";
        }

        // Positive popup message
        this.setState({ messageType: positiveMessage }, () => {
          // Sets the Header message
          // This is getting all points
          if (this.state.foundWords.length >= 117) {
            this.setState({ progressMessage: "Queen Bee!" });
            localStorage.setItem("progressMessage", "Queen Bee!");
            this.setState({ queenBee: true }, () => {
              this.setState({ winScreen: true });

              this.celebrate();
              setTimeout(() => {
                this.celebrate();
              }, 200);
              this.celebrate();
              setTimeout(() => {
                this.celebrate();
              }, 400);
              this.celebrate();
              setTimeout(() => {
                this.celebrate();
              }, 600);
              this.celebrate();
              setTimeout(() => {
                this.celebrate();
              }, 800);
              this.celebrate();
              setTimeout(() => {
                this.celebrate();
              }, 1000);
            });
          } else if (this.state.score >= 600) {
            this.setState({ progressMessage: "Genius!" });
            localStorage.setItem("progressMessage", "Genius!");

            if (!this.state.genius) {
              this.setState({ winScreen: true });
              this.setState({ genius: true });
              localStorage.setItem("genius", true);
            }
          } else if (this.state.score >= 500) {
            this.setState({ progressMessage: "Amazing" });
            localStorage.setItem("progressMessage", "Amazing");
          } else if (this.state.score >= 400) {
            this.setState({ progressMessage: "Great" });
            localStorage.setItem("progressMessage", "Great");
          } else if (this.state.score >= 300) {
            this.setState({ progressMessage: "Solid" });
            localStorage.setItem("progressMessage", "Solid");
          } else if (this.state.score >= 200) {
            this.setState({ progressMessage: "Nice" });
            localStorage.setItem("progressMessage", "Nice");
          } else if (this.state.score >= 100) {
            this.setState({ progressMessage: "Good" });
            localStorage.setItem("progressMessage", "Good");
          }
        });
      } else {
        this.setState({ messageType: "Error" });
      }
      if (
        this.specialWords.includes(this.state.guess) &&
        !this.state.foundSpecialWords.includes(this.state.guess)
      ) {
        let newFoundSpecialWords = [
          ...this.state.foundSpecialWords,
          this.state.guess,
        ];
        this.setState({ foundSpecialWords: newFoundSpecialWords }, () => {
          if (this.state.foundSpecialWords.length === 3) {
            this.setState({ birthdayScreen: true });
            this.celebrate();
          }
        });
        localStorage.setItem(
          "foundSpecialWords",
          JSON.stringify(newFoundSpecialWords)
        );
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
        <BirthdayOverlay
          birthdayScreen={this.state.birthdayScreen}
          closeBirthdayScreen={this.closeBirthdayScreen}
        />
        <WinOverlay
          winScreen={this.state.winScreen}
          queenBee={this.state.queenBee}
          progressMessage={this.state.progressMessage}
          closeWinScreen={this.closeWinScreen}
          score={this.state.score}
          foundWords={this.state.foundWords}
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
        <div className="guess-input-container">
          <p className="guess-input">{this.state.guess}</p>
        </div>
        <div className="letter-container">
          {this.letters.map((key) => (
            <Letter key={key} text={key} addToGuess={this.addToGuess}></Letter>
          ))}
        </div>

        <button onClick={this.deleteFromGuess}>Delete</button>
        <button onClick={this.checkGuess}>Submit</button>
        <FoundWords
          foundWords={this.state.foundWords}
          specialWords={this.specialWords}
        />
      </div>
    );
  }
}

export default App;
