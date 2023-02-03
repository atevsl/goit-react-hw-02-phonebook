import React from 'react';
class ContactList extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <label>
          <span>Find contacts by name:</span>
          <input name="filter" onChange={this.props.onInputHendler}></input>
        </label>
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
