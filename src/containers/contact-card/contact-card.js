import React from 'react';
import { default_image_url } from "../../constants/constants"
import './styles.css';

class ContactTable extends React.Component {
    render() {
        const { id, name, surname, phone_numbers, image_url } = this.props.contact
        return (
            <div className="ContactCard" >
                <div className="ContactCard-image" style={{
                    backgroundImage: `url(${image_url ? image_url : default_image_url})`,
                    backgroundSize: "cover"
                }}>
                </div>
                <p>{name} {surname}</p>
            </div>
        );
    }
}
export default ContactTable
