import './blogpostPage.css'
import {Link, useParams} from "react-router-dom";

import {useEffect, useState} from "react";
// import formattedDate from "../../helpers/formattedDate.js";
import axios from "axios";


function BlogpostPage() {

    // const [blogpost, setBlogpost] = useState(null);
    const [error, setError] = useState('');
    const { id } = useParams();

    async function fetchBlogpost() {
        try {
            // const response = posts.find((post) => {
            //     return post.id === id;
            // });
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': '2767c1c3-13ff-45b7-a2b7-6870077651b3',
                },
                params: {
                    id: id,
                },
            });
            console.log(response.data);
            setError('');

            // setBlogpost(response);

        } catch (e) {
            console.error(e);
            setError('Er is iets mis gegaan bij het laden van de blogpost')
        }
    }

    useEffect(() => {
        void fetchBlogpost();
        console.log(fetchBlogpost);
    }, [id]);

    return (
        <>

            <button onClick={fetchBlogpost}>Haal blog op!</button>
            <article>
                {/*<h1>{blogpost.title}</h1>*/}
                {/*<h2>{blogpost?.subtitle}</h2>*/}
                {/*<p>Geschreven door {blogpost?.author} op {formattedDate(blogpost?.created)}</p>*/}
                {/*<p>{blogpost.content}</p>*/}
                {/*<p>{blogpost.comments} reactie - {blogpost?.shares} keer gedeeld</p>*/}
                <Link to="/overzicht" className="link-to-all-blogs"> Terug naar overzicht</Link>
            </article>
            {error && <p>{error}</p>}
        </>
    );
}

export default BlogpostPage;