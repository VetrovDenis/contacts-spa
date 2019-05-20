import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css';
//components
import Contacts from "../contacts/contacts"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
