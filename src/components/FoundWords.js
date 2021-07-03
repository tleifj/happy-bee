import React from "react";

class FoundWords extends React.Component {
  render() {
    const { foundWords, specialWords } = this.props;
    if (foundWords.length) {
      return (
        <div className="found-words">
          <p>Found Words</p>
          <ol>
            {foundWords.map((key) => (
              <li
                className={specialWords.includes(key) ? "special-word" : ""}
                key={key}
              >
                {key}
              </li>
            ))}
          </ol>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default FoundWords;
