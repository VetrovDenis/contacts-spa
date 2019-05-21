import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import ContactTable from "../../containers/contact-table/contact-table"
import FloatingButton from "../../containers/floating-button/floating-button"
import './styles.css';

class Contacts extends React.Component {
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const page = params.get('page');
        console.log(page)
    }
    render() {
        const { contacts } = this.props
        return (
            <div className="Contacts" >
                <ContactTable contacts={contacts} />
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
