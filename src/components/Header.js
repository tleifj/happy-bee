import React from "react";
class Header extends React.Component {
  render() {
    const { words, foundWords, progressMessage, score } = this.props;
    const levels = [1, 2, 3, 4, 5];
    console.log(foundWords);
    words.forEach((el, index) => {
      console.log(index);
    });
    return (
      <header>
        <div className="container">
          <span className="progress-message">{progressMessage}</span>
          <div className="progress-dot-container">
            {levels.map((el, index) => (
              <span
                key={index}
                className={
                  "progress-dot " +
                  (score >= index * 140 ? "progress-dot--complete" : "")
                }
              ></span>
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
