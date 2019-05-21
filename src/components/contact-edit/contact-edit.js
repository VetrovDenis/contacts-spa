import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import './styles.css';
//containers
import FloatingButton from "../../containers/floating-button/floating-button"
//redux
import { changeContact, saveNewContact, deleteContact } from "../../reducers/manage-contact"

class ContactEdit extends React.Component {
    state = {
        id: null,
        name: "",
        surname: "",
        phone_number: "",
        call_history: [],
        edit_mode: false
    }
    componentDidMount = () => {
        const { location, contacts } = this.props
        const params = new URLSearchParams(location.search);
        const param_id = params.get('id');
        console.log(param_id)
        if (param_id) {
            let contactToEdit = contacts.find(x => x.id === Number(param_id))
            if (contactToEdit) {
                const { id, name, surname, phone_number, call_history } = contactToEdit
                this.setState({
                    edit_mode: true,
                    id, name, surname, phone_number, call_history
                })
            }
            else {
                alert(`No contact with id ${param_id} found`)
            }
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
        const { id, name, surname, phone_number, call_history, edit_mode } = this.state
        const { query_params, deleteContact } = this.props
        return (
            <div className="ContactEdit">
                <FloatingButton
                    style={{ left: 10, top: 10 }}
                    title="Back"
                    to={`/`}
                />
                {edit_mode &&
                    <FloatingButton
                        style={{ right: 10, bottom: 10 }}
                        title="Delete"
                        onClick={() => { deleteContact(id) }}
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
                    <div className="ContactEdit-call-history">
                        <div className="Call-history-line Call-history-header">
                            <p>Name</p>
                            <p>Phone</p>
                            <p>Date</p>
                        </div>
                        {call_history.length > 0 ? call_history.map((call, index) => {
                            const { name, phone_number, date } = call
                            return (
                                <div className="Call-history-line">
                                    <p>{name}</p>
                                    <p>{phone_number}</p>
                                    <p>{date}</p>
                                </div>
                            )
                        })
                            : <h4>History is empty</h4>
                        }
                    </div>
                    <FloatingButton
                        style={{ left: 10, bottom: 10 }}
                        title="Save"
                        onClick={() => { this.submitForm(id) }}
                        to={`/`}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        changeContact,
        saveNewContact,
        deleteContact
    },
    dispatch
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEdit);