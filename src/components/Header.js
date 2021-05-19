
import React from 'react';
class Header extends React.Component {
    render() {
        this.props.words.forEach((el, index) => {
            console.log(index);
       })
        return <header>
            <div className="progress-dot-container">
                <span>Progress Message</span>
            {this.props.words.map((el, index) => (
                <span className="progress-dot"></span>
            ))}
            </div>
    </header>
    }
}

export default Header;