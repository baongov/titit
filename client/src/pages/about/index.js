import React, { Component } from 'react';
import './index.css'

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutTextbox">
                <h2 className="Title">Twitter Splitter</h2>

                <p className="Paragraph">The product Tweeter allows users to post short messages limited to 50 characters each. </p>
                <p className="Paragraph">Sometimes, users get excited and write messages longer than 50 characters.</p>
                <p className="Paragraph">Instead of rejecting these messages, we would like to add a new feature that will split the message into parts and send multiple messages on the user's behalf, all of them meeting the 50 character requirement.</p>

                <p className="Paragraph">
                    <strong>Date Created: </strong> 5/2018
                </p>
                <p className="Paragraph">
                    <strong>Github: </strong>
                    <a href="https://github.com/ngovietbao/assignment-twitsplit">Click here</a>
                </p>
            </div>
        );
    }
}

export default AboutPage;
