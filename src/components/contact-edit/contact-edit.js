import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import './styles.css';
//containers
import FloatingButton from "../../containers/floating-button/floating-button"
//redux
import { changeContact, saveNewContact } from "../../reducers/manage-contact"

class ContactEdit extends React.Component {
    state = {
        id: null,
        name: "",
        surname: "",
        phone_number: "",
        call_history: [],
        edit_mode: false
    }
    componentWillMount = () => {
        const { query_params, contacts } = this.props
        if (query_params.id) {
            let contactToEdit = contacts.find(x => x.id === Number(query_params.id))
            const { id, name, surname, phone_number, call_history } = contactToEdit
            this.setState({
                edit_mode: true,
                id, name, surname, phone_number, call_history
            })
        }
    }
    handleChange = (event) => {
        if (event.target.value.length > 0) {
            this.setState({ [event.target.name]: event.target.value })
        }
    }
    submitForm = () => {
        const { id, name, surname, phone_number, call_history, edit_mode } = this.state
        let changedUser = {
            id, name, surname, phone_number, call_history
        }
        edit_mode ? this.props.changeContact(changedUser) : this.props.saveNewContact(changedUser)
    }
    render() {
        const { name, surname, phone_number, call_history, edit_mode } = this.state
        const { query_params } = this.props
        return (
            <div className="ContactEdit">
                {edit_mode &&
                    <FloatingButton
                        style={{ right: 10, top: 10 }}
                        title="Delete"
                        onClick={() => { console.log("deleted") }}
                        to={`/`}
                    />
                }
                <form >
                    <div className="ContactEdit-inputs">
                        <div>
                            <p>Name:</p>
                            <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <p>Surname:</p>
                            <input type="text" name="surname" value={surname} onChange={this.handleChange} />
                        </div>
                        <div>
                            <p>Phone:</p>
                            <input type="text" name="phone_number" value={phone_number} onChange={this.handleChange} />
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
                                const { name, phone_number, date } = call
                                return (
                                    <div className="Call-history-line">
                                        <p>{name}</p>
                                        <p>{phone_number}</p>
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
    return {
        contacts: state.contacts,
        query_params: ownProps.match.params
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        changeContact,
        saveNewContact
    },
    dispatch
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEdit);