import React from "react";

class IntroOverlay extends React.Component {
  render() {
    const { introScreen, startGame } = this.props;
    return (
      <div className={"overlay " + (introScreen ? "overlay--open" : "")}>
        <div className="overlay__inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            className="bee-icon"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M42.0259 30.2053V21.2053C42.0259 16.2053 38.0259 12.2053 33.0259 12.2053C28.0259 12.2053 24.0259 16.2053 24.0259 21.2053C24.0259 26.2053 28.0259 30.2053 33.0259 30.2053H42.0259Z"
                fill="white"
              />
              <path
                d="M60.3259 27.6053C63.8259 24.1053 63.9259 18.4053 60.4259 14.9053C56.9259 11.4053 51.2259 11.4053 47.7259 14.9053C46.0259 16.6053 45.0259 18.9053 45.0259 21.3053V30.3053H54.0259C56.4259 30.3053 58.7259 29.3053 60.3259 27.6053Z"
                fill="white"
              />
              <path
                d="M17.8259 50.9053C17.8259 59.3053 23.0259 66.0053 30.5259 67.9053V34.3053C23.1259 36.9053 17.8259 43.5053 17.8259 50.9053Z"
                fill="#F8CD0E"
              />
              <path
                d="M51.8257 68.5053C57.2257 68.0053 62.1257 65.4053 65.5257 61.2053C61.8257 62.2053 57.8257 61.1053 55.1257 58.4053L57.2257 56.3053C60.3257 59.3053 65.2257 59.4053 68.3257 56.4053C69.0257 54.6053 69.3257 52.8053 69.3257 50.9053C69.5257 41.4053 62.1257 33.6053 52.6257 33.3053C52.4257 33.3053 52.1257 33.3053 51.9257 33.3053H45.1257V68.5053H51.8257ZM56.1257 43.9053C57.8257 43.9053 59.2257 45.3053 59.2257 47.1053C59.2257 48.8053 57.8257 50.2053 56.0257 50.2053C54.3257 50.2053 52.9257 48.8053 52.9257 47.0053C53.0257 45.3053 54.4257 43.9053 56.1257 43.9053Z"
                fill="#F8CD0E"
              />
              <path
                d="M35.2259 33.3053C34.6259 33.3053 34.0259 33.4053 33.5259 33.5053V68.4053C34.0259 68.4053 34.6259 68.5053 35.1259 68.5053H42.0259V33.3053H35.2259Z"
                fill="#F8CD0E"
              />
              <path
                d="M56.1258 50.2053C57.8258 50.2053 59.2258 48.8053 59.2258 47.0053C59.2258 45.2053 57.8258 43.9053 56.0258 43.9053C54.2258 43.9053 52.9258 45.3053 52.9258 47.0053C52.9258 48.7053 54.4258 50.2053 56.1258 50.2053Z"
                fill="black"
              />
              <path
                d="M59.7258 31.8053C60.7258 31.3053 61.6258 30.6053 62.5258 29.8053C67.2258 25.1053 67.2258 17.5053 62.5258 12.8053C57.8258 8.10532 50.2258 8.10532 45.5258 12.8053C44.7258 13.6053 44.0258 14.5053 43.5258 15.5053C40.3258 9.70532 33.1258 7.50532 27.2258 10.7053C21.3258 13.9053 19.2258 21.1053 22.4258 27.0053C23.6258 29.3053 25.6258 31.1053 28.0258 32.2053C20.7258 35.2053 15.5258 41.9053 14.8258 49.4053H9.22583V52.4053H14.8258C15.4258 63.2053 24.3258 71.6053 35.1258 71.5053H51.9258C63.1258 70.6053 72.2258 61.4053 72.2258 50.9053C72.4258 42.5053 67.4258 35.0053 59.7258 31.8053ZM30.5258 67.9053C23.0258 65.9053 17.8258 59.3053 17.8258 50.9053C17.8258 43.6053 23.2258 36.9053 30.5258 34.4053V67.9053ZM42.0258 68.5053H35.1258C34.6258 68.5053 34.0258 68.5053 33.5258 68.4053V33.5053C34.1258 33.4053 34.7258 33.3053 35.2258 33.3053H42.0258V68.5053ZM42.0258 30.3053H33.0258C30.6258 30.3053 28.3258 29.4053 26.6258 27.7053C23.1258 24.2053 23.0258 18.5053 26.5258 15.0053C30.0258 11.5053 35.7258 11.4053 39.2258 14.9053C40.9258 16.6053 41.9258 18.9053 41.9258 21.3053L42.0258 30.3053ZM45.0258 21.3053C45.0258 16.3053 49.0258 12.3053 54.0258 12.3053C59.0258 12.3053 63.0258 16.3053 63.0258 21.3053C63.0258 26.3053 59.0258 30.3053 54.0258 30.3053H45.0258V21.3053ZM57.1258 56.3053L55.0258 58.4053C57.7258 61.1053 61.7258 62.2053 65.4258 61.2053C62.0258 65.4053 57.1258 68.0053 51.7258 68.4053H44.9258V33.3053H51.7258C61.2258 33.1053 69.0258 40.6053 69.2258 50.1053C69.2258 50.4053 69.2258 50.6053 69.2258 50.9053C69.2258 52.8053 68.9258 54.7053 68.2258 56.4053C65.2258 59.4053 60.2258 59.4053 57.1258 56.3053Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  x="9.22583"
                  y="9.20532"
                  width="63.1"
                  height="62.3"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <h1>Happy Bee (Day)</h1>
          <h2>How many words can you find for your birthday?</h2>
          <button onClick={startGame}>Play</button>
          <div className="overlay__bottom">
            <p>July 4, 2021</p>
            <p>Edited by Travis Johnson</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroOverlay;
