import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../redux/operations";
import { useEffect } from "react";
import { selectFiltered } from "../redux/selectors";

export function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltered);

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <ul className="list">
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <h3>
            {contact.name}: {contact.number}
          </h3>

          <button type="button" onClick={() => dispatch(deleteContact(contact))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}