import React from 'react';

class Letter extends React.Component {
    
    render() {
        const { text, addToGuess } = this.props;
        return <div className="letter" onClick={(e) => {addToGuess(e.target.innerHTML)}}>{ text }</div>
    }
}

export default Letter;