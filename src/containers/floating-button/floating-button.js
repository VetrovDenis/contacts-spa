import React from 'react';
import './styles.css';

class FloatingButton extends React.Component {
    render() {
        const { style, type, handler } = this.props
        return (
            <div style={style} className="FloatingButton" onClick={handler}>
                <p>New</p>
            </div>
        );
    }
}
export default FloatingButton
