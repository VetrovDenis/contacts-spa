import React from 'react';
import ContactCard from "../contact-card/contact-card"
import './styles.css';

class ContactTable extends React.Component {
    render() {
        const { contacts } = this.props
        return (
            <div className="ContactTable" >
                {contacts.map((contact, index) => {
                    return (
                        <ContactCard key={index} contact={contact} />
                    )
                })}

            </div>
        );
    }
}
export default ContactTable
