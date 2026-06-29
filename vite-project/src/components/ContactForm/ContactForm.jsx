import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/operations";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch()


  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addContact({
      name: name,
      number: number
    }))



    setName("");
    setNumber("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="name--input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}
