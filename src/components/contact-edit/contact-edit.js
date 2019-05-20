import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css';
//components

class ContactEdit extends React.Component {
    state = {
        name: "",
        surname: "",
        phones: []
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
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" disabled={true} />
                    </label>
                    <label>
                        Surname:
                        <input type="text" name="surname" disabled={true} />
                    </label>
                    {phones.map((phone, index) => {
                        return (
                            <label>
                                Phone № {index + 1}:
                                <input type="number" name="surname" disabled={true} />
                            </label>
                        )
                    })}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ContactEdit;
