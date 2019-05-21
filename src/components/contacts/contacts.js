import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import ContactTable from "../../containers/contact-table/contact-table"
import FloatingButton from "../../containers/floating-button/floating-button"
import './styles.css';

class Contacts extends React.Component {
    state = {
        current_page: 1,
        contactsToShow: []
    }
    componentDidMount() {
        //initialize pagination 
        const contactsToShow = this.props.contacts
        const contacts_per_page = 1;                                          //amount of elements to show on 1 page
        const params = new URLSearchParams(this.props.location.search);
        const page = Number(params.get('page'));
        const maximumPage = Math.ceil(contactsToShow.length / contacts_per_page);
        const current_page = page && page > 0 ? page <= maximumPage ? page : maximumPage : 1;
        this.setState({ current_page })
        this.setState({ contactsToShow: contactsToShow.splice((current_page - 1) * contacts_per_page, contacts_per_page) })
    }
    render() {
        const { contactsToShow } = this.state
        return (
            <div className="Contacts" >
                <ContactTable contacts={contactsToShow} />
                <FloatingButton
                    style={{ right: 10, bottom: 10 }}
                    title="Add"
                    to={`/contact-edit`}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    contacts: state.contacts
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
    },
    dispatch
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);
