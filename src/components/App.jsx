import React from 'react';

import Form from './Form';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
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
        <ContactList
          filter={this.state.filter}
          phoneBook={this.state.contacts}
          onInputHendler={this.onInputHendler}
        ></ContactList>
      </div>
    );
  }
}
export default App;
