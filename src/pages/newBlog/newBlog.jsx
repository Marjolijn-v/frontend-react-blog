import './newBlog.css';
import InputField from "../../components/inputField/inputField.jsx";
import {useState} from "react";
import Textarea from "../../components/textarea/textarea.jsx";
import readTime from "../../helpers/readTime.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";



function NewBlog() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [formState, setFormState] = useState({
        blogtitle: '',
        subtitle: '',
        author: '',
        message: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const created = new Date().toISOString();
        setMessageError('');
        setError('');

        if (!formState.blogtitle || !formState.subtitle || !formState.author || !formState.message) {
            setError('Alle velden zijn verplicht');
            return;
        }

        if (formState.message.length < 300) {
            setMessageError('Blog moet minimaal 300 tekens bevatten');
            return;
        }

        if (formState.message.length > 2000) {
            setMessageError('Blog mag maximaal 2000 tekens bevatten');
            return;
        }

        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                    "title": `${formState.blogtitle}`,
                    "subtitle": `${formState.subtitle}`,
                    "message": `${formState.message}`,
                    "author": `${formState.author}`,
                    "created": `${created}`,
                    "readtime": `${readTime(formState.message)}`,
                    "comments": 0,
                    "shares": 0
                }, {
                    headers: {
                        'novi-education-project-id': '2767c1c3-13ff-45b7-a2b7-6870077651b3',
                    }
                });
            setFormState(response);

        } catch (error) {
            console.error(error);
            setError('Er is iets misgegaan bij het opslaan van de blogpost');

        }









        // console.log(formState);
        console.log(`
            title: ${formState.blogtitle}
            subtitle: ${formState.subtitle}
            message: ${formState.message}
            author: ${formState.author}
            created: ${created}
            readtime: ${readTime(formState.message)}
            comments: 0
            shares: 0
        `);

        navigate('/overzicht');
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });

        setError('');
    }




    return(
        <>
            <h1>Post toevoegen</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <InputField
                        label="Titel"
                        id="blog-title"
                        type="text"
                        name="blogtitle"
                        value={formState.blogtitle}
                        onChange={handleChange}
                    />

                    <InputField
                        label="Subtitel"
                        id="blog-subtitle"
                        type="text"
                        name="subtitle"
                        value={formState.subtitle}
                        onChange={handleChange}
                />

                    <InputField
                        label="Auteur"
                        id="blog-author"
                        type="text"
                        name="author"
                        value={formState.author}
                        onChange={handleChange}
                />

                    <Textarea
                        label="Bericht"
                        id="blog-message"
                        name="message"
                        rows={10}
                        cols={50}
                        minLength={300}
                        maxLength={2000}
                        value={formState.message}
                        onChange={handleChange}
                        error={messageError}
                />
                </fieldset>
                <button type="submit" className="new-blog-button">Verzenden</button>
                {error && <p className="error">{error}</p>}
            </form>
        </>
    );
}

export default NewBlog;