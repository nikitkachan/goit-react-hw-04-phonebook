import { useState, useEffect} from "react"
import { AddContact } from "./AddContact/AddContact";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList/ContactsList";
import { FilterContacts } from "./FilterContacts/FilterContacts";
import { Wrapper } from "./App.styled";

export const App = () => {
  
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts')) ?? contacts;
    return parsedContacts;
  }
  );
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
     localStorage.setItem('contacts', stringifiedContacts);
  },[contacts])
  
  const handleAddContact = contactData => {
    const isExist = contacts.some(
      contact => contact.name === contactData.name);
    if (isExist) {
    alert(`${contactData.name} is already in contacts.`);
    return
    };
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };

    setContacts(prev=>[...prev, finalContact])
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId),)
  };
  

  const filteredContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  const addToFilter = value => setFilter(value);
  
  
    return (<Wrapper>
      <h1>Phonebook</h1>
      <AddContact handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <FilterContacts addToFilter={addToFilter} />
      <ContactsList filteredContacts={filteredContacts()} handleDeleteContact={handleDeleteContact} />
    </Wrapper>
    )
}