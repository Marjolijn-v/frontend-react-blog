import posts from "../constants/data.json";

function formattedDate() {
    const fullDate = new Date(posts.created);


    return  fullDate.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export default formattedDate;