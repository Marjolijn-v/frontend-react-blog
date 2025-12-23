import './allBlogs.css'
import posts from '../../constants/data.json';
import {Link} from "react-router-dom";




function AllBlogs() {
    // console.log(posts);
    // console.log(posts.length);



    return (
        <>
            <header>
                <h1>Bekijk alle {posts.length} posts op het platform</h1>
            </header>
            <div>

                <ul className="list-of-blogs">
                    {posts.map((post) => {
                        return <li key={post.id} className="list-item">
                            <article className="card">
                                <span className="card-title"><h3><Link to={`/blogs/${post.title}`} className="link-to-blog">{post.title}</Link></h3><p>({post?.author})</p></span>
                                <p>{post.comments} reacties - {post?.shares} keer gedeeld</p>
                            </article>
                        </li>
                    })}
                </ul>
            </div>

        </>
    );
}

export default AllBlogs;