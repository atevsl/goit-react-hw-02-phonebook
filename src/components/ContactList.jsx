import React from 'react';
const ContactItem = ({ contact: { id, name, number }, deleteItem }) => {
  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => deleteItem(id)}>
        Delete
      </button>
    </>
  );
};

class ContactList extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h2>Contacts</h2>

        <ul>
          {this.props.filter === ''
            ? this.props.phoneBook.map((contact, idx) => {
                return (
                  <li key={idx}>
                    <ContactItem
                      contact={contact}
                      deleteItem={this.props.deleteItem}
                    ></ContactItem>
                  </li>
                );
              })
            : this.props.phoneBook
                .filter(contact =>
                  contact.name
                    .toLowerCase()
                    .includes(this.props.filter.toLowerCase())
                )
                .map((contact, idx) => {
                  return (
                    <li key={idx}>
                      <ContactItem
                        contact={contact}
                        deleteItem={this.props.deleteItem}
                      ></ContactItem>
                    </li>
                  );
                })}
        </ul>
      </>
    );
  }
}
export default ContactList;
