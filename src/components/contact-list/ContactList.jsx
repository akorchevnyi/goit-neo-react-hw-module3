import css from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";

export default function ContactList({ data, onDelete }) {

    return (
        <ul className={css.contactList}>
            {data.map(item => {
                return (
                    <li key={item.id}>
                        <Contact contact={item} onDelete={onDelete}/>
                    </li>
                );
            })}
        </ul>
    );
}
