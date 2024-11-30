import "./App.css";
import { useEffect, useState } from "react";
import { data } from "../data/data.js";
import ContactList from "./contact-list/ContactList.jsx";
import SearchBox from "./search-box/SearchBox.jsx";
import ContactForm from "./contact-form/ContactForm.jsx";
import { nanoid } from "nanoid";

const localStorageContacts = localStorage.getItem("contacts");
const initialData = localStorageContacts ? JSON.parse(localStorageContacts) : data;

function App() {
    const [contacts, setContacts] = useState(initialData);
    const [filter, setFilter] = useState("");

    const addContact = (values) => {
        const { name, number } = values;
        const id = nanoid();
        setContacts([...contacts, { name, number, id }]);
    };

    const deleteContact = id => setContacts(contacts.filter(contact => contact.id !== id));

    const handleFilter = text => setFilter(text);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


    return (
        <>
            <div className="container">
                <h1 className="header">Phonebook</h1>
                <ContactForm onSubmit={addContact}/>
                <SearchBox filter={filter} onChange={handleFilter}/>
                <ContactList data={visibleContacts} onDelete={deleteContact}/>
            </div>
        </>
    );
}

export default App;
