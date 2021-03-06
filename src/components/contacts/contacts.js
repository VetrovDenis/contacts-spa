import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import ContactTable from "../../containers/contact-table/contact-table"
import FloatingButton from "../../containers/floating-button/floating-button"
import Pagination from "../../containers/contacts-pagination/contacts-pagination"
import './styles.css';

const contacts_per_page = 10;

class Contacts extends React.Component {
    state = {
        current_page: 1,
        maximum_page: Math.ceil(this.props.contacts.length / contacts_per_page),
        contactsToShow: [],
    }
    calculatePagination = (search_url, contacts) => {
        const { maximum_page } = this.state
        const contactsToShow = [...contacts]
        const params = new URLSearchParams(search_url);
        const page = Number(params.get('page'));
        const current_page = page && page > 0 ? page <= maximum_page ? page : maximum_page : 1;
        this.setState({ current_page })
        this.setState({ contactsToShow: contactsToShow.splice((current_page - 1) * contacts_per_page, contacts_per_page) })
    }
    componentDidMount() {
        this.calculatePagination(this.props.location.search, this.props.contacts)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search ||
            nextProps.contacts !== this.props.contacts
        )
            this.calculatePagination(nextProps.location.search, nextProps.contacts)
    }
    render() {
        const { contactsToShow, current_page, maximum_page } = this.state
        return (
            <div className="Contacts" >
                <ContactTable contacts={contactsToShow} />
                <Pagination current_page={current_page} maximum_page={maximum_page} />
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
