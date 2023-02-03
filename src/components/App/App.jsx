import React from 'react';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(newContact.name + ' is already in contacts')
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };
  onInputHendler = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  deleteItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <>
          <ContactForm onSubmit={this.addContact} />
          <Filter onInputHendler={this.onInputHendler}></Filter>
        </>

        <ContactList
          deleteItem={this.deleteItem}
          onInputHendler={this.onInputHendler}
          filter={this.state.filter}
          phoneBook={this.state.contacts}
        ></ContactList>
      </div>
    );
  }
}
export default App;
