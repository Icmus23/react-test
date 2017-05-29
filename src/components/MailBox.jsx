import React from 'react';

export default class MailBox extends React.Component {

    render() {
        return (
            <div>
                <h3>Mailbox</h3>
                <div>
                    {this.props.unreadMessagesCount > 0 &&
                        <span>
                            You have {this.props.unreadMessagesCount} unread messages
                        </span>
                    }
                </div>
            </div>
        );
    }
}