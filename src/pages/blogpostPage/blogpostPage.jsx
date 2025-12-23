import './blogpostPage.css'
import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import {useState} from "react";
import formattedDate from "../../helpers/formattedDate.js";


function BlogpostPage() {

    const [blogpost, setBlogpost] = useState({});
    const { title } = useParams();

    async function fetchBlogpost() {
        try {
            const response = posts.find((post) => {
                return post.title === title;
            });
            setBlogpost(response);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>

            <button onClick={fetchBlogpost}>Haal blog op!</button>
            <article>
                <h1>{blogpost.title}</h1>
                <h2>{blogpost?.subtitle}</h2>
                <p>Geschreven door {blogpost?.author} op {formattedDate(blogpost?.created)}</p>
                <p>{blogpost.content}</p>
                <p>{blogpost.comments} reactie - {blogpost?.shares} keer gedeeld</p>
                <Link to="/overzicht" className="link-to-all-blogs"> Terug naar overzicht</Link>
            </article>
        </>
    );
}

export default BlogpostPage;