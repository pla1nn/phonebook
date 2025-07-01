import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { List } from "./List/List";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const getContacts = localStorage.getItem('contacts')
    if (getContacts) {
      return JSON.parse(getContacts)
    }
    return []
  })
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const handleFormSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    }

    const lowerCaseName = name.toLowerCase()

    if (contacts.find(contact => contact.name.toLowerCase() === lowerCaseName)) {
      alert('this name is already taken')
      return
    }

    setContacts(prev => [...prev, newContact])
  }

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  }


  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form fromSubmit={handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <List contacts={getFilteredContacts()} onDelete={handleDelete} />
      </div>
    )
  
}