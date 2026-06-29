// import { useState, useEffect, createContext, useReducer } from "react";

// export const Context = createContext();


// export default function ContactContext({ children }) {
//   const [contacts, dispatch] = useReducer(reducer, []);

//   // const handleContactSubmit = ({ name, number }) => {
//   //   // some === Перевірка на дубль імені
//   //   const isExist = contacts.some(
//   //     (contact) => contact.name.toLowerCase() === name.toLowerCase(),
//   //   );

//   //   if (isExist) {
//   //     alert(`${name} is already in contacts`);
//   //     return;
//   //   }

//   //   const newContact = {
//   //     id: nanoid(),
//   //     name,
//   //     number,
//   //   };

//   //   dispatch({ type: "ADD", new: newContact });

//   //   // setContacts((prev) => [...prev, newContact]);
//   // };

//   // function handleDelete(deleteById) {
//   //   dispatch({ type: "DELETE", id: deleteById });
//   //   refDeleted.current = deleteById;
//   // }

//   // const filterChange = (event) => {
//   //   setFilter(event.target.value);
//   // };

  // const searchedContact = () => {
  //   const normalizedFilter = filter.toLowerCase();

//   //   return contacts.filter(({ name }) =>
//   //     name.toLowerCase().includes(normalizedFilter),
//   //   );
//   // };

//   useEffect(() => {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       dispatch({ type: "PARSE", parsed: parsedContacts });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);
//   return (
//     <Context.Provider
//       value={{
//         contacts,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// }

