import React from 'react';

class IntroOverlay extends React.Component {
    render() {
        const { introScreen, startGame} = this.props;
        return <div className={"overlay " + (introScreen ? 'overlay--open' : '')}><button onClick={startGame}>Play</button></div>
    }
}

export default IntroOverlay;