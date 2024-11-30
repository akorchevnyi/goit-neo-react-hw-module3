import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { schema } from "../../validation/schema.js";

export default function ContactForm({ onSubmit }) {
    const initialValues = {
        name  : "",
        number: ""
    };
    const nameId = useId();
    const numberId = useId();

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
                <Form className={css.form}>
                    <div className={css.inputWrapper}>
                        <label className={css.label} htmlFor={nameId}>Name</label>
                        <Field className={css.field} name="name" type="text" id={nameId}/>
                        <ErrorMessage className={css.error} name="name" component="span"/>
                    </div>

                    <div className={css.inputWrapper}>
                        <label className={css.label} htmlFor={numberId}>Number</label>
                        <Field className={css.field} name="number" type="tel" id={numberId}/>
                        <ErrorMessage className={css.error} name="number" component="span"/>
                    </div>

                    <button className={css.button} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
}