import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import './styles.css';
//components
import Contacts from "../contacts/contacts"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contacts {...this.props} />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
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
)(App);
