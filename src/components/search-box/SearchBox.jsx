import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onChange }) {
    return (
        <div className={css.wrapper}>
            <label>
                Find contacts by name
                <input className={css.search} type="text" value={filter} onChange={e => onChange(e.target.value)}/>
            </label>
        </div>
    );
}
