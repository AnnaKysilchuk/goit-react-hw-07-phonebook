import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from '../../../redux/contacts/contactsSlice';
import style from './ContactsListItem.module.css';

export const ContactsListItem = ({ name, number, id }) => {
    const [deleteBtn] = useDeleteContactsMutation();
    return (
        <li className={style.contactsListItem}>
            <p className={style.contactsListItemData}>
                {name}: {number}
            </p>
            <button className={style.deleteBtn} type="button" onClick={() => deleteBtn(id)}>
                Delete
            </button>
        </li>
    );
};

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
