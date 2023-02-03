import React from 'react';
class ContactList extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h2>Contacts</h2>

        <ul>
          {this.props.filter === ''
            ? this.props.phoneBook.map(contact => {
                return (
                  <li key={contact.id}>
                    {contact.name}: {contact.number}
                  </li>
                );
              })
            : this.props.phoneBook
                .filter(contact =>
                  contact.name
                    .toLowerCase()
                    .includes(this.props.filter.toLowerCase())
                )
                .map(contact => {
                  return (
                    <li key={contact.id}>
                      {contact.name}: {contact.number}
                    </li>
                  );
                })}
        </ul>
      </>
    );
  }
}
export default ContactList;
