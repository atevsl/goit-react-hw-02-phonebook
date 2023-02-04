import React from 'react';
import {
  ListStyled,
  ListItemStyled,
  ContactTextStyled,
  ContactListHeader,
  ContactListBtn,
} from './ContactList.styled';

class ContactList extends React.Component {
  state = {};
  render() {
    return (
      <>
        <ContactListHeader>Contacts:</ContactListHeader>

        <ListStyled>
          {this.props.filter === ''
            ? this.props.phoneBook.map(contact => {
                return (
                  <ListItemStyled key={contact.id}>
                    <ContactTextStyled>
                      {contact.name}: {contact.number}
                    </ContactTextStyled>
                    <ContactListBtn
                      type="button"
                      onClick={() => this.props.deleteItem(contact.id)}
                    >
                      Delete
                    </ContactListBtn>
                  </ListItemStyled>
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
                    <ListItemStyled key={contact.id}>
                      <ContactTextStyled>
                        {contact.name}: {contact.number}
                      </ContactTextStyled>
                      <ContactListBtn
                        type="button"
                        onClick={() => this.props.deleteItem(contact.id)}
                      >
                        Delete
                      </ContactListBtn>
                    </ListItemStyled>
                  );
                })}
        </ListStyled>
      </>
    );
  }
}
export default ContactList;
