import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { default_image_url } from "../../constants/constants"
import logo from '../../assets/images/logo.svg';
import FloatingButton from "../../containers/floating-button/floating-button"
import './styles.css';
//components

class ContactEdit extends React.Component {
    state = {
        name: "",
        surname: "",
        phone: "",
        call_history: []
    }
    handleChange = (event) => {
        if (event.target.value.length > 0) {
            this.setState({ [event.target.name]: event.target.value })
        }
    }
    submitForm = () => {
        const { name, surname, phone } = this.state
        console.log(this.state)
    }
    render() {
        const { name, surname, phone, image_url, call_history } = this.state
        return (
            <div className="ContactEdit">
                <FloatingButton
                    style={{ left: 10, top: 10 }}
                    title="Delete"
                    onClick={() => { console.log("deleted") }}
                    to={`/`}
                />
                <form >
                    <div className="ContactEdit-inputs">
                        <div>
                            <p>Name:</p>
                            <input type="text" name="name" value={name} disabled={false} onChange={this.handleChange} />
                        </div>
                        <div>
                            <p>Surname:</p>
                            <input type="text" name="surname" value={surname} disabled={true} onChange={this.handleChange} />
                        </div>
                        <div>
                            <p>Phone:</p>
                            <input type="text" name="phone" value={phone} disabled={true} onChange={this.handleChange} />
                        </div>
                    </div>
                    {call_history.length > 0 &&
                        <div className="ContactEdit-call-history">
                            <div className="Call-history-line Call-history-header">
                                <p>Name:</p>
                                <p>Phone:</p>
                                <p>Date:</p>
                            </div>
                            {call_history.map((call, index) => {
                                const { name, phone, date } = call
                                return (
                                    <div className="Call-history-line">
                                        <p>{name}</p>
                                        <p>{phone}</p>
                                        <p>{date}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    <div className="ContactEdit-submit" onClick={() => { this.submitForm() }}>
                        Save
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        contacts: state.contacts
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
    },
    dispatch
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEdit);