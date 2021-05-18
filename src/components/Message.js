import React from 'react';

class Message extends React.Component {
    render() {
        const { messageType, messageActive } = this.props;
        return <div className={"message " +  (messageActive ? 'message--active' : '')}>{messageType}</div>
    }
}

export default Message;