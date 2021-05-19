import React from 'react';

class WinOverlay extends React.Component {
    render() {
        const { winScreen, closeWinScreen } = this.props;
        return <div className={"overlay " + (winScreen ? 'overlay--open' : '')}><button onClick={closeWinScreen}>Close</button></div>
    }
}

export default WinOverlay;