import { useGetContactsQuery } from '../../redux/contacts/contactsSlice';
import { useSelector } from 'react-redux/es/exports';
import { ContactsListItem } from './contactsListItem/ContactsListItem';
import { useMemo } from 'react';

export const ContactsList = () => {
    const filter = useSelector(state => state.filter.filter);
    const { data: contacts } = useGetContactsQuery();

    const filteredContacts = useMemo(() => {
        return (
            contacts &&
            contacts
                .filter(contact =>
                    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
                )
                .sort((firstContact, secondContact) =>
                    firstContact.name.localeCompare(secondContact.name),
                )
        );
    }, [filter, contacts]);

    return (
        <div>
            <ul>
                {filteredContacts &&
                    filteredContacts.map(({ id, name, phone }) => (
                        <ContactsListItem key={id} name={name} number={phone} id={id} />
                    ))}
            </ul>
        </div>
    );
};
