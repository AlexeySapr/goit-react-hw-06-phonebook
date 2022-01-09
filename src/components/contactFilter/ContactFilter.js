import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { InputLabel, FormInput } from './ContactFilter.styled';

const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <InputLabel>
      Find contacts by name:
      <FormInput
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
      ></FormInput>
    </InputLabel>
  );
};

export default ContactFilter;
