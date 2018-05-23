import React, { Component } from 'react';
import './index.css'

class NotFoundPage extends Component {
    render() {
        return (
            <div className="NotFound">
                <p style={{ 'font-size': '100px' }}>404</p>
                <p style={{ 'font-size': '30px' }}>Page not found</p>
            </div>
        );
    }
}

export default NotFoundPage;
