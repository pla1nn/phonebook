import { nanoid } from "nanoid";
import { Component } from "react";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { List } from "./List/List";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  handleFormSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact]
    }));
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value })
  }

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id)
    }))
  }


  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form fromSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <List contacts={this.getFilteredContacts()} onDelete={this.handleDelete} />
      </div>
    )
  }
}