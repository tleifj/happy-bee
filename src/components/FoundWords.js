import React from "react";

class FoundWords extends React.Component {
  render() {
    const { foundWords, specialWords } = this.props;
    console.log(foundWords);
    if (foundWords.length) {
      return (
        <div className="found-words">
          <p>Found Words</p>
          {foundWords.map((key) => (
            <li
              className={specialWords.includes(key) ? "special-word" : ""}
              key={key}
            >
              {key}
            </li>
          ))}
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default FoundWords;
