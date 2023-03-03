import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Info, Button } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Info>
        <p>{name}: </p>
        <p>{phone}</p>
      </Info>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};