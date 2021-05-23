
import React from 'react';
class Header extends React.Component {
    render() {
        const {words, foundWords, progressMessage } = this.props;
        console.log(foundWords);
        words.forEach((el, index) => {
            console.log(index);
       })
        return <header>
            <div className="container">
            <span className="progress-message">{progressMessage}</span>
            <div className="progress-dot-container">
            {words.map((el, index) => (
                <span key={index} className={'progress-dot ' + (foundWords.length > index ? 'progress-dot--complete': '' )}></span>
            ))}
            </div>
            </div>
    </header>
    }
}

export default Header;