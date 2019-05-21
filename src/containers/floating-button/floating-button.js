import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css';

class FloatingButton extends React.Component {
    render() {
        const { title, disabled, style } = this.props
        return (
            disabled ?
                <div
                    style={style}
                    className="FloatingButton Disabled" >
                    <p>{title}</p>
                </div>
                :
                <NavLink
                    {...this.props}
                    className="FloatingButton" >
                    <p>{title}</p>
                </NavLink>
        );
    }
}
export default FloatingButton
