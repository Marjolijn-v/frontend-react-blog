import './blogpostPage.css'
import {Link, useParams} from "react-router-dom";

import {useEffect, useState} from "react";
import axios from "axios";
import formattedDate from "../../helpers/formattedDate.js";
import allBlogs from "../allBlogs/allBlogs.jsx";


function BlogpostPage() {

    const [blogpost, setBlogpost] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const { id } = useParams();

    async function fetchBlogpost() {
        try {
            // const response = posts.find((post) => {
            //     return post.id === id;
            // });
            toggleLoading(true);
            setError('');
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts?id=${id}`, {
                headers: {
                    'novi-education-project-id': '2767c1c3-13ff-45b7-a2b7-6870077651b3',
                }
            });
            console.log(response.data);
            setBlogpost(response.data);

        } catch (e) {
            console.error(e);
            setError('Er is iets mis gegaan bij het laden van de blogpost')
        } finally {
            toggleLoading(false);
        }
    }

    async function deleteBlogpost() {
        try {
            const response = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts?id=${id}`, {
                headers: {
                    'novi-education-project-id': '2767c1c3-13ff-45b7-a2b7-6870077651b3',
                }
            });
            response.status === 204 && setBlogpost(allBlogs.filter(blogpost => blogpost.id !== id));
            //hoe kom ik bij allBlogposts uit de allBlogs functie.
            console.log("De blogpost is verwijderd.");

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        void fetchBlogpost();
        console.log(fetchBlogpost);
    }, [id]);

    return (
        <>
            {error && <p>{error}</p>}
            <ul className="">
                {blogpost?.length > 0 && blogpost.map((blog) => {
                    return <li key={blog.id}>
                        <article>
                            <h1>{blog?.title}</h1>
                            <h2>{blog?.subtitle}</h2>
                            <p>Geschreven door {blog?.author} op {formattedDate(blog)}</p>
                            <p>{blog?.content}</p>
                            <p>{blog?.comments} reactie - {blog?.shares} keer gedeeld</p>
                        </article>
                    </li>
                })}
                <li>

                </li>
            </ul>
            <button type="button" className="" onClick={deleteBlogpost}>Verwijder deze post</button>
            <Link to="/overzicht" className="link-to-all-blogs" aria-disabled={loading}> Terug naar overzicht</Link>



            {/*/!*<button onClick={fetchBlogpost}>Haal blog op!</button>*!/*/}




        </>
    );
}

export default BlogpostPage;