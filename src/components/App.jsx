import React from 'react';

import Form from './Form';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    this.setState({ name: '', number: '' });
  };
  onInputHendler = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form
          name={this.state.name}
          number={this.state.number}
          onSubmit={this.addContact}
          onInputHendler={this.onInputHendler}
        />
        <ContactList phoneBook={this.state.contacts}></ContactList>
      </div>
    );
  }
}
export default App;
