import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css';
//components

class ContactEdit extends React.Component {
    state = {
        name: "",
        surname: "",
        phone: ""
    }
    handleChange = (event) => {
        if (event.target.value.length > 0) {
            this.setState({ [event.target.name]: parseFloat(event.target.value) })
        }
    }
    render() {
        const { phones } = this.state
        return (
            <div className="ContactEdit">
                <form >
                    <div className="ContactEdit-inputs">
                        <div>
                            <p>Name:</p>
                            <input type="text" name="name" disabled={true} />
                        </div>
                        <div>
                            <p>Surname:</p>
                            <input type="text" name="surname" disabled={true} />
                        </div>
                        <div>
                            <p>Phone:</p>
                            <input type="text" name="phone" disabled={true} />
                        </div>
                    </div>
                    <div className="ContactEdit-submit" onClick={() => { }}>
                        Submit
                        </div>
                </form>
            </div>
        );
    }
}

export default ContactEdit;
