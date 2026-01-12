// import posts from "../constants/data.json";

function formattedDate(blog) {
    // const fullDate = new Date(posts.created);


    return blog?.created
    ? new Date(blog.created).toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';
}

export default formattedDate;