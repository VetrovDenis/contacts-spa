import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css';

class ContactTable extends React.Component {
    render() {
        const { id, name, surname, phone_number } = this.props.contact
        return (
            <NavLink
                to={`/contact-edit/` + id}
                className="ContactCard" >
                <p>{name} {surname}</p>
                <p>{phone_number}</p>
            </NavLink>
        );
    }
}
export default ContactTable
