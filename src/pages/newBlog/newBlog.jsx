import './newBlog.css';
import InputField from "../../components/inputField/inputField.jsx";
import {useState} from "react";


function NewBlog() {
    const [formState, setFormState] = useState({
        blogtitle: '',
        subtitle: '',
        author: '',
        message: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }




    return(
        <>
            <h1>Nieuwe blog</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <InputField
                        label="Titel"
                        details="blog-title"
                        type="text"
                        name="blogtitle"
                        value={formState.blogtitle}
                        onChange={handleChange}
                    />

                    <InputField
                        label="Subtitel"
                        details="blog-subtitle"
                        type="text"
                        name="subtitle"
                        value={formState.subtitle}
                        onChange={handleChange}
                />

                    <InputField
                        label="Auteur"
                        details="blog-author"
                        type="text"
                        name="author"
                        value={formState.author}
                        onChange={handleChange}
                />

                    <InputField
                        label="Bericht"
                        details="blog-message"
                        type="textarea"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                />
                </fieldset>
                <button type="submit">Verzenden</button>
            </form>
        </>
    );
}

export default NewBlog;