import './newBlog.css';
import InputField from "../../components/inputField/inputField.jsx";
import {useState} from "react";
import Textarea from "../../components/textarea/textarea.jsx";
import readTime from "../../helpers/readTime.js";
// import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";



function NewBlog() {
    // const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [formState, setFormState] = useState({
        blogtitle: '',
        subtitle: '',
        author: '',
        content: '',
    });
    const [blogContent, setBlogContent] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        const created = new Date().toISOString();
        setMessageError('');
        setError('');
        toggleLoading(true);

        if (!formState.blogtitle || !formState.subtitle || !formState.author || !formState.content) {
            setError('Alle velden zijn verplicht');
            return;
        }

        if (formState.content.length < 300) {
            setMessageError('Blog moet minimaal 300 tekens bevatten');
            return;
        }

        if (formState.content.length > 2000) {
            setMessageError('Blog mag maximaal 2000 tekens bevatten');
            return;
        }

        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                    title: `${formState.blogtitle}`,
                    subtitle: `${formState.subtitle}`,
                    content: `${formState.content}`,
                    author: `${formState.author}`,
                    created: `${created}`,
                    readTime: `${readTime(formState.content)}`,
                    comments: 0,
                    shares: 0
                }, {
                    headers: {
                        'novi-education-project-id': '2767c1c3-13ff-45b7-a2b7-6870077651b3',
                        'content-type': 'application/json'
                    }
                });
            setBlogContent(response.data);

        } catch (error) {
            console.error(error);
            setError('Er is iets misgegaan bij het opslaan van de blogpost');

        } finally {
            toggleLoading(false);
        }









        // console.log(formState);
        console.log(`
            title: ${formState.blogtitle}
            subtitle: ${formState.subtitle}
            content: ${formState.content}
            author: ${formState.author}
            created: ${created}
            readTime: ${readTime(formState.content)}
            comments: 0
            shares: 0
        `);

        // navigate('/overzicht');
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

            {blogContent && blogContent.id ? (
                <h2>De blogpost is succesvol toegevoegd. Je kunt deze <Link to={`/blogs/${blogContent.id}`}> hier</Link> bekijken.</h2>

            ) : (

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <InputField
                        label="Titel"
                        id="blog-title"
                        type="text"
                        name="blogtitle"
                        value={blogContent.blogtitle}
                        onChange={handleChange}
                    />

                    <InputField
                        label="Subtitel"
                        id="blog-subtitle"
                        type="text"
                        name="subtitle"
                        value={blogContent.subtitle}
                        onChange={handleChange}
                />

                    <InputField
                        label="Auteur"
                        id="blog-author"
                        type="text"
                        name="author"
                        value={blogContent.author}
                        onChange={handleChange}
                />

                    <Textarea
                        label="Bericht"
                        id="blog-content"
                        name="content"
                        rows={10}
                        cols={50}
                        minLength={300}
                        maxLength={2000}
                        value={blogContent.content}
                        onChange={handleChange}
                        error={messageError}
                />
                </fieldset>
                <button type="submit" className="new-blog-button" disabled={loading}>Verzenden</button>
                {error && <p className="error">{error}</p>}
            </form>
            )}
        </>
    );
}

export default NewBlog;