import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../../redux/phonebook/phonebook-actions';

import { List, ListItem, Text, ItemBtn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
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
