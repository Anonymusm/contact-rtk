import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { useSelector } from "react-redux";
import { selectFiltered } from "../redux/selectors";

export default function ContactContainer() {
  const contacts = useSelector(
  (state) => state.contactsData.contacts
);

const filtered = useSelector(selectFiltered);
  
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}
      {contacts.length > 0 && filtered.length === 0 && <p>No todos found!</p>}
      <ContactList />
    </>
  );
}
