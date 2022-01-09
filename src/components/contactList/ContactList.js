import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../../redux/phonebook/phonebook-actions';
import {
  getContacts,
  getFilter,
} from '../../redux/phonebook/phonebook-selectors';

import { List, ListItem, Text, ItemBtn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <ItemBtn
            type="button"
            onClick={() => dispatch(delContact(contact.id))}
          >
            Delete
          </ItemBtn>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
