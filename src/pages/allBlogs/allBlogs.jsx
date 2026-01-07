import './allBlogs.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";




function AllBlogs() {
    // console.log(posts);
    // console.log(posts.length);
    const [allBlogposts, setAllBlogposts] = useState([]);
    const [error, setError] = useState('');

    async function fetchBlogpost() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': '2767c1c3-13ff-45b7-a2b7-6870077651b3',
                }
            });
            console.log(response);
            setAllBlogposts(response.data);
            setError('');

        } catch (error) {
            console.error(error);
            setError('Er is iets misgegaan bij het ophalen van de blogposts.');
        }
    }

    useEffect(() => {
        void fetchBlogpost();
        console.log(fetchBlogpost);
    }, []);

    return (
        <>
            <header>
                <h1>Bekijk alle {allBlogposts.length} posts op het platform</h1>
            </header>
            <div>
                {error ? <p>{error}</p> :
                    <ul className="list-of-blogs">
                        {allBlogposts && allBlogposts.map((post) => {
                            return <li key={post.id} className="list-item">
                                <article className="card">
                                    <span className="card-title"><h3><Link to={`/blogs/${post.title}`} className="link-to-blog">{post.title}</Link></h3><p>({post?.author})</p></span>
                                    <p>{post.comments} reacties - {post?.shares} keer gedeeld</p>
                                </article>
                            </li>
                        })}
                    </ul>
                }


            </div>

        </>
    );
}

export default AllBlogs;