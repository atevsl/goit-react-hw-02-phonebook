import React from 'react';
class ContactList extends React.Component {
  state = {};

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {this.props.phoneBook.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default ContactList;
