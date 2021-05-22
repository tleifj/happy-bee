
import React from 'react';
class Header extends React.Component {
    render() {
        this.props.words.forEach((el, index) => {
            console.log(index);
       })
        return <header>
            <div className="container">
            <span className="progress-message">Progress Message</span>
            <div className="progress-dot-container">
            {this.props.words.map((el, index) => (
                <span className="progress-dot"></span>
            ))}
            </div>
            </div>
    </header>
    }
}

export default Header;