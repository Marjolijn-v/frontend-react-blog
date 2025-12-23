import './blogpostPage.css'
import {useParams} from "react-router-dom";


function BlogpostPage() {
    const { title } = useParams();

    return (
        <article>
            <h1>{title}</h1>
            <h2>Subtitel</h2>
            <p>Geschreven door</p>
            <p>Blogtekst</p>
            <p>Aantal reactie en gedeeld</p>
            <p>Terug naar overzicht</p>
        </article>
    );
}

export default BlogpostPage;