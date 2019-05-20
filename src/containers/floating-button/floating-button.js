import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css';

class FloatingButton extends React.Component {
    render() {
        return (
            <NavLink
                to={`/contact-edit`}
                {...this.props}
                className="FloatingButton" >
                <p>New</p>
            </NavLink>
        );
    }
}
export default FloatingButton
