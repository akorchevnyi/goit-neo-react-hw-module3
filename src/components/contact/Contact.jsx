import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
    const {id, name, number} = contact;

    return (
        <div className={css.wrapper}>

            <div className={css.contact}>
                <div className={css.line}>
                    &#128100;
                    {name}
                </div>
                <div className={css.line}>
                    &#128222;
                    {number}
                </div>
            </div>

            <button type="button" onClick={()=> onDelete(id)}>&#128465;</button>
        </div>
    );
}
