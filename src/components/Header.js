import React from "react";
class Header extends React.Component {
  render() {
    const { words, foundWords, progressMessage, score } = this.props;
    const levels = [0, 1, 2, 3, 4, 5, 6];
    let active = 0;
    console.log(foundWords);
    levels.forEach((el, index) => {
      if (score >= index * 100) {
        active = index;
      }
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
                  (score >= index * 100 ? "progress-dot--complete" : "") +
                  " " +
                  (index === active ? "progress-dot--active" : "")
                }
              >
                <span>{score}</span>
              </span>
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
