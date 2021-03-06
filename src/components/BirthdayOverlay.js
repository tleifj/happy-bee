import React from "react";

class BirthdayOverlay extends React.Component {
  render() {
    const { birthdayScreen, closeBirthdayScreen } = this.props;
    return (
      <div className={"overlay " + (birthdayScreen ? "overlay--open" : "")}>
        <div className="overlay__inner">
          <svg
            width="64"
            height="90"
            viewBox="0 0 64 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bee-icon"
          >
            <path
              d="M32.8001 48.2053V39.2053C32.8001 34.2053 28.8001 30.2053 23.8001 30.2053C18.8001 30.2053 14.8001 34.2053 14.8001 39.2053C14.8001 44.2053 18.8001 48.2053 23.8001 48.2053H32.8001Z"
              fill="white"
            />
            <path
              d="M51.1001 45.6053C54.6001 42.1053 54.7001 36.4053 51.2001 32.9053C47.7001 29.4053 42.0001 29.4053 38.5001 32.9053C36.8001 34.6053 35.8001 36.9053 35.8001 39.3053V48.3053H44.8001C47.2001 48.3053 49.5001 47.3053 51.1001 45.6053Z"
              fill="white"
            />
            <path
              d="M8.60007 68.9053C8.60007 77.3053 13.8001 84.0053 21.3001 85.9053V52.3053C13.9001 54.9053 8.60007 61.5053 8.60007 68.9053Z"
              fill="#F8CD0E"
            />
            <path
              d="M42.5999 86.5053C47.9999 86.0053 52.8999 83.4053 56.2999 79.2053C52.5999 80.2053 48.5999 79.1053 45.8999 76.4053L47.9999 74.3053C51.0999 77.3053 55.9999 77.4053 59.0999 74.4053C59.7999 72.6053 60.0999 70.8053 60.0999 68.9053C60.2999 59.4053 52.8999 51.6053 43.3999 51.3053C43.1999 51.3053 42.8999 51.3053 42.6999 51.3053H35.8999V86.5053H42.5999ZM46.8999 61.9053C48.5999 61.9053 49.9999 63.3053 49.9999 65.1053C49.9999 66.8053 48.5999 68.2053 46.7999 68.2053C45.0999 68.2053 43.6999 66.8053 43.6999 65.0053C43.7999 63.3053 45.1999 61.9053 46.8999 61.9053Z"
              fill="#F8CD0E"
            />
            <path
              d="M26.0001 51.3053C25.4001 51.3053 24.8001 51.4053 24.3001 51.5053V86.4053C24.8001 86.4053 25.4001 86.5053 25.9001 86.5053H32.8001V51.3053H26.0001Z"
              fill="#F8CD0E"
            />
            <path
              d="M46.9 68.2053C48.6 68.2053 50 66.8053 50 65.0053C50 63.2053 48.6 61.9053 46.8 61.9053C45 61.9053 43.7 63.3053 43.7 65.0053C43.7 66.7053 45.2 68.2053 46.9 68.2053Z"
              fill="black"
            />
            <path
              d="M50.5 49.8053C51.5 49.3053 52.4 48.6053 53.3 47.8053C58 43.1053 58 35.5053 53.3 30.8053C48.6 26.1053 41 26.1053 36.3 30.8053C35.5 31.6053 34.8 32.5053 34.3 33.5053C31.1 27.7053 23.9 25.5053 18 28.7053C12.1 31.9053 9.99997 39.1053 13.2 45.0053C14.4 47.3053 16.4 49.1053 18.8 50.2053C11.5 53.2053 6.29997 59.9053 5.59997 67.4053H0V70.4053H5.59997C6.19997 81.2053 15.1 89.6053 25.9 89.5053H42.7C53.9 88.6053 63 79.4053 63 68.9053C63.2 60.5053 58.2 53.0053 50.5 49.8053ZM21.3 85.9053C13.8 83.9053 8.59997 77.3053 8.59997 68.9053C8.59997 61.6053 14 54.9053 21.3 52.4053V85.9053ZM32.8 86.5053H25.9C25.4 86.5053 24.8 86.5053 24.3 86.4053V51.5053C24.9 51.4053 25.5 51.3053 26 51.3053H32.8V86.5053ZM32.8 48.3053H23.8C21.4 48.3053 19.1 47.4053 17.4 45.7053C13.9 42.2053 13.8 36.5053 17.3 33.0053C20.8 29.5053 26.5 29.4053 30 32.9053C31.7 34.6053 32.7 36.9053 32.7 39.3053L32.8 48.3053ZM35.8 39.3053C35.8 34.3053 39.8 30.3053 44.8 30.3053C49.8 30.3053 53.8 34.3053 53.8 39.3053C53.8 44.3053 49.8 48.3053 44.8 48.3053H35.8V39.3053ZM47.9 74.3053L45.8 76.4053C48.5 79.1053 52.5 80.2053 56.2 79.2053C52.8 83.4053 47.9 86.0053 42.5 86.4053H35.7V51.3053H42.5C52 51.1053 59.8 58.6053 60 68.1053C60 68.4053 60 68.6053 60 68.9053C60 70.8053 59.7 72.7053 59 74.4053C56 77.4053 51 77.4053 47.9 74.3053Z"
              fill="black"
            />
            <path d="M23 20L34.6111 5L45 20H23Z" fill="#FF85D5" />
            <path
              d="M22 21L34.6667 5L46 21H22Z"
              stroke="black"
              strokeWidth="2.5"
            />
            <circle
              cx="34.5"
              cy="4.5"
              r="3.25"
              fill="white"
              stroke="black"
              strokeWidth="2.5"
            />
          </svg>
          <h1>Happy Birthday, Hil!</h1>
          <h2>
            I hope you had as much fun playing this as I did building it. Love
            you!
          </h2>
          <button onClick={closeBirthdayScreen}>Close</button>
        </div>
      </div>
    );
  }
}

export default BirthdayOverlay;
