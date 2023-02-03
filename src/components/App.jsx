import React from 'react';

import Form from './Form';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    this.setState({ name: '' });
  };
  enterName = e => {
    this.setState({ name: e.currentTarget.value });
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
          onSubmit={this.addContact}
          enterName={this.enterName}
        />
        <ContactList phoneBook={this.state.contacts}></ContactList>
      </div>
    );
  }
}
export default App;
