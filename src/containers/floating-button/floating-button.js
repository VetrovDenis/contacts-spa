import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css';

class FloatingButton extends React.Component {
    render() {
        const { title } = this.props
        return (
            <NavLink
                {...this.props}
                className="FloatingButton" >
                <p>{title}</p>
            </NavLink>
        );
    }
}
export default FloatingButton
